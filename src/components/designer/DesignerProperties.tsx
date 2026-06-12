import { useDesigner, FONTS } from '../../context/DesignerContext';

export default function DesignerProperties() {
  const { 
    activeLayer, updateLayer, isSheetOpen, setIsSheetOpen, layers, selectedLayerId, setSelectedLayerId, deleteLayer 
  } = useDesigner();

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP Right Panel                                           */}
      {/* ------------------------------------------------------------- */}
      <aside className="h-full w-[320px] bg-surface-container-low border-l border-outline-variant hidden md:flex flex-col z-10 relative">
        <div className="p-md border-b border-outline-variant">
          <h2 className="font-label-md text-on-surface">Properties</h2>
          <p className="text-label-sm text-on-surface-variant">Selection: {activeLayer ? activeLayer.name : 'None'}</p>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-md space-y-xl">
          {activeLayer ? (
            <>
              {/* Font Settings */}
              {activeLayer.type === 'text' && (
                <div className="space-y-sm">
                  <label className="font-label-sm text-on-surface-variant uppercase tracking-wider">Typography</label>
                  <div className="space-y-xs mb-sm">
                    <span className="text-[10px] text-on-surface-variant">Text Content</span>
                    <input
                      className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary"
                      type="text"
                      value={activeLayer.content}
                      onChange={(e) => updateLayer(activeLayer.id, { content: e.target.value })}
                    />
                  </div>
                  <select
                    className="w-full bg-surface border border-outline-variant rounded-lg p-sm font-label-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                    value={activeLayer.fontFamily}
                    onChange={(e) => updateLayer(activeLayer.id, { fontFamily: e.target.value })}
                  >
                    {FONTS.map(font => <option key={font} value={font}>{font}</option>)}
                  </select>
                  <div className="flex gap-sm mt-sm">
                    <button onClick={() => updateLayer(activeLayer.id, { textAlign: 'left' })} className={`flex-1 p-sm rounded-lg flex items-center justify-center transition-colors ${activeLayer.textAlign === 'left' ? 'bg-secondary text-on-secondary' : 'bg-surface border border-outline-variant hover:bg-surface-container'}`}>
                      <span className="material-symbols-outlined">format_align_left</span>
                    </button>
                    <button onClick={() => updateLayer(activeLayer.id, { textAlign: 'center' })} className={`flex-1 p-sm rounded-lg flex items-center justify-center transition-colors ${activeLayer.textAlign === 'center' ? 'bg-secondary text-on-secondary' : 'bg-surface border border-outline-variant hover:bg-surface-container'}`}>
                      <span className="material-symbols-outlined">format_align_center</span>
                    </button>
                    <button onClick={() => updateLayer(activeLayer.id, { textAlign: 'right' })} className={`flex-1 p-sm rounded-lg flex items-center justify-center transition-colors ${activeLayer.textAlign === 'right' ? 'bg-secondary text-on-secondary' : 'bg-surface border border-outline-variant hover:bg-surface-container'}`}>
                      <span className="material-symbols-outlined">format_align_right</span>
                    </button>
                  </div>
                  <div className="mt-sm">
                    <div className="flex justify-between mb-sm">
                      <label className="font-label-md text-on-surface-variant">Letter Spacing</label>
                      <span className="font-label-sm text-secondary">{activeLayer.letterSpacing}px</span>
                    </div>
                    <input
                      className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                      type="range"
                      min="0" max="10" step="0.5"
                      value={activeLayer.letterSpacing}
                      onChange={(e) => updateLayer(activeLayer.id, { letterSpacing: parseFloat(e.target.value) })}
                    />
                  </div>
                  <div className="mt-sm">
                    <div className="flex justify-between mb-sm">
                      <label className="font-label-md text-on-surface-variant">Font Size</label>
                      <span className="font-label-sm text-secondary">{activeLayer.fontSize || 32}px</span>
                    </div>
                    <input
                      className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                      type="range"
                      min="10" max="150" step="1"
                      value={activeLayer.fontSize || 32}
                      onChange={(e) => updateLayer(activeLayer.id, { fontSize: parseInt(e.target.value) })}
                    />
                  </div>
                </div>
              )}
              {/* Object Settings */}
              <div className="space-y-sm border-t border-outline-variant/30 pt-md mt-md">
                <label className="font-label-sm text-on-surface-variant uppercase tracking-wider">Position &amp; Size (%)</label>
                <div className="grid grid-cols-2 gap-sm">
                  <div className="space-y-xs">
                    <span className="text-[10px] text-on-surface-variant">X</span>
                    <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" value={activeLayer.x} onChange={(e) => updateLayer(activeLayer.id, { x: Number(e.target.value) })} />
                  </div>
                  <div className="space-y-xs">
                    <span className="text-[10px] text-on-surface-variant">Y</span>
                    <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" value={activeLayer.y} onChange={(e) => updateLayer(activeLayer.id, { y: Number(e.target.value) })} />
                  </div>
                  <div className="space-y-xs">
                    <span className="text-[10px] text-on-surface-variant">Width</span>
                    <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" value={activeLayer.width} onChange={(e) => updateLayer(activeLayer.id, { width: Number(e.target.value) })} />
                  </div>
                  <div className="space-y-xs">
                    <span className="text-[10px] text-on-surface-variant">Height</span>
                    <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" value={activeLayer.height} onChange={(e) => updateLayer(activeLayer.id, { height: Number(e.target.value) })} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-xl text-on-surface-variant">
              <span className="material-symbols-outlined text-[48px] mb-md opacity-50">touch_app</span>
              <p className="font-label-md">Select a layer to edit properties</p>
            </div>
          )}

          {/* Layer List */}
          <div className="space-y-sm border-t border-outline-variant/30 pt-md mt-md">
            <label className="font-label-sm text-on-surface-variant uppercase tracking-wider">Layers</label>
            <div className="space-y-xs">
              {layers.map(layer => (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`flex items-center gap-md p-sm rounded-lg border cursor-pointer transition-all ${layer.id === selectedLayerId ? 'bg-surface-container-highest border-secondary' : 'bg-surface border-transparent hover:border-outline-variant'}`}
                >
                  <span className="material-symbols-outlined text-[18px]">{layer.type === 'text' ? 'title' : 'image'}</span>
                  <span className="flex-1 font-label-sm truncate">{layer.name}</span>
                  <span
                    className="material-symbols-outlined text-[18px] cursor-pointer text-on-surface-variant hover:text-on-surface"
                    onClick={(e) => { e.stopPropagation(); updateLayer(layer.id, { visible: !layer.visible }); }}
                  >
                    {layer.visible ? 'visibility' : 'visibility_off'}
                  </span>
                  <span
                    className="material-symbols-outlined text-[18px] cursor-pointer text-error hover:text-error/80"
                    onClick={(e) => { e.stopPropagation(); deleteLayer(layer.id); }}
                  >
                    delete
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE Bottom Sheet                                           */}
      {/* ------------------------------------------------------------- */}
      {/* Backdrop */}
      {isSheetOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[65] md:hidden transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setIsSheetOpen(false)}
        />
      )}
      {/* Expandable Bottom Sheet (Properties) */}
      <div
        className={`fixed inset-x-0 bottom-0 pb-safe bg-surface-container-lowest z-[70] rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-md pb-sm cursor-pointer" onClick={toggleSheet}>
          <div className="w-12 h-1.5 bg-outline-variant rounded-full"></div>
        </div>
        <div className="px-grid-margin pb-xl max-h-[530px] overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-headline-md text-label-md text-on-surface font-bold uppercase tracking-wider">Properties</h3>
            <span className="text-on-surface-variant font-label-sm">Object: {activeLayer ? activeLayer.name : 'None'}</span>
          </div>
          {/* Contextual Controls */}
          {activeLayer ? (
            <div className="space-y-xl">
              {activeLayer.type === 'text' && (
                <>
                  <div className="space-y-xs">
                    <label className="font-label-md text-on-surface-variant block mb-sm">Text Content</label>
                    <input
                      className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary"
                      type="text"
                      value={activeLayer.content}
                      onChange={(e) => updateLayer(activeLayer.id, { content: e.target.value })}
                    />
                  </div>
                  {/* Color Picker */}
                  <div>
                    <label className="font-label-md text-on-surface-variant block mb-sm">Text Color</label>
                    <div className="flex gap-md overflow-x-auto hide-scrollbar pb-xs">
                      {[{ c: '#000000', n: 'Black' }, { c: '#FFFFFF', n: 'White' }, { c: '#ef4444', n: 'Red' }, { c: '#3b82f6', n: 'Blue' }, { c: '#10b981', n: 'Green' }].map(color => (
                        <div key={color.c} onClick={() => updateLayer(activeLayer.id, { color: color.c })} className={`w-10 h-10 flex-shrink-0 rounded-full cursor-pointer ${activeLayer.color === color.c ? 'border-2 border-secondary ring-2 ring-secondary/20 p-0.5' : 'border border-outline-variant p-0.5'}`}>
                          <div className="w-full h-full rounded-full border border-outline-variant/30" style={{ backgroundColor: color.c }}></div>
                        </div>
                      ))}
                      <div className="w-10 h-10 flex-shrink-0 rounded-full border border-outline-variant p-0.5 flex items-center justify-center bg-surface-container active:scale-95 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">palette</span>
                      </div>
                    </div>
                  </div>
                  {/* Font Selection */}
                  <div>
                    <label className="font-label-md text-on-surface-variant block mb-sm">Font Family</label>
                    <div className="grid grid-cols-2 gap-sm">
                      {FONTS.map(font => (
                        <button key={font} onClick={() => updateLayer(activeLayer.id, { fontFamily: font })} className={`py-sm px-md rounded-xl active:scale-95 transition-transform truncate ${activeLayer.fontFamily === font ? 'bg-surface-container-high text-on-surface font-bold border-2 border-secondary' : 'bg-surface-container text-on-surface border-2 border-transparent'}`} style={{ fontFamily: font }}>{font.split(' ')[0]}</button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-md">
                    <div>
                      <div className="flex justify-between mb-sm">
                        <label className="font-label-md text-on-surface-variant">Spacing</label>
                        <span className="font-label-sm text-secondary">{activeLayer.letterSpacing}px</span>
                      </div>
                      <input
                        className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                        type="range" min="0" max="10" step="0.5"
                        value={activeLayer.letterSpacing}
                        onChange={(e) => updateLayer(activeLayer.id, { letterSpacing: parseFloat(e.target.value) })}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-sm">
                        <label className="font-label-md text-on-surface-variant">Size</label>
                        <span className="font-label-sm text-secondary">{activeLayer.fontSize || 32}px</span>
                      </div>
                      <input
                        className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                        type="range" min="10" max="150" step="1"
                        value={activeLayer.fontSize || 32}
                        onChange={(e) => updateLayer(activeLayer.id, { fontSize: parseInt(e.target.value) })}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="text-center py-xl text-on-surface-variant">
              <p className="font-label-md">Select a layer to edit properties</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
