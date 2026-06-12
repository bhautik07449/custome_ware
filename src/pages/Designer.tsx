import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Designer() {
  const [activeTab, setActiveTab] = useState('Upload');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

  const getTabClass = (tabName: string) => {
    if (activeTab === tabName) {
      return "flex flex-row items-center border-l-2 border-secondary bg-surface-container-highest text-secondary p-md transition-all w-full text-left";
    }
    return "flex flex-row items-center text-on-surface-variant p-md hover:bg-surface-container transition-all w-full text-left";
  };

  const getMobileTabClass = (tabName: string) => {
    if (activeTab === tabName) {
      return "flex flex-col items-center justify-center min-w-[80px] py-md gap-xs text-secondary border-b-2 border-secondary bg-surface-container-low transition-all";
    }
    return "flex flex-col items-center justify-center min-w-[80px] py-md gap-xs text-on-surface-variant transition-all";
  };

  return (
    <div className="flex flex-col h-[100dvh] md:h-screen w-full relative bg-background overflow-hidden">
      {/* ------------------------------------------------------------- */}
      {/* DESKTOP HEADER                                                */}
      {/* ------------------------------------------------------------- */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 hidden md:flex justify-between items-center px-grid-margin py-md max-w-7xl mx-auto left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-xl">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface">CustomWear</Link>
          <nav className="hidden md:flex gap-lg">
            <Link className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" to="/shop">Shop</Link>
            <Link className="font-body-md text-body-md text-secondary font-bold border-b-2 border-secondary pb-1" to="/designer">Designer</Link>
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <Link to="/cart" className="p-sm hover:text-secondary transition-colors duration-200 active:scale-95 transition-transform flex">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link to="/dashboard" className="p-sm hover:text-secondary transition-colors duration-200 active:scale-95 transition-transform flex">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE HEADER (Studio Specific)                               */}
      {/* ------------------------------------------------------------- */}
      <header className="md:hidden fixed top-0 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center px-md py-sm z-50">
        <div className="flex items-center gap-sm">
          <Link to="/" className="p-base active:scale-95 transition-transform flex items-center justify-center">
            <span className="material-symbols-outlined text-on-surface">close</span>
          </Link>
          <div>
            <h1 className="font-headline-md text-label-md text-on-surface font-bold">Design Studio</h1>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Premium Custom T-Shirt</p>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <button className="material-symbols-outlined text-on-surface-variant active:scale-95">undo</button>
          <button className="material-symbols-outlined text-on-surface-variant active:scale-95">redo</button>
          <button className="bg-primary text-on-primary font-label-md px-md py-xs rounded-full shadow-sm active:scale-95 transition-transform">Save</button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden pt-[64px] md:pt-[72px] pb-[136px] md:pb-[90px] relative">
        {/* ------------------------------------------------------------- */}
        {/* DESKTOP Left Panel                                            */}
        {/* ------------------------------------------------------------- */}
        <aside className="h-full w-[320px] bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col z-10 relative">
          <div className="p-md border-b border-outline-variant flex justify-between items-center">
            <div>
              <h1 className="font-headline-md text-[18px] font-bold text-on-surface">Design Studio</h1>
              <p className="text-label-sm text-on-surface-variant">V1.0 • Pro Builder</p>
            </div>
            <button className="bg-secondary text-on-secondary px-md py-xs rounded-lg font-label-md active:translate-x-1 transition-transform">
              Save Design
            </button>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {/* Tool Groups */}
            <div className="flex flex-col">
              <button className={getTabClass('Upload')} onClick={() => setActiveTab('Upload')}>
                <span className="material-symbols-outlined mr-md">cloud_upload</span>
                <span className="font-label-md">Upload</span>
              </button>
              <button className={getTabClass('Text')} onClick={() => setActiveTab('Text')}>
                <span className="material-symbols-outlined mr-md">title</span>
                <span className="font-label-md">Text</span>
              </button>
              <button className={getTabClass('Elements')} onClick={() => setActiveTab('Elements')}>
                <span className="material-symbols-outlined mr-md">category</span>
                <span className="font-label-md">Elements</span>
              </button>
              <button className={getTabClass('Layers')} onClick={() => setActiveTab('Layers')}>
                <span className="material-symbols-outlined mr-md">layers</span>
                <span className="font-label-md">Layers</span>
              </button>
            </div>
            
            <hr className="mx-md border-outline-variant/30 my-sm" />
            
            {/* Content Area for Upload Tool */}
            {activeTab === 'Upload' && (
              <div className="p-md space-y-lg">
                <div>
                  <span className="font-label-md text-on-surface mb-md block">T-shirt Styles</span>
                  <div className="grid grid-cols-2 gap-sm">
                    <div className="border-2 border-secondary rounded-xl p-sm bg-surface overflow-hidden cursor-pointer">
                      <img className="w-full aspect-square object-cover rounded-lg" alt="Classic Crew" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxK4y3yRFiANyp4lfIv8PdacSczx69-xXAS-nPRUZMIG9oijTv-xEuppCmBt7eADyXcfgaTTuu8ifUnHO5FkEsEJQI0eAJR9suux9sToR0DQ0ZeiZyd2RWRmMMGVQp73j05X-o18l0NWGWxbyRzZtlvX1_LaNP88vaFJCRaxJKE84j7gIC4aArT71gkHFOaFV6phImydVb0UTM-6T6OpCUc_4KyI22W7vQt9w1roa353VUu9BAMW8J1ru97rRe7HWvMHs9hm4qQhQ" />
                      <span className="text-label-sm mt-xs block text-center">Classic Crew</span>
                    </div>
                    <div className="border border-outline-variant rounded-xl p-sm bg-surface overflow-hidden cursor-pointer hover:border-secondary transition-colors">
                      <img className="w-full aspect-square object-cover rounded-lg" alt="Heavyweight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe2QM45lKC7JSseGKCcRn-PD0UBjixpdJOm-y5Ksgs3XkWNmaQyeVqaU5hXkiaRDUgXwFPNYgs7VIod1N0uILLpD3lVw2ERDN-q4A15ujxIBfaN4IhptcRq779hFVxPrvqDWEYxNDX__jT1n40tomTmMWqO4L1AewutZcE3IpoiulfXUvNtCkJbnvNso40cZciKXJC9pslNZZ-Hl-OvG7Xp2beFnU8Cs0vHhhvfs48prZy0DYJ09SJYR1lPVp2MFtAQMxULK0hJcg" />
                      <span className="text-label-sm mt-xs block text-center">Heavyweight</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-label-md text-on-surface mb-md block">Fabric Colors</span>
                  <div className="flex flex-wrap gap-sm">
                    <button className="w-8 h-8 rounded-full border border-outline-variant bg-white ring-2 ring-secondary ring-offset-2"></button>
                    <button className="w-8 h-8 rounded-full border border-outline-variant bg-[#111827]"></button>
                    <button className="w-8 h-8 rounded-full border border-outline-variant bg-[#3b82f6]"></button>
                    <button className="w-8 h-8 rounded-full border border-outline-variant bg-[#ef4444]"></button>
                    <button className="w-8 h-8 rounded-full border border-outline-variant bg-[#10b981]"></button>
                    <button className="w-8 h-8 rounded-full border border-outline-variant bg-[#f59e0b]"></button>
                  </div>
                </div>
                <div className="bg-surface-container-high rounded-xl p-md border border-dashed border-outline text-center cursor-pointer hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-primary mb-xs">upload_file</span>
                  <p className="font-label-md text-on-surface">Drop assets here</p>
                  <p className="text-[10px] text-on-surface-variant mt-xs">SVG, PNG, or JPG (Max 10MB)</p>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP Center Canvas                                         */}
        {/* ------------------------------------------------------------- */}
        <section className="flex-1 canvas-bg-pattern relative hidden md:flex flex-col items-center justify-center p-2xl w-full">
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
            <button className="flex items-center gap-sm px-md py-xs rounded-full bg-secondary text-on-secondary font-label-md">
              <span className="material-symbols-outlined text-[18px]">front_hand</span>
              Front
            </button>
            <button className="flex items-center gap-sm px-md py-xs rounded-full text-on-surface-variant hover:bg-surface-container transition-colors font-label-md">
              <span className="material-symbols-outlined text-[18px]">back_hand</span>
              Back
            </button>
          </div>
          
          {/* T-Shirt Workspace */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] flex items-center justify-center">
            {/* Shirt Base */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img className="w-full h-full object-contain pointer-events-none drop-shadow-2xl" alt="T-Shirt Mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkFzQLGXH359AdlyMrQnZMrM78nZnNL53kebz61twzrno4Hv2UD94kfpjZqbQb2HeLRbcDnsUVqve_uHPbpA2dqwL6c7g7hkSCLyKVRzEbBN08hoXehr9mXfAqW5w3UVLE5VDM0qoHHEOsSJgmnJdUHMo0G6Yi6oJhAE_ZKf6riSt3_ADU3HftMQa-uTwNlNoUC9rSyR5p_2YGO1VsIZ3D8mtiSnQJFCVl0fV27RtWua9QOq3IdZ5lKg0uu_Ur7spQIcmO9haUqf8" />
            </div>
            {/* Design Area Box (dashed) */}
            <div className="relative z-10 w-[60%] h-[60%] border-2 border-dashed border-secondary/30 flex items-center justify-center group">
              <div className="absolute top-0 right-0 -translate-y-full -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-secondary text-on-secondary text-[10px] px-sm py-xs rounded">Designable Area</span>
              </div>
              {/* Selected Element Mockup */}
              <div className="w-32 h-32 border-2 border-secondary relative cursor-move">
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-secondary"></div>
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-secondary"></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-secondary"></div>
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-secondary"></div>
                <div className="w-full h-full p-xs flex items-center justify-center">
                  <span className="text-headline-md font-bold text-primary select-none">CREATOR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* MOBILE Center Canvas                                          */}
        {/* ------------------------------------------------------------- */}
        <section className="flex-1 canvas-bg-pattern relative md:hidden flex flex-col items-center justify-center p-md overflow-hidden w-full">
          {/* T-Shirt Mockup Layer */}
          <div className="relative w-full max-w-[320px] aspect-[4/5] flex items-center justify-center pointer-events-none">
            <img className="absolute inset-0 w-full h-full object-contain mix-blend-multiply opacity-90" alt="T-Shirt Mockup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD771tj8KhlXtXJgPb4p6eSPH2SlwmwKDZ9dbnIYNdN6EW1lWjlI6vB_RpsjfZoCgnvKTKCQ_ZOD970Wc1zrG78Jj5wB2mNMmnZClYkTNUA2uGP1YAgCsgmZxM4lZo1bzFiIMqzpbg5612vCWPX6715jfjgBrxddvjoh65AZgoc3IoWRiI5Cn5plNXSip-XYNnE0Zy2DkqrFH-28K0ajsEZA9KCd2LsTD-bOreTIssPB90M9rIrIxSUePMoYJYfBiMtGkk1K36bma4" />
            {/* Design Bounding Box (Simulation) */}
            <div className="w-1/2 h-1/2 border-2 border-dashed border-secondary/40 rounded-lg flex items-center justify-center relative pointer-events-auto" onClick={() => setIsSheetOpen(true)}>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-white border border-secondary rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-secondary text-[16px]">sync</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white border border-secondary rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-secondary text-[16px]">open_in_full</span>
              </div>
              {/* Sample Design Content */}
              <div className="text-center cursor-pointer">
                <p className="font-headline-md text-primary text-[24px] font-bold leading-tight uppercase">Custom<br/>Vibes</p>
              </div>
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
            <button className="w-10 h-10 bg-surface rounded-full shadow-md flex items-center justify-center border border-outline-variant/30 active:scale-95 transition-transform" onClick={toggleSheet}>
              <span className="material-symbols-outlined text-on-surface">grid_view</span>
            </button>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* DESKTOP Right Panel                                           */}
        {/* ------------------------------------------------------------- */}
        <aside className="h-full w-[320px] bg-surface-container-low border-l border-outline-variant hidden md:flex flex-col z-10 relative">
          <div className="p-md border-b border-outline-variant">
            <h2 className="font-label-md text-on-surface">Properties</h2>
            <p className="text-label-sm text-on-surface-variant">Selection: Text Layer</p>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-md space-y-xl">
            {/* Font Settings */}
            <div className="space-y-sm">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-wider">Typography</label>
              <select className="w-full bg-surface border border-outline-variant rounded-lg p-sm font-label-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none">
                <option>Inter Bold</option>
                <option>Roboto Regular</option>
                <option>Montserrat Black</option>
                <option>Playfair Display</option>
              </select>
              <div className="flex gap-sm">
                <button className="flex-1 bg-surface border border-outline-variant p-sm rounded-lg hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">format_align_left</span>
                </button>
                <button className="flex-1 bg-secondary text-on-secondary p-sm rounded-lg">
                  <span className="material-symbols-outlined">format_align_center</span>
                </button>
                <button className="flex-1 bg-surface border border-outline-variant p-sm rounded-lg hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined">format_align_right</span>
                </button>
              </div>
            </div>
            {/* Object Settings */}
            <div className="space-y-sm">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-wider">Position &amp; Size</label>
              <div className="grid grid-cols-2 gap-sm">
                <div className="space-y-xs">
                  <span className="text-[10px] text-on-surface-variant">X (px)</span>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" defaultValue="240" />
                </div>
                <div className="space-y-xs">
                  <span className="text-[10px] text-on-surface-variant">Y (px)</span>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" defaultValue="312" />
                </div>
                <div className="space-y-xs">
                  <span className="text-[10px] text-on-surface-variant">Width</span>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" defaultValue="120" />
                </div>
                <div className="space-y-xs">
                  <span className="text-[10px] text-on-surface-variant">Height</span>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg p-sm text-sm outline-none focus:ring-1 focus:ring-secondary" type="number" defaultValue="40" />
                </div>
              </div>
            </div>
            {/* Layer List */}
            <div className="space-y-sm">
              <label className="font-label-sm text-on-surface-variant uppercase tracking-wider">Layers</label>
              <div className="space-y-xs">
                <div className="flex items-center gap-md p-sm bg-surface-container-highest rounded-lg border border-outline-variant">
                  <span className="material-symbols-outlined text-[18px]">title</span>
                  <span className="flex-1 font-label-sm">Text: "CREATOR"</span>
                  <span className="material-symbols-outlined text-[18px] cursor-pointer text-on-surface-variant">visibility</span>
                </div>
                <div className="flex items-center gap-md p-sm bg-surface rounded-lg border border-transparent hover:border-outline-variant transition-all">
                  <span className="material-symbols-outlined text-[18px]">image</span>
                  <span className="flex-1 font-label-sm">Logo_Primary.svg</span>
                  <span className="material-symbols-outlined text-[18px] cursor-pointer text-on-surface-variant">visibility</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE Bottom Sheet                                           */}
      {/* ------------------------------------------------------------- */}
      {/* Expandable Bottom Sheet (Properties) */}
      <div 
        className={`fixed inset-x-0 bottom-[136px] bg-surface-container-lowest z-40 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isSheetOpen ? 'translate-y-0' : 'translate-y-[calc(100%-48px)]'}`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-md pb-sm cursor-pointer" onClick={toggleSheet}>
          <div className="w-12 h-1.5 bg-outline-variant rounded-full"></div>
        </div>
        <div className="px-grid-margin pb-xl max-h-[530px] overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-center mb-md">
            <h3 className="font-headline-md text-label-md text-on-surface font-bold uppercase tracking-wider">Properties</h3>
            <span className="text-on-surface-variant font-label-sm">Object: Text</span>
          </div>
          {/* Contextual Controls */}
          <div className="space-y-xl">
            {/* Color Picker */}
            <div>
              <label className="font-label-md text-on-surface-variant block mb-sm">Text Color</label>
              <div className="flex gap-md overflow-x-auto hide-scrollbar pb-xs">
                <div className="w-10 h-10 flex-shrink-0 rounded-full border-2 border-secondary ring-2 ring-secondary/20 p-0.5"><div className="w-full h-full bg-black rounded-full"></div></div>
                <div className="w-10 h-10 flex-shrink-0 rounded-full border border-outline-variant p-0.5"><div className="w-full h-full bg-white rounded-full"></div></div>
                <div className="w-10 h-10 flex-shrink-0 rounded-full border border-outline-variant p-0.5"><div className="w-full h-full bg-red-500 rounded-full"></div></div>
                <div className="w-10 h-10 flex-shrink-0 rounded-full border border-outline-variant p-0.5"><div className="w-full h-full bg-blue-600 rounded-full"></div></div>
                <div className="w-10 h-10 flex-shrink-0 rounded-full border border-outline-variant p-0.5"><div className="w-full h-full bg-emerald-500 rounded-full"></div></div>
                <div className="w-10 h-10 flex-shrink-0 rounded-full border border-outline-variant p-0.5 flex items-center justify-center bg-surface-container active:scale-95 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">palette</span>
                </div>
              </div>
            </div>
            {/* Font Selection */}
            <div>
              <label className="font-label-md text-on-surface-variant block mb-sm">Font Family</label>
              <div className="grid grid-cols-2 gap-sm">
                <button className="bg-surface-container-high text-on-surface py-sm px-md rounded-xl font-bold border-2 border-transparent active:scale-95 transition-transform">Inter Bold</button>
                <button className="bg-surface-container text-on-surface py-sm px-md rounded-xl font-serif active:scale-95 transition-transform">Playfair Display</button>
                <button className="bg-surface-container text-on-surface py-sm px-md rounded-xl font-mono active:scale-95 transition-transform">Roboto Mono</button>
                <button className="bg-surface-container text-on-surface py-sm px-md rounded-xl italic active:scale-95 transition-transform">Caveat Brush</button>
              </div>
            </div>
            {/* Slider Example */}
            <div>
              <div className="flex justify-between mb-sm">
                <label className="font-label-md text-on-surface-variant">Letter Spacing</label>
                <span className="font-label-sm text-secondary">1.2px</span>
              </div>
              <input className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary" type="range" defaultValue={50} />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE Tool Bar                                               */}
      {/* ------------------------------------------------------------- */}
      <nav className="fixed bottom-[76px] w-full bg-surface border-t border-outline-variant/30 pb-safe z-50 md:hidden">
        <div className="flex overflow-x-auto hide-scrollbar px-sm">
          <button className={getMobileTabClass('Upload')} onClick={() => setActiveTab('Upload')}>
            <span className="material-symbols-outlined" data-icon="cloud_upload">cloud_upload</span>
            <span className="font-label-sm">Upload</span>
          </button>
          <button className={getMobileTabClass('Text')} onClick={() => setActiveTab('Text')}>
            <span className="material-symbols-outlined" data-icon="title" style={activeTab === 'Text' ? { fontVariationSettings: "'FILL' 1" } : {}}>title</span>
            <span className="font-label-sm font-bold">Text</span>
          </button>
          <button className={getMobileTabClass('Elements')} onClick={() => setActiveTab('Elements')}>
            <span className="material-symbols-outlined" data-icon="category">category</span>
            <span className="font-label-sm">Elements</span>
          </button>
          <button className={getMobileTabClass('Layers')} onClick={() => setActiveTab('Layers')}>
            <span className="material-symbols-outlined" data-icon="layers">layers</span>
            <span className="font-label-sm">Layers</span>
          </button>
          <button className={getMobileTabClass('Mockups')} onClick={() => setActiveTab('Mockups')}>
            <span className="material-symbols-outlined" data-icon="check_shirt">check_small</span>
            <span className="font-label-sm">Mockups</span>
          </button>
        </div>
      </nav>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE Sticky Add to Cart Footer                              */}
      {/* ------------------------------------------------------------- */}
      <footer className="fixed bottom-0 w-full bg-surface-container-highest/95 backdrop-blur-lg px-grid-margin py-md border-t border-outline-variant/30 flex items-center justify-between gap-lg z-[60] md:hidden">
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tight">Total Price</span>
          <span className="font-headline-md text-primary">$34.99</span>
        </div>
        <Link to="/cart" className="flex-1 bg-primary text-on-primary py-md px-xl rounded-full flex items-center justify-center gap-md active:scale-95 transition-transform">
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
            <div className="w-16 h-16 bg-surface-container rounded-lg border border-outline-variant flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" alt="Thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTnQ3gKJjS6kPAxFFSFpg7D6Y2asHEaSNH1xEYomSWdEv5BWvBmHqFrAoKmYOHyUY9MCdwcCvFaRnbu5UgLEOWMVUipmW3mYfeFIDwnNGRf2tQLK-mzCQIfnrtDhmIJVYKrQOkl1UdXv7x9UI2Rc7iFplcLK1fdKwAP4L8D9E-0y1a2rX4hapMjBFvmp0D9SHFlr7Jcs6S45khc5WAZXbLW5ZqbcrAZaBMW3-0TRHHja8W5guvY2qyks7YD7buZd83TeoQGsxKL18" />
            </div>
            <div>
              <h3 className="font-headline-md text-[18px] font-bold text-on-surface leading-tight">Custom Classic Crew</h3>
              <div className="flex gap-md mt-xs flex-wrap">
                <span className="text-label-sm px-sm py-[2px] bg-surface-container rounded text-on-surface-variant">White</span>
                <span className="text-label-sm px-sm py-[2px] bg-surface-container rounded text-on-surface-variant">Size L</span>
                <span className="text-label-sm px-sm py-[2px] bg-surface-container rounded text-on-surface-variant">2 Colors</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2xl w-full md:w-auto justify-between md:justify-end border-t border-outline-variant/30 md:border-0 pt-4 md:pt-0 mt-4 md:mt-0">
            <div className="text-right">
              <span className="block text-label-sm text-on-surface-variant uppercase">Estimated Total</span>
              <span className="font-headline-md text-primary text-[28px]">$34.99</span>
            </div>
            <div className="flex gap-md">
              <button className="hidden sm:block bg-surface border border-outline-variant text-on-surface px-xl py-md rounded-xl font-label-md hover:bg-surface-container transition-all active:scale-95">
                Save Draft
              </button>
              <Link to="/cart" className="bg-primary text-on-primary px-xl md:px-2xl py-md rounded-xl font-label-md shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 whitespace-nowrap block text-center">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
