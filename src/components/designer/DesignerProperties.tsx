import { useDesigner, FONTS } from '../../context/DesignerContext';

const TEXT_COLORS = [
  { c: '#000000', n: 'Black' },
  { c: '#FFFFFF', n: 'White' },
  { c: '#ef4444', n: 'Red' },
  { c: '#3b82f6', n: 'Blue' },
  { c: '#10b981', n: 'Green' },
  { c: '#f59e0b', n: 'Amber' },
  { c: '#8b5cf6', n: 'Purple' },
  { c: '#ec4899', n: 'Pink' },
];

export default function DesignerProperties() {
  const {
    activeLayer, updateLayer, isSheetOpen, setIsSheetOpen,
    layers, selectedLayerId, setSelectedLayerId, deleteLayer, duplicateLayer,
  } = useDesigner();

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

  // Shared property sections rendered in both desktop and mobile
  const PropertiesPanel = () => (
    <div className="space-y-xl">
      {activeLayer ? (
        <>
          {/* Layer actions bar */}
          <div className="flex gap-sm">
            <button
              onClick={() => duplicateLayer(activeLayer.id)}
              className="flex-1 flex items-center justify-center gap-xs bg-surface border border-outline-variant rounded-lg p-sm text-[12px] font-label-sm hover:bg-surface-container transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">content_copy</span>
              Duplicate
            </button>
            <button
              onClick={() => updateLayer(activeLayer.id, { locked: !activeLayer.locked })}
              className={`flex-1 flex items-center justify-center gap-xs rounded-lg p-sm text-[12px] font-label-sm transition-colors active:scale-95 ${activeLayer.locked ? 'bg-amber-100 border border-amber-300 text-amber-700' : 'bg-surface border border-outline-variant hover:bg-surface-container'}`}
            >
              <span className="material-symbols-outlined text-[16px]">{activeLayer.locked ? 'lock' : 'lock_open'}</span>
              {activeLayer.locked ? 'Locked' : 'Lock'}
            </button>
            <button
              onClick={() => { deleteLayer(activeLayer.id); }}
              className="flex items-center justify-center bg-red-50 border border-red-200 text-error rounded-lg p-sm hover:bg-red-100 transition-colors active:scale-95"
              title="Delete layer"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>

          {/* ── Text-specific properties ── */}
          {activeLayer.type === 'text' && (
            <div className="space-y-sm">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-wider text-[10px]">Typography</label>

              {/* Text content */}
              <div className="space-y-xs">
                <span className="text-[10px] text-on-surface-variant">Text Content</span>
                <input
                  className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-2 focus:ring-secondary"
                  type="text"
                  value={activeLayer.content}
                  onChange={e => updateLayer(activeLayer.id, { content: e.target.value })}
                />
              </div>

              {/* Font */}
              <div className="space-y-xs">
                <span className="text-[10px] text-on-surface-variant">Font Family</span>
                <select
                  className="w-full bg-surface border border-outline-variant rounded-lg p-sm font-label-md focus:ring-2 focus:ring-secondary outline-none text-sm"
                  value={activeLayer.fontFamily}
                  onChange={e => updateLayer(activeLayer.id, { fontFamily: e.target.value })}
                >
                  {FONTS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>

              {/* Alignment */}
              <div className="flex gap-sm">
                {(['left', 'center', 'right'] as const).map(align => (
                  <button
                    key={align}
                    onClick={() => updateLayer(activeLayer.id, { textAlign: align })}
                    className={`flex-1 p-sm rounded-lg flex items-center justify-center transition-colors ${activeLayer.textAlign === align ? 'bg-secondary text-on-secondary' : 'bg-surface border border-outline-variant hover:bg-surface-container'}`}
                  >
                    <span className="material-symbols-outlined text-[18px]">format_align_{align}</span>
                  </button>
                ))}
              </div>

              {/* Color picker */}
              <div className="space-y-xs">
                <span className="text-[10px] text-on-surface-variant">Text Color</span>
                <div className="flex flex-wrap gap-xs">
                  {TEXT_COLORS.map(col => (
                    <button
                      key={col.c}
                      onClick={() => updateLayer(activeLayer.id, { color: col.c })}
                      title={col.n}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${activeLayer.color === col.c ? 'border-secondary ring-2 ring-secondary/30 scale-110' : 'border-outline-variant hover:scale-105'}`}
                      style={{ backgroundColor: col.c }}
                    />
                  ))}
                  {/* Custom HEX input */}
                  <div className="flex items-center gap-xs ml-auto">
                    <div
                      className="w-7 h-7 rounded-full border-2 border-outline-variant flex-shrink-0"
                      style={{ backgroundColor: activeLayer.color }}
                    />
                    <input
                      type="color"
                      className="w-7 h-7 rounded cursor-pointer border border-outline-variant"
                      value={activeLayer.color || '#000000'}
                      onChange={e => updateLayer(activeLayer.id, { color: e.target.value })}
                      title="Custom color"
                    />
                  </div>
                </div>
              </div>

              {/* Font size */}
              <div>
                <div className="flex justify-between mb-xs">
                  <label className="text-[11px] text-on-surface-variant">Font Size</label>
                  <span className="text-[11px] text-secondary font-bold">{activeLayer.fontSize || 32}px</span>
                </div>
                <input
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                  type="range" min="8" max="150" step="1"
                  value={activeLayer.fontSize || 32}
                  onChange={e => updateLayer(activeLayer.id, { fontSize: parseInt(e.target.value) })}
                />
              </div>

              {/* Letter spacing */}
              <div>
                <div className="flex justify-between mb-xs">
                  <label className="text-[11px] text-on-surface-variant">Letter Spacing</label>
                  <span className="text-[11px] text-secondary font-bold">{activeLayer.letterSpacing ?? 0}px</span>
                </div>
                <input
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                  type="range" min="0" max="20" step="0.5"
                  value={activeLayer.letterSpacing ?? 0}
                  onChange={e => updateLayer(activeLayer.id, { letterSpacing: parseFloat(e.target.value) })}
                />
              </div>
            </div>
          )}

          {/* ── Shape color ── */}
          {activeLayer.type === 'shape' && (
            <div className="space-y-sm">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-wider text-[10px]">Shape Color</label>
              <div className="flex flex-wrap gap-xs">
                {TEXT_COLORS.map(col => (
                  <button
                    key={col.c}
                    onClick={() => updateLayer(activeLayer.id, { color: col.c })}
                    title={col.n}
                    className={`w-7 h-7 rounded-full border-2 transition-all ${activeLayer.color === col.c ? 'border-secondary ring-2 ring-secondary/30 scale-110' : 'border-outline-variant hover:scale-105'}`}
                    style={{ backgroundColor: col.c }}
                  />
                ))}
                <input
                  type="color"
                  className="w-7 h-7 rounded cursor-pointer border border-outline-variant ml-auto"
                  value={activeLayer.color || '#3b82f6'}
                  onChange={e => updateLayer(activeLayer.id, { color: e.target.value })}
                  title="Custom color"
                />
              </div>
            </div>
          )}

          {/* ── Emoji size ── */}
          {activeLayer.type === 'emoji' && (
            <div>
              <div className="flex justify-between mb-xs">
                <label className="text-[11px] text-on-surface-variant">Emoji Size</label>
                <span className="text-[11px] text-secondary font-bold">{activeLayer.fontSize || 48}px</span>
              </div>
              <input
                className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                type="range" min="16" max="120" step="2"
                value={activeLayer.fontSize || 48}
                onChange={e => updateLayer(activeLayer.id, { fontSize: parseInt(e.target.value) })}
              />
            </div>
          )}

          {/* ── Transform (shared for all) ── */}
          <div className="space-y-sm border-t border-outline-variant/30 pt-md">
            <label className="font-label-sm text-on-surface-variant uppercase tracking-wider text-[10px]">Transform</label>

            {/* Opacity */}
            <div>
              <div className="flex justify-between mb-xs">
                <label className="text-[11px] text-on-surface-variant">Opacity</label>
                <span className="text-[11px] text-secondary font-bold">{activeLayer.opacity ?? 100}%</span>
              </div>
              <input
                className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                type="range" min="0" max="100" step="1"
                value={activeLayer.opacity ?? 100}
                onChange={e => updateLayer(activeLayer.id, { opacity: parseInt(e.target.value) })}
              />
            </div>

            {/* Rotation */}
            <div>
              <div className="flex justify-between mb-xs">
                <label className="text-[11px] text-on-surface-variant">Rotation</label>
                <span className="text-[11px] text-secondary font-bold">{activeLayer.rotation ?? 0}°</span>
              </div>
              <input
                className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                type="range" min="0" max="360" step="1"
                value={activeLayer.rotation ?? 0}
                onChange={e => updateLayer(activeLayer.id, { rotation: parseInt(e.target.value) })}
              />
              <div className="flex gap-xs mt-xs">
                {[0, 90, 180, 270].map(deg => (
                  <button
                    key={deg}
                    onClick={() => updateLayer(activeLayer.id, { rotation: deg })}
                    className={`flex-1 text-[10px] py-xs rounded border transition-colors ${activeLayer.rotation === deg ? 'bg-secondary text-on-secondary border-secondary' : 'bg-surface border-outline-variant text-on-surface-variant hover:bg-surface-container'}`}
                  >
                    {deg}°
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Position & Size ── */}
          <div className="space-y-sm border-t border-outline-variant/30 pt-md">
            <label className="font-label-sm text-on-surface-variant uppercase tracking-wider text-[10px]">Position & Size (%)</label>
            <div className="grid grid-cols-2 gap-sm">
              {[
                { key: 'x', label: 'X' },
                { key: 'y', label: 'Y' },
                { key: 'width', label: 'Width' },
                { key: 'height', label: 'Height' },
              ].map(({ key, label }) => (
                <div key={key} className="space-y-xs">
                  <span className="text-[10px] text-on-surface-variant">{label}</span>
                  <input
                    className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary"
                    type="number"
                    value={Math.round(activeLayer[key as keyof typeof activeLayer] as number)}
                    onChange={e => updateLayer(activeLayer.id, { [key]: Number(e.target.value) })}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-xl text-on-surface-variant flex flex-col items-center gap-md">
          <span className="material-symbols-outlined text-[56px] opacity-25">touch_app</span>
          <div>
            <p className="font-label-md font-semibold">Select a layer</p>
            <p className="text-[12px] mt-xs opacity-70">Click on any element in the canvas to edit its properties</p>
          </div>
        </div>
      )}

      {/* ── Layer list at bottom ── */}
      {layers.length > 0 && (
        <div className="space-y-sm border-t border-outline-variant/30 pt-md">
          <label className="font-label-sm text-on-surface-variant uppercase tracking-wider text-[10px]">All Layers ({layers.length})</label>
          <div className="space-y-xs">
            {[...layers].reverse().map(layer => (
              <div
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`flex items-center gap-sm p-sm rounded-lg border cursor-pointer transition-all ${layer.id === selectedLayerId ? 'bg-surface-container-highest border-secondary' : 'bg-surface border-transparent hover:border-outline-variant'}`}
              >
                <span className="material-symbols-outlined text-[14px] text-secondary">
                  {layer.type === 'text' ? 'title' : layer.type === 'shape' ? 'category' : layer.type === 'emoji' ? 'mood' : 'image'}
                </span>
                <span className="flex-1 font-label-sm text-[11px] truncate">{layer.name}</span>
                <button
                  className="material-symbols-outlined text-[14px] text-on-surface-variant hover:text-secondary"
                  onClick={e => { e.stopPropagation(); updateLayer(layer.id, { visible: !layer.visible }); }}
                >
                  {layer.visible ? 'visibility' : 'visibility_off'}
                </button>
                <button
                  className="material-symbols-outlined text-[14px] text-error hover:text-error/70"
                  onClick={e => { e.stopPropagation(); deleteLayer(layer.id); }}
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* ── DESKTOP RIGHT PANEL ── */}
      <aside className="h-full w-[300px] bg-surface-container-lowest border-l border-outline-variant hidden md:flex flex-col z-10 relative shadow-sm">
        <div className="p-md border-b border-outline-variant bg-surface-container-low">
          <h2 className="font-label-md text-on-surface font-bold">Properties</h2>
          <p className="text-[11px] text-on-surface-variant mt-xs">
            {activeLayer ? `Editing: ${activeLayer.name}` : 'Select a layer to edit'}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-md">
          <PropertiesPanel />
        </div>
      </aside>

      {/* ── MOBILE BOTTOM SHEET (Properties) ── */}
      {isSheetOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[65] md:hidden backdrop-blur-sm"
          onClick={() => setIsSheetOpen(false)}
        />
      )}
      <div
        className={`fixed inset-x-0 bottom-0 pb-safe bg-surface-container-lowest z-[70] rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex justify-center pt-md pb-sm cursor-pointer" onClick={toggleSheet}>
          <div className="w-12 h-1.5 bg-outline-variant rounded-full" />
        </div>
        <div className="px-md pb-xl max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-bold text-[14px] text-on-surface uppercase tracking-wider">Properties</h3>
            {activeLayer && (
              <span className="text-[11px] text-on-surface-variant bg-surface-container px-sm py-xs rounded-full">{activeLayer.name}</span>
            )}
          </div>
          <PropertiesPanel />
        </div>
      </div>
    </>
  );
}
