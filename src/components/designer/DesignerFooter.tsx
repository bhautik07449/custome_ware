import { PATHS } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { useDesigner, FABRIC_COLORS } from '../../context/DesignerContext';

export default function DesignerFooter() {
  const { 
    activeTab, setActiveTab, product, layers, setIsToolsSheetOpen
  } = useDesigner();

  const totalPrice = product.basePrice + (layers.length * 5);

  const getMobileTabClass = (tabName: string) => {
    if (activeTab === tabName) {
      return "flex flex-col items-center justify-center min-w-[80px] py-md gap-xs text-secondary border-b-2 border-secondary bg-surface-container-low transition-all";
    }
    return "flex flex-col items-center justify-center min-w-[80px] py-md gap-xs text-on-surface-variant transition-all";
  };

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* MOBILE Tool Bar                                               */}
      {/* ------------------------------------------------------------- */}
      <nav className="fixed bottom-[76px] w-full bg-surface border-t border-outline-variant/30 pb-safe z-50 md:hidden">
        <div className="flex overflow-x-auto hide-scrollbar px-sm">
          <button className={getMobileTabClass('Upload')} onClick={() => { setActiveTab('Upload'); setIsToolsSheetOpen(true); }}>
            <span className="material-symbols-outlined" data-icon="cloud_upload">cloud_upload</span>
            <span className="font-label-sm">Upload</span>
          </button>
          <button className={getMobileTabClass('Text')} onClick={() => { setActiveTab('Text'); setIsToolsSheetOpen(true); }}>
            <span className="material-symbols-outlined" data-icon="title" style={activeTab === 'Text' ? { fontVariationSettings: "'FILL' 1" } : {}}>title</span>
            <span className="font-label-sm font-bold">Text</span>
          </button>
          <button className={getMobileTabClass('Elements')} onClick={() => { setActiveTab('Elements'); setIsToolsSheetOpen(true); }}>
            <span className="material-symbols-outlined" data-icon="category">category</span>
            <span className="font-label-sm">Elements</span>
          </button>
          <button className={getMobileTabClass('Layers')} onClick={() => { setActiveTab('Layers'); setIsToolsSheetOpen(true); }}>
            <span className="material-symbols-outlined" data-icon="layers">layers</span>
            <span className="font-label-sm">Layers</span>
          </button>
        </div>
      </nav>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE Sticky Add to Cart Footer                              */}
      {/* ------------------------------------------------------------- */}
      <footer className="fixed bottom-0 w-full bg-surface-container-highest/95 backdrop-blur-lg px-grid-margin py-md border-t border-outline-variant/30 flex items-center justify-between gap-lg z-[60] md:hidden">
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tight">Total Price</span>
          <span className="font-headline-md text-primary">${totalPrice.toFixed(2)}</span>
        </div>
        <Link to={PATHS.CART} className="flex-1 bg-primary text-on-primary py-md px-xl rounded-full flex items-center justify-center gap-md active:scale-95 transition-transform">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
          <span className="font-label-md font-bold uppercase tracking-wide">Add to Cart</span>
        </Link>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP Sticky Summary: Bottom Bar                            */}
      {/* ------------------------------------------------------------- */}
      <footer className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant shadow-2xl z-[60] hidden md:block">
        <div className="max-w-7xl mx-auto px-grid-margin py-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-xl w-full md:w-auto">
            {/* Mini Thumbnail */}
            <div className="w-16 h-16 bg-surface-container rounded-lg border border-outline-variant flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 z-0" style={{ backgroundColor: product.color, mixBlendMode: 'multiply', opacity: 0.8, WebkitMaskImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAkFzQLGXH359AdlyMrQnZMrM78nZnNL53kebz61twzrno4Hv2UD94kfpjZqbQb2HeLRbcDnsUVqve_uHPbpA2dqwL6c7g7hkSCLyKVRzEbBN08hoXehr9mXfAqW5w3UVLE5VDM0qoHHEOsSJgmnJdUHMo0G6Yi6oJhAE_ZKf6riSt3_ADU3HftMQa-uTwNlNoUC9rSyR5p_2YGO1VsIZ3D8mtiSnQJFCVl0fV27RtWua9QOq3IdZ5lKg0uu_Ur7spQIcmO9haUqf8)', WebkitMaskSize: 'contain', WebkitMaskPosition: 'center', WebkitMaskRepeat: 'no-repeat' }}></div>
              <img className="w-full h-full object-contain pointer-events-none drop-shadow-2xl z-10" alt="Thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkFzQLGXH359AdlyMrQnZMrM78nZnNL53kebz61twzrno4Hv2UD94kfpjZqbQb2HeLRbcDnsUVqve_uHPbpA2dqwL6c7g7hkSCLyKVRzEbBN08hoXehr9mXfAqW5w3UVLE5VDM0qoHHEOsSJgmnJdUHMo0G6Yi6oJhAE_ZKf6riSt3_ADU3HftMQa-uTwNlNoUC9rSyR5p_2YGO1VsIZ3D8mtiSnQJFCVl0fV27RtWua9QOq3IdZ5lKg0uu_Ur7spQIcmO9haUqf8" />
            </div>
            <div>
              <h3 className="font-headline-md text-[18px] font-bold text-on-surface leading-tight">Custom {product.style}</h3>
              <div className="flex gap-md mt-xs flex-wrap">
                <span className="text-label-sm px-sm py-[2px] bg-surface-container rounded text-on-surface-variant">{FABRIC_COLORS.find(c => c.value === product.color)?.name || 'Custom Color'}</span>
                <span className="text-label-sm px-sm py-[2px] bg-surface-container rounded text-on-surface-variant">Size L</span>
                <span className="text-label-sm px-sm py-[2px] bg-surface-container rounded text-on-surface-variant">{layers.length} Layers</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2xl w-full md:w-auto justify-between md:justify-end border-t border-outline-variant/30 md:border-0 pt-4 md:pt-0 mt-4 md:mt-0">
            <div className="text-right">
              <span className="block text-label-sm text-on-surface-variant uppercase">Estimated Total</span>
              <span className="font-headline-md text-primary text-[28px]">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-md">
              <button className="hidden sm:block bg-surface border border-outline-variant text-on-surface px-xl py-md rounded-xl font-label-md hover:bg-surface-container transition-all active:scale-95">
                Save Draft
              </button>
              <Link to={PATHS.CART} className="bg-primary text-on-primary px-xl md:px-2xl py-md rounded-xl font-label-md shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 whitespace-nowrap block text-center">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
