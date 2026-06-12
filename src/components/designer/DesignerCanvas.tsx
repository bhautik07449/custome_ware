import React, { useRef } from 'react';
import { useDesigner, type Layer } from '../../context/DesignerContext';

export default function DesignerCanvas() {
  const { 
    product, layers, selectedLayerId, setSelectedLayerId, 
    activeSide, setActiveSide, updateLayer, setIsSheetOpen 
  } = useDesigner();

  const dragRef = useRef<{ id: string, startX: number, startY: number, initialX: number, initialY: number, containerW: number, containerH: number } | null>(null);

  // Drag and Drop Logic
  const onPointerDown = (e: React.PointerEvent, layer: Layer) => {
    e.stopPropagation();
    setSelectedLayerId(layer.id);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    const container = (e.currentTarget as HTMLElement).parentElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();

    dragRef.current = {
      id: layer.id,
      startX: e.clientX,
      startY: e.clientY,
      initialX: layer.x,
      initialY: layer.y,
      containerW: rect.width,
      containerH: rect.height
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const { id, startX, startY, initialX, initialY, containerW, containerH } = dragRef.current;

    // Calculate percentage difference
    const dx = ((e.clientX - startX) / containerW) * 100;
    const dy = ((e.clientY - startY) / containerH) * 100;

    updateLayer(id, {
      x: Math.min(100, Math.max(0, initialX + dx)),
      y: Math.min(100, Math.max(0, initialY + dy))
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragRef.current) {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      dragRef.current = null;
    }
  };

  return (
    <>
    <section className="flex-1 canvas-bg-pattern relative hidden md:flex flex-col items-center justify-center p-2xl w-full overflow-auto hide-scrollbar touch-pan-x touch-pan-y">
      {/* Canvas Controls */}
      <div className="absolute top-md left-md flex flex-col gap-sm z-10">
        <button className="bg-surface-container-lowest shadow-sm border border-outline-variant p-sm rounded-lg hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">zoom_in</span>
        </button>
        <button className="bg-surface-container-lowest shadow-sm border border-outline-variant p-sm rounded-lg hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">zoom_out</span>
        </button>
        <button className="bg-surface-container-lowest shadow-sm border border-outline-variant p-sm rounded-lg hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined">center_focus_weak</span>
        </button>
      </div>
      <div className="absolute bottom-md left-1/2 -translate-x-1/2 bg-surface-container-lowest px-md py-sm rounded-full shadow-lg border border-outline-variant flex gap-md z-10">
        <button onClick={() => setActiveSide('front')} className={`flex items-center gap-sm px-md py-xs rounded-full font-label-md transition-colors ${activeSide === 'front' ? 'bg-secondary text-on-secondary' : 'text-on-surface-variant hover:bg-surface-container'}`}>
          <span className="material-symbols-outlined text-[18px]">front_hand</span>
          Front
        </button>
        <button onClick={() => setActiveSide('back')} className={`flex items-center gap-sm px-md py-xs rounded-full font-label-md transition-colors ${activeSide === 'back' ? 'bg-secondary text-on-secondary' : 'text-on-surface-variant hover:bg-surface-container'}`}>
          <span className="material-symbols-outlined text-[18px]">back_hand</span>
          Back
        </button>
      </div>

      {/* T-Shirt Workspace */}
      <div id="tshirt-canvas-desktop" className="relative w-full max-w-[500px] aspect-[4/5] flex items-center justify-center">
        {/* Shirt Base */}
        <div className={`absolute inset-0 flex items-center justify-center transition-transform ${activeSide === 'back' ? '-scale-x-100' : ''}`}>
          <div className="absolute inset-0 z-0" style={{ backgroundColor: product.color, mixBlendMode: 'multiply', opacity: 0.8, WebkitMaskImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAkFzQLGXH359AdlyMrQnZMrM78nZnNL53kebz61twzrno4Hv2UD94kfpjZqbQb2HeLRbcDnsUVqve_uHPbpA2dqwL6c7g7hkSCLyKVRzEbBN08hoXehr9mXfAqW5w3UVLE5VDM0qoHHEOsSJgmnJdUHMo0G6Yi6oJhAE_ZKf6riSt3_ADU3HftMQa-uTwNlNoUC9rSyR5p_2YGO1VsIZ3D8mtiSnQJFCVl0fV27RtWua9QOq3IdZ5lKg0uu_Ur7spQIcmO9haUqf8)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
          <img crossOrigin="anonymous" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl z-10" alt="T-Shirt Mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkFzQLGXH359AdlyMrQnZMrM78nZnNL53kebz61twzrno4Hv2UD94kfpjZqbQb2HeLRbcDnsUVqve_uHPbpA2dqwL6c7g7hkSCLyKVRzEbBN08hoXehr9mXfAqW5w3UVLE5VDM0qoHHEOsSJgmnJdUHMo0G6Yi6oJhAE_ZKf6riSt3_ADU3HftMQa-uTwNlNoUC9rSyR5p_2YGO1VsIZ3D8mtiSnQJFCVl0fV27RtWua9QOq3IdZ5lKg0uu_Ur7spQIcmO9haUqf8" />
        </div>
        {/* Design Area Box (dashed) */}
        <div
          className="relative z-10 w-[60%] h-[60%] border-2 border-dashed border-secondary/30 flex items-center justify-center group touch-none"
          onPointerDown={(e) => { if (e.target === e.currentTarget) setSelectedLayerId(null); }}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div className="absolute top-0 right-0 -translate-y-full -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-secondary text-on-secondary text-[10px] px-sm py-xs rounded">Designable Area</span>
          </div>
          {/* Render Layers */}
          {layers.filter(l => l.visible && l.side === activeSide).map(layer => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <div
                key={layer.id}
                onPointerDown={(e) => onPointerDown(e, layer)}
                className={`absolute cursor-pointer border-2 ${isSelected ? 'border-secondary' : 'border-transparent hover:border-outline-variant/50'} select-none`}
                style={{
                  left: `${layer.x}%`,
                  top: `${layer.y}%`,
                  width: `${layer.width}%`,
                  height: `${layer.height}%`,
                  touchAction: 'none'
                }}
              >
                {isSelected && (
                  <>
                    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none"></div>
                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none"></div>
                    <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none"></div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none"></div>
                  </>
                )}
                {layer.type === 'text' && (
                  <div className="w-full h-full flex items-center justify-center pointer-events-none" style={{ color: layer.color, fontFamily: layer.fontFamily, letterSpacing: `${layer.letterSpacing}px`, textAlign: layer.textAlign }}>
                    <span className="font-bold select-none whitespace-pre-wrap break-words leading-none" style={{ fontSize: layer.fontSize ? `${layer.fontSize}px` : `clamp(10px, ${layer.height * 3}px, 64px)` }}>{layer.content}</span>
                  </div>
                )}
                {layer.type === 'image' && (
                  <div className="w-full h-full flex items-center justify-center pointer-events-none overflow-hidden mix-blend-multiply">
                    <img src={layer.content} className="w-full h-full object-contain pointer-events-none" alt={layer.name} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ------------------------------------------------------------- */}
    {/* MOBILE Center Canvas                                          */}
    {/* ------------------------------------------------------------- */}
    <section className="flex-1 canvas-bg-pattern relative md:hidden flex flex-col items-center justify-center p-md overflow-auto hide-scrollbar w-full touch-pan-x touch-pan-y">
      {/* T-Shirt Mockup Layer */}
      <div id="tshirt-canvas-mobile" className="relative w-full max-w-[320px] aspect-[4/5] flex items-center justify-center pointer-events-none">
        <div className={`absolute inset-0 transition-transform ${activeSide === 'back' ? '-scale-x-100' : ''}`}>
          <div className="absolute inset-0 z-0" style={{ backgroundColor: product.color, mixBlendMode: 'multiply', opacity: 0.8, WebkitMaskImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuD771tj8KhlXtXJgPb4p6eSPH2SlwmwKDZ9dbnIYNdN6EW1lWjlI6vB_RpsjfZoCgnvKTKCQ_ZOD970Wc1zrG78Jj5wB2mNMmnZClYkTNUA2uGP1YAgCsgmZxM4lZo1bzFiIMqzpbg5612vCWPX6715jfjgBrxddvjoh65AZgoc3IoWRiI5Cn5plNXSip-XYNnE0Zy2DkqrFH-28K0ajsEZA9KCd2LsTD-bOreTIssPB90M9rIrIxSUePMoYJYfBiMtGkk1K36bma4)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
          <img crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-contain mix-blend-multiply opacity-90 z-10" alt="T-Shirt Mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD771tj8KhlXtXJgPb4p6eSPH2SlwmwKDZ9dbnIYNdN6EW1lWjlI6vB_RpsjfZoCgnvKTKCQ_ZOD970Wc1zrG78Jj5wB2mNMmnZClYkTNUA2uGP1YAgCsgmZxM4lZo1bzFiIMqzpbg5612vCWPX6715jfjgBrxddvjoh65AZgoc3IoWRiI5Cn5plNXSip-XYNnE0Zy2DkqrFH-28K0ajsEZA9KCd2LsTD-bOreTIssPB90M9rIrIxSUePMoYJYfBiMtGkk1K36bma4" />
        </div>
        {/* Design Bounding Box (Simulation) */}
        <div
          className="w-1/2 h-1/2 border-2 border-dashed border-secondary/40 rounded-lg flex items-center justify-center relative pointer-events-auto touch-none"
          onPointerDown={(e) => { if (e.target === e.currentTarget) { setSelectedLayerId(null); } }}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {layers.filter(l => l.visible && l.side === activeSide).map(layer => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <div
                key={layer.id}
                onPointerDown={(e) => onPointerDown(e, layer)}
                className={`absolute cursor-pointer border-2 ${isSelected ? 'border-secondary' : 'border-transparent'} select-none`}
                style={{
                  left: `${layer.x}%`,
                  top: `${layer.y}%`,
                  width: `${layer.width}%`,
                  height: `${layer.height}%`,
                  touchAction: 'none'
                }}
              >
                {isSelected && (
                  <>
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-white border border-secondary rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-[16px]">sync</span>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white border border-secondary rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform pointer-events-none">
                      <span className="material-symbols-outlined text-secondary text-[16px]">open_in_full</span>
                    </div>
                  </>
                )}
                {layer.type === 'text' && (
                  <div className="w-full h-full flex items-center justify-center pointer-events-none" style={{ color: layer.color, fontFamily: layer.fontFamily, letterSpacing: `${layer.letterSpacing}px`, textAlign: layer.textAlign }}>
                    <span className="font-bold select-none whitespace-pre-wrap break-words leading-none text-center" style={{ fontSize: layer.fontSize ? `${layer.fontSize}px` : `clamp(10px, ${layer.height * 3}px, 48px)` }}>{layer.content}</span>
                  </div>
                )}
                {layer.type === 'image' && (
                  <div className="w-full h-full flex items-center justify-center pointer-events-none overflow-hidden mix-blend-multiply">
                    <img src={layer.content} className="w-full h-full object-contain pointer-events-none" alt={layer.name} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Zoom/Controls overlay */}
      <div className="absolute bottom-24 right-md flex flex-col gap-sm">
        <button className="w-10 h-10 bg-surface rounded-full shadow-md flex items-center justify-center border border-outline-variant/30 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-on-surface">add</span>
        </button>
        <button className="w-10 h-10 bg-surface rounded-full shadow-md flex items-center justify-center border border-outline-variant/30 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-on-surface">remove</span>
        </button>
        <button className="w-10 h-10 bg-surface rounded-full shadow-md flex items-center justify-center border border-outline-variant/30 active:scale-95 transition-transform" onClick={() => setIsSheetOpen(true)}>
          <span className="material-symbols-outlined text-on-surface">tune</span>
        </button>
      </div>

      {/* Edit Properties Floating Button */}
      {selectedLayerId && (
        <button
          onClick={() => setIsSheetOpen(true)}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-lg py-sm rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.2)] font-label-md font-bold flex items-center gap-sm active:scale-95 transition-transform z-30 animate-in slide-in-from-bottom-4 fade-in duration-300 md:hidden"
        >
          <span className="material-symbols-outlined text-[20px]">tune</span>
          Edit Layer
        </button>
      )}
    </section>
    </>
  );
}
