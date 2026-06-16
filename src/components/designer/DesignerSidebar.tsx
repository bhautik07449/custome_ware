import { useState } from 'react';
import { useDesigner, FABRIC_COLORS, SHAPES, EMOJIS, SHIRT_STYLES } from '../../context/DesignerContext';
import TShirtSVG from './TShirtSVG';

type TabName = 'Upload' | 'Text' | 'Shapes' | 'Emojis' | 'Layers' | 'Saved';

const TABS: { id: TabName; icon: string; label: string }[] = [
  { id: 'Upload',  icon: 'cloud_upload', label: 'Upload' },
  { id: 'Text',    icon: 'title',        label: 'Text' },
  { id: 'Shapes',  icon: 'category',     label: 'Shapes' },
  { id: 'Emojis',  icon: 'mood',         label: 'Emojis' },
  { id: 'Layers',  icon: 'layers',       label: 'Layers' },
  { id: 'Saved',   icon: 'bookmark',     label: 'Saved' },
];

export default function DesignerSidebar() {
  const {
    activeTab, setActiveTab, product, setProduct, layers, selectedLayerId, setSelectedLayerId,
    addTextLayer, deleteLayer, handleImageUpload, updateLayer, handleDownload,
    addShapeLayer, addEmojiLayer, isToolsSheetOpen, setIsToolsSheetOpen,
    savedDesigns, loadDesign, deleteDesign, saveDesign,
  } = useDesigner();

  const [saveNameInput, setSaveNameInput] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);

  const getTabClass = (tabName: string) =>
    activeTab === tabName
      ? 'flex flex-col items-center border-l-2 border-secondary bg-surface-container-highest text-secondary p-sm transition-all w-full text-center gap-xs'
      : 'flex flex-col items-center text-on-surface-variant p-sm hover:bg-surface-container transition-all w-full text-center gap-xs';

  const TabContent = () => {
    switch (activeTab as TabName) {
      // ── UPLOAD ──
      case 'Upload':
        return (
          <div className="p-md space-y-lg">
            <div>
              <span className="font-label-md text-on-surface mb-md block">T-shirt Styles</span>
              {/* 3 × 2 grid: 6 styles */}
              <div className="grid grid-cols-3 gap-xs">
                {SHIRT_STYLES.map(({ id, label, desc }) => (
                  <div
                    key={id}
                    onClick={() => setProduct({ ...product, style: id })}
                    className={`relative flex flex-col items-center border-2 rounded-xl p-xs bg-surface cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${
                      product.style === id
                        ? 'border-secondary shadow-md shadow-secondary/20 bg-secondary/5'
                        : 'border-transparent hover:border-outline-variant/60'
                    }`}
                  >
                    {product.style === id && (
                      <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-secondary shadow-sm" />
                    )}
                    <div className="w-full aspect-[5/6] rounded-lg bg-surface-container/60 flex items-center justify-center p-1 mb-xs overflow-hidden">
                      <TShirtSVG color={product.color} style={id} thumbnail className="w-full h-full" />
                    </div>
                    <span className={`text-[10px] font-bold text-center leading-tight mb-[1px] ${
                      product.style === id ? 'text-secondary' : 'text-on-surface'
                    }`}>{label}</span>
                    <span className="text-[9px] text-on-surface-variant text-center leading-tight opacity-75 hidden xl:block">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-label-md text-on-surface mb-md block">Fabric Colors</span>
              <div className="flex flex-wrap gap-sm">
                {FABRIC_COLORS.map(c => (
                  <button
                    key={c.id}
                    onClick={() => setProduct({ ...product, color: c.value })}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${product.color === c.value ? 'ring-2 ring-secondary ring-offset-2 border-secondary scale-110' : 'border-outline-variant hover:scale-105'}`}
                    style={{ backgroundColor: c.value }}
                    title={c.name}
                  />
                ))}
              </div>
              <p className="text-[11px] text-on-surface-variant mt-sm">
                Selected: <span className="font-medium text-on-surface">{FABRIC_COLORS.find(c => c.value === product.color)?.name || 'Custom'}</span>
              </p>
            </div>

            <div className="bg-surface-container-high rounded-xl p-md border-2 border-dashed border-secondary/40 text-center cursor-pointer hover:bg-surface-container-highest transition-colors relative overflow-hidden group">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                onChange={handleImageUpload}
                title=""
              />
              <span className="material-symbols-outlined text-secondary mb-xs pointer-events-none text-[32px] group-hover:scale-110 transition-transform block">upload_file</span>
              <p className="font-label-md text-on-surface pointer-events-none">Drop or click to upload</p>
              <p className="text-[10px] text-on-surface-variant mt-xs pointer-events-none">SVG, PNG, or JPG (Max 10MB)</p>
            </div>
          </div>
        );

      // ── TEXT ──
      case 'Text':
        return (
          <div className="p-md space-y-md">
            <button
              onClick={addTextLayer}
              className="w-full bg-secondary text-on-secondary py-sm rounded-xl font-label-md shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-sm hover:brightness-110"
            >
              <span className="material-symbols-outlined">add</span>
              Add Text Layer
            </button>
            <p className="text-label-sm text-on-surface-variant">Quick presets:</p>
            <div className="space-y-sm">
              {[
                { label: 'HEADING', style: 'font-bold text-2xl font-sans', fontFamily: 'Inter', fontSize: 36, letterSpacing: 2 },
                { label: 'Subheading', style: 'font-semibold text-lg font-serif', fontFamily: 'Playfair Display', fontSize: 24, letterSpacing: 0.5 },
                { label: 'Body text', style: 'font-normal text-sm font-mono', fontFamily: 'Roboto Mono', fontSize: 16, letterSpacing: 0 },
                { label: 'Handwritten', style: 'font-normal text-xl', fontFamily: 'Caveat Brush', fontSize: 28, letterSpacing: 1 },
              ].map(preset => (
                <div
                  key={preset.label}
                  onClick={() => {
                    addTextLayer();
                  }}
                  className={`p-sm border border-outline-variant rounded-xl text-center cursor-pointer hover:bg-surface-container hover:border-secondary/50 transition-all ${preset.style}`}
                  style={{ fontFamily: preset.fontFamily }}
                >
                  {preset.label}
                </div>
              ))}
            </div>
          </div>
        );

      // ── SHAPES ──
      case 'Shapes':
        return (
          <div className="p-md space-y-md">
            <p className="font-label-md text-on-surface">Click a shape to add it</p>
            <div className="grid grid-cols-4 gap-sm">
              {SHAPES.map(shape => (
                <button
                  key={shape.id}
                  onClick={() => addShapeLayer(shape.id)}
                  title={shape.label}
                  className="aspect-square bg-surface border border-outline-variant rounded-xl flex items-center justify-center hover:bg-surface-container hover:border-secondary/50 transition-all active:scale-95 p-sm"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="#3b82f6">
                    <path d={shape.path} />
                  </svg>
                </button>
              ))}
            </div>
            <p className="text-label-sm text-on-surface-variant text-center">Colors & opacity customizable after adding</p>
          </div>
        );

      // ── EMOJIS ──
      case 'Emojis':
        return (
          <div className="p-md space-y-md">
            <p className="font-label-md text-on-surface">Click to add emoji</p>
            <div className="grid grid-cols-5 gap-xs">
              {EMOJIS.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => addEmojiLayer(emoji)}
                  className="aspect-square text-[24px] bg-surface border border-outline-variant rounded-lg flex items-center justify-center hover:bg-surface-container hover:scale-110 transition-all active:scale-95"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        );

      // ── LAYERS ──
      case 'Layers':
        return (
          <div className="p-md space-y-sm">
            <div className="flex items-center justify-between mb-md">
              <h3 className="font-label-md text-on-surface">Design Layers</h3>
              <span className="text-[11px] text-on-surface-variant">{layers.length} layer{layers.length !== 1 ? 's' : ''}</span>
            </div>
            {layers.length === 0 && (
              <div className="text-center py-xl text-on-surface-variant">
                <span className="material-symbols-outlined text-[40px] opacity-30 block mb-sm">layers</span>
                <p className="text-label-sm">No layers yet. Add text, shapes, or upload images.</p>
              </div>
            )}
            <div className="space-y-xs">
              {[...layers].reverse().map(layer => (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`flex items-center gap-sm p-sm rounded-xl border cursor-pointer transition-all ${layer.id === selectedLayerId ? 'bg-surface-container-highest border-secondary shadow-sm' : 'bg-surface border-transparent hover:border-outline-variant'}`}
                >
                  <span className="material-symbols-outlined text-[16px] text-secondary flex-shrink-0">
                    {layer.type === 'text' ? 'title' : layer.type === 'shape' ? 'category' : layer.type === 'emoji' ? 'mood' : 'image'}
                  </span>
                  <span className="flex-1 font-label-sm truncate text-[12px]">{layer.name}</span>
                  <button
                    className="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-secondary transition-colors"
                    onClick={e => { e.stopPropagation(); updateLayer(layer.id, { visible: !layer.visible }); }}
                  >
                    {layer.visible ? 'visibility' : 'visibility_off'}
                  </button>
                  <button
                    className="material-symbols-outlined text-[16px] text-error hover:text-error/70 transition-colors"
                    onClick={e => { e.stopPropagation(); deleteLayer(layer.id); }}
                  >
                    delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      // ── SAVED ──
      case 'Saved':
        return (
          <div className="p-md space-y-md">
            {/* Save new */}
            {showSaveInput ? (
              <div className="space-y-sm">
                <input
                  className="w-full bg-surface border border-outline-variant rounded-xl p-sm text-sm outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Design name…"
                  value={saveNameInput}
                  onChange={e => setSaveNameInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      saveDesign(saveNameInput || undefined);
                      setSaveNameInput('');
                      setShowSaveInput(false);
                    }
                  }}
                  autoFocus
                />
                <div className="flex gap-sm">
                  <button
                    onClick={() => { saveDesign(saveNameInput || undefined); setSaveNameInput(''); setShowSaveInput(false); }}
                    className="flex-1 bg-secondary text-on-secondary py-xs rounded-lg font-label-sm active:scale-95 transition-transform"
                  >Save</button>
                  <button
                    onClick={() => setShowSaveInput(false)}
                    className="flex-1 bg-surface border border-outline-variant text-on-surface-variant py-xs rounded-lg font-label-sm active:scale-95 transition-transform"
                  >Cancel</button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowSaveInput(true)}
                className="w-full bg-secondary text-on-secondary py-sm rounded-xl font-label-md flex items-center justify-center gap-sm active:scale-95 transition-transform hover:brightness-110"
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                Save Current Design
              </button>
            )}

            {savedDesigns.length === 0 ? (
              <div className="text-center py-xl text-on-surface-variant">
                <span className="material-symbols-outlined text-[40px] opacity-30 block mb-sm">bookmark</span>
                <p className="text-label-sm">No saved designs yet</p>
              </div>
            ) : (
              <div className="space-y-sm">
                <p className="text-[11px] text-on-surface-variant font-medium uppercase tracking-wider">Saved ({savedDesigns.length}/10)</p>
                {savedDesigns.map(d => (
                  <div
                    key={d.id}
                    className="bg-surface border border-outline-variant rounded-xl p-sm flex items-center gap-sm hover:border-secondary/50 transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-label-md text-[12px] text-on-surface truncate">{d.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{new Date(d.savedAt).toLocaleDateString()} • {d.layers.length} layers</p>
                    </div>
                    <button
                      onClick={() => loadDesign(d)}
                      className="text-secondary font-label-sm text-[11px] hover:underline flex-shrink-0"
                    >Load</button>
                    <button
                      onClick={() => deleteDesign(d.id)}
                      className="material-symbols-outlined text-[16px] text-error hover:text-error/70 flex-shrink-0"
                    >delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="h-full w-[300px] bg-surface-container-lowest border-r border-outline-variant hidden md:flex flex-col z-10 relative shadow-sm">
        <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
          <div>
            <h1 className="font-headline-md text-[16px] font-bold text-on-surface">Design Studio</h1>
            <p className="text-label-sm text-on-surface-variant">V2.0 • Pro Builder</p>
          </div>
          <button
            onClick={handleDownload}
            className="bg-secondary text-on-secondary px-md py-xs rounded-lg font-label-md active:scale-95 transition-transform flex items-center gap-xs hover:brightness-110 shadow-sm shadow-secondary/30"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            Export
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Icon nav */}
          <nav className="w-[56px] border-r border-outline-variant bg-surface-container-low flex flex-col py-sm flex-shrink-0">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={getTabClass(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                title={tab.label}
              >
                <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
                <span className="text-[9px] font-bold uppercase tracking-wide">{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <TabContent />
          </div>
        </div>
      </aside>

      {/* ── MOBILE BOTTOM SHEET (Tools) ── */}
      {isToolsSheetOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[65] md:hidden backdrop-blur-sm"
          onClick={() => setIsToolsSheetOpen(false)}
        />
      )}
      <div
        className={`fixed inset-x-0 bottom-[76px] bg-surface-container-lowest z-[70] rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isToolsSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex justify-center pt-md pb-sm cursor-pointer" onClick={() => setIsToolsSheetOpen(false)}>
          <div className="w-12 h-1.5 bg-outline-variant rounded-full" />
        </div>

        {/* Tab pills */}
        <div className="px-md flex gap-sm overflow-x-auto hide-scrollbar pb-sm">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center gap-xs px-md py-xs rounded-full text-[12px] font-bold transition-all ${activeTab === tab.id ? 'bg-secondary text-on-secondary' : 'bg-surface-container text-on-surface-variant border border-outline-variant'}`}
            >
              <span className="material-symbols-outlined text-[14px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="px-md pb-xl max-h-[45vh] overflow-y-auto custom-scrollbar">
          <TabContent />
        </div>
      </div>
    </>
  );
}
