import React, { useRef } from 'react';
import { useDesigner, type Layer } from '../../context/DesignerContext';
import TShirtSVG, { getDesignAreaFraction } from './TShirtSVG';

function LayerRenderer({ layer }: { layer: Layer }) {
  const style: React.CSSProperties = {
    opacity: (layer.opacity ?? 100) / 100,
    transform: layer.rotation ? `rotate(${layer.rotation}deg)` : undefined,
    width: '100%',
    height: '100%',
  };

  if (layer.type === 'text') {
    return (
      <div
        className="w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          color: layer.color,
          fontFamily: layer.fontFamily,
          letterSpacing: `${layer.letterSpacing ?? 0}px`,
          textAlign: layer.textAlign,
          ...style,
        }}
      >
        <span
          className="font-bold select-none whitespace-pre-wrap break-words leading-none"
          style={{ fontSize: layer.fontSize ? `${layer.fontSize}px` : `clamp(10px, ${layer.height * 3}px, 64px)` }}
        >
          {layer.content}
        </span>
      </div>
    );
  }

  if (layer.type === 'image') {
    return (
      <div className="w-full h-full flex items-center justify-center pointer-events-none overflow-hidden" style={style}>
        <img src={layer.content} className="w-full h-full object-contain" alt={layer.name} />
      </div>
    );
  }

  if (layer.type === 'shape') {
    return (
      <div className="w-full h-full flex items-center justify-center pointer-events-none" style={style}>
        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ fill: layer.color || '#3b82f6' }}>
          <path d={layer.content} />
        </svg>
      </div>
    );
  }

  if (layer.type === 'emoji') {
    return (
      <div className="w-full h-full flex items-center justify-center pointer-events-none" style={style}>
        <span style={{ fontSize: layer.fontSize ? `${layer.fontSize}px` : '48px', lineHeight: 1 }}>
          {layer.content}
        </span>
      </div>
    );
  }

  return null;
}

export default function DesignerCanvas() {
  const {
    product, layers, selectedLayerId, setSelectedLayerId,
    activeSide, setActiveSide, updateLayer, setIsSheetOpen,
  } = useDesigner();

  type DragRef = {
    id: string; startX: number; startY: number;
    initialX: number; initialY: number;
    containerW: number; containerH: number;
  };
  const dragRef = useRef<DragRef | null>(null);

  const onPointerDown = (e: React.PointerEvent, layer: Layer) => {
    if (layer.locked) return;
    e.stopPropagation();
    setSelectedLayerId(layer.id);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const container = (e.currentTarget as HTMLElement).parentElement;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    dragRef.current = {
      id: layer.id, startX: e.clientX, startY: e.clientY,
      initialX: layer.x, initialY: layer.y,
      containerW: rect.width, containerH: rect.height,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const { id, startX, startY, initialX, initialY, containerW, containerH } = dragRef.current;
    const dx = ((e.clientX - startX) / containerW) * 100;
    const dy = ((e.clientY - startY) / containerH) * 100;
    updateLayer(id, {
      x: Math.min(95, Math.max(0, initialX + dx)),
      y: Math.min(95, Math.max(0, initialY + dy)),
    });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragRef.current) {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      dragRef.current = null;
    }
  };

  const da = getDesignAreaFraction(product.style);
  const daStyle = {
    left:   `${da.left   * 100}%`,
    top:    `${da.top    * 100}%`,
    width:  `${da.width  * 100}%`,
    height: `${da.height * 100}%`,
  };

  const DesignLayers = () => (
    <>
      {layers.filter(l => l.visible && l.side === activeSide).map(layer => {
        const isSelected = layer.id === selectedLayerId;
        return (
          <div
            key={layer.id}
            onPointerDown={e => onPointerDown(e, layer)}
            className={`absolute cursor-pointer border-2 transition-colors ${isSelected ? 'border-secondary layer-selected' : 'border-transparent hover:border-outline-variant/50'} select-none ${layer.locked ? 'cursor-not-allowed' : ''}`}
            style={{
              left: `${layer.x}%`,
              top: `${layer.y}%`,
              width: `${layer.width}%`,
              height: `${layer.height}%`,
              touchAction: 'none',
            }}
          >
            {isSelected && (
              <>
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none shadow-sm" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none shadow-sm" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none shadow-sm" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-secondary pointer-events-none shadow-sm" />
                {layer.locked && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[9px] px-xs py-[1px] rounded font-bold">LOCKED</div>
                )}
              </>
            )}
            <LayerRenderer layer={layer} />
          </div>
        );
      })}
    </>
  );

  return (
    <>
      {/* ── DESKTOP ── */}
      <section className="flex-1 designer-grid-bg relative hidden md:flex flex-col items-center justify-center p-2xl w-full overflow-auto hide-scrollbar touch-pan-x touch-pan-y">
        {/* Canvas Controls */}
        <div className="absolute top-md left-md flex flex-col gap-sm z-10">
          {[
            { icon: 'zoom_in', title: 'Zoom In' },
            { icon: 'zoom_out', title: 'Zoom Out' },
            { icon: 'center_focus_weak', title: 'Fit' },
          ].map(btn => (
            <button
              key={btn.icon}
              title={btn.title}
              className="bg-surface-container-lowest shadow-sm border border-outline-variant p-sm rounded-lg hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined">{btn.icon}</span>
            </button>
          ))}
        </div>

        {/* Side Toggle */}
        <div className="absolute bottom-md left-1/2 -translate-x-1/2 bg-surface-container-lowest px-md py-sm rounded-full shadow-lg border border-outline-variant flex gap-md z-10">
          {(['front', 'back'] as const).map(side => (
            <button
              key={side}
              onClick={() => setActiveSide(side)}
              className={`flex items-center gap-sm px-md py-xs rounded-full font-label-md transition-colors ${activeSide === side ? 'bg-secondary text-on-secondary' : 'text-on-surface-variant hover:bg-surface-container'}`}
            >
              <span className="material-symbols-outlined text-[18px]">{side === 'front' ? 'front_hand' : 'back_hand'}</span>
              {side === 'front' ? 'Front' : 'Back'}
            </button>
          ))}
        </div>

        {/* T-Shirt Workspace — 500×560 viewBox aspect ratio */}
        <div
          id="tshirt-canvas-desktop"
          className="relative w-full max-w-[440px] flex items-center justify-center drop-shadow-2xl"
          style={{ aspectRatio: '500/560' }}
        >
          {/* SVG T-Shirt — flipped for back view */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${activeSide === 'back' ? '-scale-x-100' : ''}`}
          >
            <TShirtSVG color={product.color} style={product.style} className="w-full h-full" />
          </div>

          {/* Design Area — chest print zone
               Matches getDesignAreaFraction(): left=30%, top=30%, w=40%, h=38% */}
          <div
            id="design-area-desktop"
            className="absolute z-10 border-2 border-dashed border-secondary/50 group touch-none"
            style={daStyle}
            onPointerDown={e => { if (e.target === e.currentTarget) setSelectedLayerId(null); }}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <div className="absolute -top-0 right-0 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-secondary text-on-secondary text-[10px] px-sm py-xs rounded">Print Area</span>
            </div>
            <DesignLayers />
          </div>
        </div>
      </section>


      {/* ── MOBILE ── */}
      <section className="flex-1 designer-grid-bg relative md:hidden flex flex-col items-center justify-center p-md overflow-auto hide-scrollbar w-full touch-pan-x touch-pan-y">
        <div
          id="tshirt-canvas-mobile"
          className="relative w-full max-w-[290px] flex items-center justify-center"
          style={{ aspectRatio: '500/560' }}
        >
          {/* SVG T-Shirt */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ${activeSide === 'back' ? '-scale-x-100' : ''}`}
          >
            <TShirtSVG color={product.color} style={product.style} className="w-full h-full" />
          </div>

          {/* Design Area */}
          <div
            id="design-area-mobile"
            className="absolute z-10 border-2 border-dashed border-secondary/50 pointer-events-auto touch-none"
            style={daStyle}
            onPointerDown={e => { if (e.target === e.currentTarget) setSelectedLayerId(null); }}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <DesignLayers />
          </div>
        </div>

        {/* Mobile FAB controls */}
        <div className="absolute bottom-24 right-md flex flex-col gap-sm z-30">
          {[{ icon: 'add', title: 'Zoom In' }, { icon: 'remove', title: 'Zoom Out' }].map(b => (
            <button
              key={b.icon}
              className="w-10 h-10 bg-surface rounded-full shadow-md flex items-center justify-center border border-outline-variant/30 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-on-surface">{b.icon}</span>
            </button>
          ))}
          <button
            className="w-10 h-10 bg-surface rounded-full shadow-md flex items-center justify-center border border-outline-variant/30 active:scale-95 transition-transform"
            onClick={() => setIsSheetOpen(true)}
          >
            <span className="material-symbols-outlined text-on-surface">tune</span>
          </button>
        </div>

        {selectedLayerId && (
          <button
            onClick={() => setIsSheetOpen(true)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-lg py-sm rounded-full shadow-xl font-label-md font-bold flex items-center gap-sm active:scale-95 transition-transform z-30 md:hidden"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            Edit Properties
          </button>
        )}
      </section>
    </>
  );
}
