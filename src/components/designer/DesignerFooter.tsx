import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { useDesigner, FABRIC_COLORS } from '../../context/DesignerContext';

type MobileTabId = 'Upload' | 'Text' | 'Shapes' | 'Emojis' | 'Layers' | 'Saved';

const MOBILE_TABS: { id: MobileTabId; icon: string; label: string }[] = [
  { id: 'Upload',  icon: 'cloud_upload', label: 'Upload' },
  { id: 'Text',    icon: 'title',        label: 'Text' },
  { id: 'Shapes',  icon: 'category',     label: 'Shapes' },
  { id: 'Emojis',  icon: 'mood',         label: 'Emojis' },
  { id: 'Layers',  icon: 'layers',       label: 'Layers' },
  { id: 'Saved',   icon: 'bookmark',     label: 'Saved' },
];

export default function DesignerFooter() {
  const {
    activeTab, setActiveTab, product, layers, setIsToolsSheetOpen,
    handleDownload, saveDesign, undo, redo, canUndo, canRedo,
    activeSide, setActiveSide,
  } = useDesigner();

  const totalPrice = product.basePrice + (layers.length * 5);

  const getMobileTabClass = (tabName: string) =>
    activeTab === tabName
      ? 'flex flex-col items-center justify-center min-w-[64px] py-sm gap-[2px] text-secondary border-t-2 border-secondary bg-secondary/5 transition-all'
      : 'flex flex-col items-center justify-center min-w-[64px] py-sm gap-[2px] text-on-surface-variant hover:text-on-surface transition-all';

  return (
    <>
      {/* ─── MOBILE TOOL BAR ─── */}
      <nav className="fixed bottom-[68px] w-full bg-surface-container-lowest border-t border-outline-variant/30 z-50 md:hidden shadow-lg">
        <div className="flex overflow-x-auto hide-scrollbar px-xs">
          {MOBILE_TABS.map(tab => (
            <button
              key={tab.id}
              className={getMobileTabClass(tab.id)}
              onClick={() => { setActiveTab(tab.id); setIsToolsSheetOpen(true); }}
            >
              <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
              <span className="font-bold text-[9px] uppercase tracking-wide">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ─── MOBILE STICKY FOOTER ─── */}
      <footer className="fixed bottom-0 w-full bg-surface-container-highest/95 backdrop-blur-lg px-md py-sm border-t border-outline-variant/30 flex items-center justify-between gap-md z-[60] md:hidden shadow-xl">
        <div className="flex flex-col">
          <span className="text-[9px] text-on-surface-variant uppercase font-bold tracking-tight">Total</span>
          <span className="font-bold text-[20px] text-secondary leading-tight">${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex items-center gap-sm flex-1 justify-end">
          {/* Side toggle */}
          <div className="flex bg-surface rounded-full border border-outline-variant overflow-hidden shadow-sm">
            {(['front', 'back'] as const).map(side => (
              <button
                key={side}
                onClick={() => setActiveSide(side)}
                className={`px-sm py-xs text-[11px] font-bold transition-colors capitalize ${activeSide === side ? 'bg-secondary text-on-secondary' : 'text-on-surface-variant'}`}
              >
                {side}
              </button>
            ))}
          </div>

          <Link
            to={PATHS.CART}
            className="bg-secondary text-on-secondary py-sm px-lg rounded-full flex items-center gap-xs active:scale-95 transition-transform shadow-lg shadow-secondary/30"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
            <span className="font-bold text-[13px]">Add to Cart</span>
          </Link>
        </div>
      </footer>

      {/* ─── DESKTOP STICKY BOTTOM BAR ─── */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-lg border-t border-outline-variant shadow-2xl z-[60] hidden md:block">
        <div className="max-w-7xl mx-auto px-grid-margin py-md flex items-center justify-between gap-4">
          {/* Left: product info */}
          <div className="flex items-center gap-lg">
            <div className="w-14 h-14 bg-surface-container rounded-xl border border-outline-variant flex items-center justify-center overflow-hidden relative shadow-sm">
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundColor: product.color,
                  mixBlendMode: 'multiply',
                  opacity: 0.85,
                  WebkitMaskImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAkFzQLGXH359AdlyMrQnZMrM78nZnNL53kebz61twzrno4Hv2UD94kfpjZqbQb2HeLRbcDnsUVqve_uHPbpA2dqwL6c7g7hkSCLyKVRzEbBN08hoXehr9mXfAqW5w3UVLE5VDM0qoHHEOsSJgmnJdUHMo0G6Yi6oJhAE_ZKf6riSt3_ADU3HftMQa-uTwNlNoUC9rSyR5p_2YGO1VsIZ3D8mtiSnQJFCVl0fV27RtWua9QOq3IdZ5lKg0uu_Ur7spQIcmO9haUqf8)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                }}
              />
              <img
                className="w-full h-full object-contain z-10"
                alt="Thumbnail"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkFzQLGXH359AdlyMrQnZMrM78nZnNL53kebz61twzrno4Hv2UD94kfpjZqbQb2HeLRbcDnsUVqve_uHPbpA2dqwL6c7g7hkSCLyKVRzEbBN08hoXehr9mXfAqW5w3UVLE5VDM0qoHHEOsSJgmnJdUHMo0G6Yi6oJhAE_ZKf6riSt3_ADU3HftMQa-uTwNlNoUC9rSyR5p_2YGO1VsIZ3D8mtiSnQJFCVl0fV27RtWua9QOq3IdZ5lKg0uu_Ur7spQIcmO9haUqf8"
              />
            </div>
            <div>
              <h3 className="font-bold text-[16px] text-on-surface leading-tight">Custom {product.style}</h3>
              <div className="flex gap-sm mt-xs flex-wrap">
                <span className="text-[11px] px-sm py-[2px] bg-surface-container rounded-full text-on-surface-variant border border-outline-variant/50">
                  {FABRIC_COLORS.find(c => c.value === product.color)?.name || 'Custom Color'}
                </span>
                <span className="text-[11px] px-sm py-[2px] bg-surface-container rounded-full text-on-surface-variant border border-outline-variant/50">Size L</span>
                <span className="text-[11px] px-sm py-[2px] bg-secondary/10 rounded-full text-secondary border border-secondary/20 font-medium">
                  {layers.length} Layer{layers.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Center: undo/redo + side toggle */}
          <div className="flex items-center gap-md">
            <div className="flex items-center gap-xs">
              <button
                onClick={undo}
                disabled={!canUndo}
                title="Undo (Ctrl+Z)"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all active:scale-95 border ${canUndo ? 'text-on-surface border-outline-variant hover:bg-surface-container' : 'text-on-surface-variant/30 border-transparent cursor-not-allowed'}`}
              >
                <span className="material-symbols-outlined text-[20px]">undo</span>
              </button>
              <button
                onClick={redo}
                disabled={!canRedo}
                title="Redo (Ctrl+Y)"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all active:scale-95 border ${canRedo ? 'text-on-surface border-outline-variant hover:bg-surface-container' : 'text-on-surface-variant/30 border-transparent cursor-not-allowed'}`}
              >
                <span className="material-symbols-outlined text-[20px]">redo</span>
              </button>
            </div>

            {/* Front/Back toggle */}
            <div className="flex bg-surface-container rounded-full border border-outline-variant overflow-hidden">
              {(['front', 'back'] as const).map(side => (
                <button
                  key={side}
                  onClick={() => setActiveSide(side)}
                  className={`px-md py-xs font-label-sm text-[12px] transition-colors capitalize ${activeSide === side ? 'bg-secondary text-on-secondary' : 'text-on-surface-variant hover:bg-surface-container-high'}`}
                >
                  {side}
                </button>
              ))}
            </div>
          </div>

          {/* Right: price + actions */}
          <div className="flex items-center gap-lg">
            <div className="text-right">
              <span className="block text-[10px] text-on-surface-variant uppercase tracking-wide font-bold">Estimated Total</span>
              <span className="font-bold text-secondary text-[26px] leading-tight">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-sm">
              {/* Save Draft */}
              <button
                onClick={() => saveDesign()}
                className="flex items-center gap-xs bg-surface border border-outline-variant text-on-surface px-lg py-sm rounded-xl font-label-md hover:bg-surface-container transition-all active:scale-95 shadow-sm"
              >
                <span className="material-symbols-outlined text-secondary text-[18px]">save</span>
                Save Draft
              </button>

              {/* Export PNG */}
              <button
                onClick={handleDownload}
                className="flex items-center gap-xs bg-surface-container border border-outline-variant text-on-surface px-lg py-sm rounded-xl font-label-md hover:bg-surface-container-high transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                Export PNG
              </button>

              {/* Add to Cart */}
              <Link
                to={PATHS.CART}
                className="bg-secondary text-on-secondary px-2xl py-sm rounded-xl font-label-md shadow-lg shadow-secondary/25 hover:brightness-110 transition-all active:scale-95 block text-center flex items-center gap-sm"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
