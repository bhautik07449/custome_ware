import { useDesigner, FABRIC_COLORS } from '../../context/DesignerContext';

export default function DesignerSidebar() {
  const { 
    activeTab, setActiveTab, product, setProduct, layers, selectedLayerId, setSelectedLayerId,
    addTextLayer, deleteLayer, handleImageUpload, updateLayer, handleDownload,
    isToolsSheetOpen, setIsToolsSheetOpen
  } = useDesigner();

  const getTabClass = (tabName: string) => {
    if (activeTab === tabName) {
      return "flex flex-row items-center border-l-2 border-secondary bg-surface-container-highest text-secondary p-md transition-all w-full text-left";
    }
    return "flex flex-row items-center text-on-surface-variant p-md hover:bg-surface-container transition-all w-full text-left";
  };

  return (
    <>
    <aside className="h-full w-[320px] bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col z-10 relative">
      <div className="p-md border-b border-outline-variant flex justify-between items-center">
        <div>
          <h1 className="font-headline-md text-[18px] font-bold text-on-surface">Design Studio</h1>
          <p className="text-label-sm text-on-surface-variant">V1.0 • Pro Builder</p>
        </div>
        <button onClick={handleDownload} className="bg-secondary text-on-secondary px-md py-xs rounded-lg font-label-md active:translate-x-1 transition-transform flex items-center gap-xs">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download
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

        {/* Content Area for Tool Tabs */}
        {activeTab === 'Upload' && (
          <div className="p-md space-y-lg">
            <div>
              <span className="font-label-md text-on-surface mb-md block">T-shirt Styles</span>
              <div className="grid grid-cols-2 gap-sm">
                <div onClick={() => setProduct({ ...product, style: 'Classic Crew' })} className={`border-2 rounded-xl p-sm bg-surface overflow-hidden cursor-pointer ${product.style === 'Classic Crew' ? 'border-secondary' : 'border-transparent hover:border-outline-variant'}`}>
                  <img className="w-full aspect-square object-cover rounded-lg" alt="Classic Crew" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxK4y3yRFiANyp4lfIv8PdacSczx69-xXAS-nPRUZMIG9oijTv-xEuppCmBt7eADyXcfgaTTuu8ifUnHO5FkEsEJQI0eAJR9suux9sToR0DQ0ZeiZyd2RWRmMMGVQp73j05X-o18l0NWGWxbyRzZtlvX1_LaNP88vaFJCRaxJKE84j7gIC4aArT71gkHFOaFV6phImydVb0UTM-6T6OpCUc_4KyI22W7vQt9w1roa353VUu9BAMW8J1ru97rRe7HWvMHs9hm4qQhQ" />
                  <span className="text-label-sm mt-xs block text-center">Classic Crew</span>
                </div>
                <div onClick={() => setProduct({ ...product, style: 'Heavyweight' })} className={`border-2 rounded-xl p-sm bg-surface overflow-hidden cursor-pointer ${product.style === 'Heavyweight' ? 'border-secondary' : 'border-transparent hover:border-outline-variant'}`}>
                  <img className="w-full aspect-square object-cover rounded-lg" alt="Heavyweight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe2QM45lKC7JSseGKCcRn-PD0UBjixpdJOm-y5Ksgs3XkWNmaQyeVqaU5hXkiaRDUgXwFPNYgs7VIod1N0uILLpD3lVw2ERDN-q4A15ujxIBfaN4IhptcRq779hFVxPrvqDWEYxNDX__jT1n40tomTmMWqO4L1AewutZcE3IpoiulfXUvNtCkJbnvNso40cZciKXJC9pslNZZ-Hl-OvG7Xp2beFnU8Cs0vHhhvfs48prZy0DYJ09SJYR1lPVp2MFtAQMxULK0hJcg" />
                  <span className="text-label-sm mt-xs block text-center">Heavyweight</span>
                </div>
              </div>
            </div>
            <div>
              <span className="font-label-md text-on-surface mb-md block">Fabric Colors</span>
              <div className="flex flex-wrap gap-sm">
                {FABRIC_COLORS.map(c => (
                  <button key={c.id} onClick={() => setProduct({ ...product, color: c.value })} className={`w-8 h-8 rounded-full border border-outline-variant ${product.color === c.value ? 'ring-2 ring-secondary ring-offset-2' : ''}`} style={{ backgroundColor: c.value }} title={c.name}></button>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl p-md border border-dashed border-outline text-center cursor-pointer hover:bg-surface-container-highest transition-colors relative overflow-hidden">
              <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" onChange={handleImageUpload} title="" />
              <span className="material-symbols-outlined text-primary mb-xs pointer-events-none">upload_file</span>
              <p className="font-label-md text-on-surface pointer-events-none">Drop assets here</p>
              <p className="text-[10px] text-on-surface-variant mt-xs pointer-events-none">SVG, PNG, or JPG (Max 10MB)</p>
            </div>
          </div>
        )}

        {activeTab === 'Text' && (
          <div className="p-md space-y-lg">
            <button onClick={addTextLayer} className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-sm">
              <span className="material-symbols-outlined">add</span>
              Add New Text
            </button>
            <div className="space-y-sm">
              <p className="text-label-sm text-on-surface-variant">Or choose a preset:</p>
              <div onClick={addTextLayer} className="p-sm border border-outline-variant rounded-lg text-center font-bold text-xl cursor-pointer hover:bg-surface-container transition-colors font-sans">HEADING</div>
              <div onClick={addTextLayer} className="p-sm border border-outline-variant rounded-lg text-center font-semibold text-md cursor-pointer hover:bg-surface-container transition-colors font-serif">Subheading</div>
              <div onClick={addTextLayer} className="p-sm border border-outline-variant rounded-lg text-center font-normal text-sm cursor-pointer hover:bg-surface-container transition-colors font-mono">Body text</div>
            </div>
          </div>
        )}

        {activeTab === 'Layers' && (
          <div className="p-md space-y-sm">
            <h3 className="font-label-md text-on-surface mb-md">Design Layers</h3>
            <div className="space-y-xs">
              {layers.length === 0 && <p className="text-label-sm text-on-surface-variant text-center py-md">No layers yet.</p>}
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
        )}
      </div>
    </aside>

    {/* ------------------------------------------------------------- */}
    {/* MOBILE Tools Bottom Sheet                                     */}
    {/* ------------------------------------------------------------- */}
    {isToolsSheetOpen && (
      <div 
        className="fixed inset-0 bg-black/40 z-[65] md:hidden transition-opacity duration-300 backdrop-blur-sm"
        onClick={() => setIsToolsSheetOpen(false)}
      />
    )}
    <div
      className={`fixed inset-x-0 bottom-[76px] bg-surface-container-lowest z-[70] rounded-t-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${isToolsSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="flex justify-center pt-md pb-sm cursor-pointer" onClick={() => setIsToolsSheetOpen(false)}>
        <div className="w-12 h-1.5 bg-outline-variant rounded-full"></div>
      </div>
      <div className="px-grid-margin pb-xl max-h-[50vh] overflow-y-auto custom-scrollbar">
        {/* Render Content Based on Active Tab */}
        {activeTab === 'Upload' && (
          <div className="p-md space-y-lg">
            <div>
              <span className="font-label-md text-on-surface mb-md block">T-shirt Styles</span>
              <div className="grid grid-cols-2 gap-sm">
                <div onClick={() => setProduct({ ...product, style: 'Classic Crew' })} className={`border-2 rounded-xl p-sm bg-surface overflow-hidden cursor-pointer ${product.style === 'Classic Crew' ? 'border-secondary' : 'border-transparent hover:border-outline-variant'}`}>
                  <img className="w-full aspect-square object-cover rounded-lg" alt="Classic Crew" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxK4y3yRFiANyp4lfIv8PdacSczx69-xXAS-nPRUZMIG9oijTv-xEuppCmBt7eADyXcfgaTTuu8ifUnHO5FkEsEJQI0eAJR9suux9sToR0DQ0ZeiZyd2RWRmMMGVQp73j05X-o18l0NWGWxbyRzZtlvX1_LaNP88vaFJCRaxJKE84j7gIC4aArT71gkHFOaFV6phImydVb0UTM-6T6OpCUc_4KyI22W7vQt9w1roa353VUu9BAMW8J1ru97rRe7HWvMHs9hm4qQhQ" />
                  <span className="text-label-sm mt-xs block text-center">Classic Crew</span>
                </div>
                <div onClick={() => setProduct({ ...product, style: 'Heavyweight' })} className={`border-2 rounded-xl p-sm bg-surface overflow-hidden cursor-pointer ${product.style === 'Heavyweight' ? 'border-secondary' : 'border-transparent hover:border-outline-variant'}`}>
                  <img className="w-full aspect-square object-cover rounded-lg" alt="Heavyweight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe2QM45lKC7JSseGKCcRn-PD0UBjixpdJOm-y5Ksgs3XkWNmaQyeVqaU5hXkiaRDUgXwFPNYgs7VIod1N0uILLpD3lVw2ERDN-q4A15ujxIBfaN4IhptcRq779hFVxPrvqDWEYxNDX__jT1n40tomTmMWqO4L1AewutZcE3IpoiulfXUvNtCkJbnvNso40cZciKXJC9pslNZZ-Hl-OvG7Xp2beFnU8Cs0vHhhvfs48prZy0DYJ09SJYR1lPVp2MFtAQMxULK0hJcg" />
                  <span className="text-label-sm mt-xs block text-center">Heavyweight</span>
                </div>
              </div>
            </div>
            <div>
              <span className="font-label-md text-on-surface mb-md block">Fabric Colors</span>
              <div className="flex flex-wrap gap-sm">
                {FABRIC_COLORS.map(c => (
                  <button key={c.id} onClick={() => setProduct({ ...product, color: c.value })} className={`w-8 h-8 rounded-full border border-outline-variant ${product.color === c.value ? 'ring-2 ring-secondary ring-offset-2' : ''}`} style={{ backgroundColor: c.value }} title={c.name}></button>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-high rounded-xl p-md border border-dashed border-outline text-center cursor-pointer hover:bg-surface-container-highest transition-colors relative overflow-hidden">
              <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" onChange={handleImageUpload} title="" />
              <span className="material-symbols-outlined text-primary mb-xs pointer-events-none">upload_file</span>
              <p className="font-label-md text-on-surface pointer-events-none">Drop assets here</p>
              <p className="text-[10px] text-on-surface-variant mt-xs pointer-events-none">SVG, PNG, or JPG (Max 10MB)</p>
            </div>
          </div>
        )}

        {activeTab === 'Text' && (
          <div className="p-md space-y-lg">
            <button onClick={() => { addTextLayer(); setIsToolsSheetOpen(false); }} className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-sm">
              <span className="material-symbols-outlined">add</span>
              Add New Text
            </button>
            <div className="space-y-sm">
              <p className="text-label-sm text-on-surface-variant">Or choose a preset:</p>
              <div onClick={() => { addTextLayer(); setIsToolsSheetOpen(false); }} className="p-sm border border-outline-variant rounded-lg text-center font-bold text-xl cursor-pointer hover:bg-surface-container transition-colors font-sans">HEADING</div>
              <div onClick={() => { addTextLayer(); setIsToolsSheetOpen(false); }} className="p-sm border border-outline-variant rounded-lg text-center font-semibold text-md cursor-pointer hover:bg-surface-container transition-colors font-serif">Subheading</div>
              <div onClick={() => { addTextLayer(); setIsToolsSheetOpen(false); }} className="p-sm border border-outline-variant rounded-lg text-center font-normal text-sm cursor-pointer hover:bg-surface-container transition-colors font-mono">Body text</div>
            </div>
          </div>
        )}

        {activeTab === 'Layers' && (
          <div className="p-md space-y-sm">
            <h3 className="font-label-md text-on-surface mb-md">Design Layers</h3>
            <div className="space-y-xs">
              {layers.length === 0 && <p className="text-label-sm text-on-surface-variant text-center py-md">No layers yet.</p>}
              {layers.map(layer => (
                <div
                  key={layer.id}
                  onClick={() => { setSelectedLayerId(layer.id); setIsToolsSheetOpen(false); }}
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
        )}
      </div>
    </div>
    </>
  );
}
