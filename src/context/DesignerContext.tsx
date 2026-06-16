import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type LayerType = 'text' | 'image' | 'shape' | 'emoji';
export type SideType = 'front' | 'back';

export interface Layer {
  id: string;
  name: string;
  type: LayerType;
  content: string;        // text string | image URL | shape SVG path | emoji char
  side: SideType;
  x: number;              // % from left of design area
  y: number;              // % from top of design area
  width: number;          // % width of design area
  height: number;         // % height of design area
  color?: string;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right';
  letterSpacing?: number;
  fontSize?: number;
  opacity?: number;       // 0–100
  rotation?: number;      // 0–360 degrees
  locked?: boolean;
  visible: boolean;
}

export interface ProductConfig {
  style: string;
  color: string;
  basePrice: number;
}

export const FABRIC_COLORS = [
  { id: 'white',   value: '#FFFFFF', name: 'White' },
  { id: 'black',   value: '#111827', name: 'Black' },
  { id: 'blue',    value: '#3b82f6', name: 'Royal Blue' },
  { id: 'red',     value: '#ef4444', name: 'Crimson Red' },
  { id: 'green',   value: '#10b981', name: 'Emerald' },
  { id: 'yellow',  value: '#f59e0b', name: 'Amber' },
  { id: 'purple',  value: '#8b5cf6', name: 'Violet' },
  { id: 'pink',    value: '#ec4899', name: 'Rose' },
  { id: 'gray',    value: '#6b7280', name: 'Slate' },
  { id: 'navy',    value: '#1e3a8a', name: 'Navy' },
  { id: 'orange',  value: '#f97316', name: 'Orange' },
  { id: 'teal',    value: '#14b8a6', name: 'Teal' },
];

export const FONTS = ['Inter', 'Playfair Display', 'Roboto Mono', 'Caveat Brush', 'Georgia', 'Arial Black'];

export const SHIRT_STYLES = [
  { id: 'Classic Crew', label: 'Classic Crew',  desc: 'Round neck · Regular fit' },
  { id: 'V-Neck',       label: 'V-Neck',         desc: 'Deep V · Slim fit'       },
  { id: 'Long Sleeve',  label: 'Long Sleeve',    desc: 'Full sleeve · Regular'    },
  { id: 'Oversized',    label: 'Oversized',       desc: 'Drop shoulder · Boxy'    },
  { id: 'Polo',         label: 'Polo',            desc: 'Collar · Button placket' },
  { id: 'Tank Top',     label: 'Tank Top',        desc: 'Sleeveless · Athletic'   },
];


export const SHAPES = [
  { id: 'circle',    label: 'Circle',    path: 'M 50 10 A 40 40 0 1 0 50.001 10 Z' },
  { id: 'rect',      label: 'Rectangle', path: 'M 5 5 H 95 V 95 H 5 Z' },
  { id: 'star',      label: 'Star',      path: 'M50 5 l11 34h36l-29 21 11 34L50 73 21 94l11-34-29-21h36z' },
  { id: 'heart',     label: 'Heart',     path: 'M50 85 C20 65 5 45 5 28 5 14 16 5 28 5c8 0 15 4 22 12C57 9 64 5 72 5c12 0 23 9 23 23C95 45 80 65 50 85z' },
  { id: 'triangle',  label: 'Triangle',  path: 'M50 5 L95 90 L5 90 Z' },
  { id: 'diamond',   label: 'Diamond',   path: 'M50 5 L95 50 L50 95 L5 50 Z' },
  { id: 'hexagon',   label: 'Hexagon',   path: 'M50 5 L90 27 L90 73 L50 95 L10 73 L10 27 Z' },
  { id: 'arrow',     label: 'Arrow',     path: 'M5 35 H65 V20 L95 50 L65 80 V65 H5 Z' },
];

export const EMOJIS = [
  '🔥', '⭐', '💎', '🎨', '🎯', '👑', '🌈', '💫',
  '🦋', '🌸', '🎭', '⚡', '🌊', '🍀', '🎪', '🦄',
  '🐉', '🌙', '☀️', '❄️', '🌺', '🎸', '🎵', '🏆',
  '💪', '✌️', '🤘', '👊', '🙌', '👏', '💖', '💥',
];

// ─── History helpers ─────────────────────────────────────────────
type HistoryEntry = { layers: Layer[]; product: ProductConfig };

// ─── Saved Design type ───────────────────────────────────────────
export interface SavedDesign {
  id: string;
  name: string;
  savedAt: string;
  layers: Layer[];
  product: ProductConfig;
}

const LS_KEY = 'customware_saved_designs';

function loadSaved(): SavedDesign[] {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  } catch {
    return [];
  }
}

interface DesignerContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSheetOpen: boolean;
  setIsSheetOpen: (open: boolean) => void;
  isToolsSheetOpen: boolean;
  setIsToolsSheetOpen: (open: boolean) => void;
  product: ProductConfig;
  setProduct: React.Dispatch<React.SetStateAction<ProductConfig>>;
  layers: Layer[];
  setLayers: React.Dispatch<React.SetStateAction<Layer[]>>;
  selectedLayerId: string | null;
  setSelectedLayerId: (id: string | null) => void;
  activeSide: SideType;
  setActiveSide: (side: SideType) => void;
  activeLayer: Layer | undefined;
  updateLayer: (id: string, updates: Partial<Layer>) => void;
  addTextLayer: () => void;
  addShapeLayer: (shapeId: string) => void;
  addEmojiLayer: (emoji: string) => void;
  deleteLayer: (id: string) => void;
  duplicateLayer: (id: string) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDownload: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  saveDesign: (name?: string) => void;
  loadDesign: (design: SavedDesign) => void;
  deleteDesign: (id: string) => void;
  savedDesigns: SavedDesign[];
}

const DesignerContext = createContext<DesignerContextType | undefined>(undefined);

export function DesignerProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState('Upload');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isToolsSheetOpen, setIsToolsSheetOpen] = useState(false);
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>(loadSaved);

  const [product, setProductState] = useState<ProductConfig>({
    style: 'Classic Crew',
    color: '#FFFFFF',
    basePrice: 24.99,
  });

  const initialLayers: Layer[] = [
    {
      id: 'layer-1',
      name: 'Text: "CREATOR"',
      type: 'text',
      content: 'CREATOR',
      side: 'front',
      x: 10,
      y: 40,
      width: 80,
      height: 20,
      color: '#3b82f6',
      fontFamily: 'Inter',
      letterSpacing: 1.2,
      fontSize: 32,
      textAlign: 'center',
      opacity: 100,
      rotation: 0,
      locked: false,
      visible: true,
    },
  ];

  const [layers, setLayersState] = useState<Layer[]>(initialLayers);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>('layer-1');
  const [activeSide, setActiveSide] = useState<SideType>('front');

  // ── History ──
  const [history, setHistory] = useState<HistoryEntry[]>([{ layers: initialLayers, product: { style: 'Classic Crew', color: '#FFFFFF', basePrice: 24.99 } }]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const skipHistory = React.useRef(false);

  const pushHistory = useCallback((newLayers: Layer[], newProduct: ProductConfig) => {
    if (skipHistory.current) return;
    setHistory(prev => {
      const next = prev.slice(0, historyIndex + 1);
      next.push({ layers: newLayers, product: newProduct });
      if (next.length > 50) next.shift();
      return next;
    });
    setHistoryIndex(prev => Math.min(prev + 1, 49));
  }, [historyIndex]);

  // Wrapped setters that also push history
  const setLayers = useCallback((updater: React.SetStateAction<Layer[]>) => {
    setLayersState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      pushHistory(next, product);
      return next;
    });
  }, [pushHistory, product]);

  const setProduct = useCallback((updater: React.SetStateAction<ProductConfig>) => {
    setProductState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      pushHistory(layers, next);
      return next;
    });
  }, [pushHistory, layers]);

  const undo = useCallback(() => {
    if (historyIndex <= 0) return;
    const idx = historyIndex - 1;
    skipHistory.current = true;
    setLayersState(history[idx].layers);
    setProductState(history[idx].product);
    setHistoryIndex(idx);
    setTimeout(() => { skipHistory.current = false; }, 0);
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex >= history.length - 1) return;
    const idx = historyIndex + 1;
    skipHistory.current = true;
    setLayersState(history[idx].layers);
    setProductState(history[idx].product);
    setHistoryIndex(idx);
    setTimeout(() => { skipHistory.current = false; }, 0);
  }, [history, historyIndex]);

  const activeLayer = layers.find(l => l.id === selectedLayerId);

  const updateLayer = useCallback((id: string, updates: Partial<Layer>) => {
    setLayersState(prev => {
      const next = prev.map(l => l.id === id ? { ...l, ...updates } : l);
      pushHistory(next, product);
      return next;
    });
  }, [pushHistory, product]);

  const addTextLayer = useCallback(() => {
    const newId = `layer-${Date.now()}`;
    const newLayer: Layer = {
      id: newId,
      name: 'New Text',
      type: 'text',
      content: 'YOUR TEXT',
      side: activeSide,
      x: 20,
      y: 20,
      width: 60,
      height: 15,
      color: '#111827',
      fontFamily: 'Inter',
      letterSpacing: 0,
      fontSize: 24,
      textAlign: 'center',
      opacity: 100,
      rotation: 0,
      locked: false,
      visible: true,
    };
    setLayersState(prev => {
      const next = [...prev, newLayer];
      pushHistory(next, product);
      return next;
    });
    setSelectedLayerId(newId);
  }, [activeSide, pushHistory, product]);

  const addShapeLayer = useCallback((shapeId: string) => {
    const shape = SHAPES.find(s => s.id === shapeId);
    if (!shape) return;
    const newId = `layer-${Date.now()}`;
    const newLayer: Layer = {
      id: newId,
      name: `Shape: ${shape.label}`,
      type: 'shape',
      content: shape.path,
      side: activeSide,
      x: 25,
      y: 25,
      width: 50,
      height: 50,
      color: '#3b82f6',
      opacity: 100,
      rotation: 0,
      locked: false,
      visible: true,
    };
    setLayersState(prev => {
      const next = [...prev, newLayer];
      pushHistory(next, product);
      return next;
    });
    setSelectedLayerId(newId);
  }, [activeSide, pushHistory, product]);

  const addEmojiLayer = useCallback((emoji: string) => {
    const newId = `layer-${Date.now()}`;
    const newLayer: Layer = {
      id: newId,
      name: `Emoji: ${emoji}`,
      type: 'emoji',
      content: emoji,
      side: activeSide,
      x: 25,
      y: 25,
      width: 25,
      height: 25,
      fontSize: 48,
      opacity: 100,
      rotation: 0,
      locked: false,
      visible: true,
    };
    setLayersState(prev => {
      const next = [...prev, newLayer];
      pushHistory(next, product);
      return next;
    });
    setSelectedLayerId(newId);
  }, [activeSide, pushHistory, product]);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const newId = `layer-${Date.now()}`;
    const newLayer: Layer = {
      id: newId,
      name: file.name,
      type: 'image',
      content: url,
      side: activeSide,
      x: 15,
      y: 15,
      width: 70,
      height: 70,
      opacity: 100,
      rotation: 0,
      locked: false,
      visible: true,
    };
    setLayersState(prev => {
      const next = [...prev, newLayer];
      pushHistory(next, product);
      return next;
    });
    setSelectedLayerId(newId);
    e.target.value = '';
  }, [activeSide, pushHistory, product]);

  const deleteLayer = useCallback((id: string) => {
    setLayersState(prev => {
      const next = prev.filter(l => l.id !== id);
      pushHistory(next, product);
      return next;
    });
    if (selectedLayerId === id) setSelectedLayerId(null);
  }, [selectedLayerId, pushHistory, product]);

  const duplicateLayer = useCallback((id: string) => {
    const layer = layers.find(l => l.id === id);
    if (!layer) return;
    const newId = `layer-${Date.now()}`;
    const dup: Layer = { ...layer, id: newId, name: `${layer.name} (copy)`, x: layer.x + 5, y: layer.y + 5 };
    setLayersState(prev => {
      const next = [...prev, dup];
      pushHistory(next, product);
      return next;
    });
    setSelectedLayerId(newId);
  }, [layers, pushHistory, product]);

  // ── Save / Load ──
  const saveDesign = useCallback((name?: string) => {
    const designName = name || `Design ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    const newDesign: SavedDesign = {
      id: `design-${Date.now()}`,
      name: designName,
      savedAt: new Date().toISOString(),
      layers,
      product,
    };
    setSavedDesigns(prev => {
      const next = [newDesign, ...prev].slice(0, 10); // keep latest 10
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  }, [layers, product]);

  const loadDesign = useCallback((design: SavedDesign) => {
    skipHistory.current = true;
    setLayersState(design.layers);
    setProductState(design.product);
    setTimeout(() => { skipHistory.current = false; }, 0);
    setSelectedLayerId(null);
  }, []);

  const deleteDesign = useCallback((id: string) => {
    setSavedDesigns(prev => {
      const next = prev.filter(d => d.id !== id);
      localStorage.setItem(LS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  // ── Download — native Canvas 2D (no html2canvas, no CORS issues) ──
  const handleDownload = useCallback(async () => {
    // Import path helpers from TShirtSVG (matches new 500×560 viewBox)
    const { getTShirtPath, getCollarPath, getDesignAreaFraction } = await import('../components/designer/TShirtSVG');

    // Canvas dimensions: 500×560 viewBox scaled 3× for high-DPI export
    const SCALE = 3;
    const VB_W = 500;
    const VB_H = 560;

    const offscreen = document.createElement('canvas');
    offscreen.width  = VB_W * SCALE;
    offscreen.height = VB_H * SCALE;
    const ctx = offscreen.getContext('2d');
    if (!ctx) return;

    ctx.scale(SCALE, SCALE);

    // ── 1. Shirt body ─────────────────────────────────────────────────────────
    const shirtPath = new Path2D(getTShirtPath(product.style));

    // Drop shadow
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.32)';
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 12;
    ctx.fillStyle = product.color;
    ctx.fill(shirtPath);
    ctx.restore();

    // Body shading gradient
    const bodyGrad = ctx.createLinearGradient(VB_W * 0.15, 0, VB_W * 0.85, VB_H);
    bodyGrad.addColorStop(0,    'rgba(255,255,255,0.24)');
    bodyGrad.addColorStop(0.25, 'rgba(255,255,255,0.10)');
    bodyGrad.addColorStop(0.65, 'rgba(0,0,0,0.03)');
    bodyGrad.addColorStop(1,    'rgba(0,0,0,0.20)');
    ctx.save();
    ctx.fillStyle = bodyGrad;
    ctx.fill(shirtPath);
    ctx.restore();

    // Shirt outline
    ctx.save();
    ctx.strokeStyle = 'rgba(0,0,0,0.22)';
    ctx.lineWidth = 1.8;
    ctx.lineJoin = 'round';
    ctx.stroke(shirtPath);
    ctx.restore();

    // Collar rib band
    const collarPath = new Path2D(getCollarPath(product.style));
    ctx.save();
    ctx.strokeStyle = 'rgba(0,0,0,0.26)';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke(collarPath);
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = product.color;
    ctx.globalAlpha = 0.82;
    ctx.lineWidth = 4.5;
    ctx.lineCap = 'round';
    ctx.stroke(collarPath);
    ctx.restore();

    // ── 2. Design layers ──────────────────────────────────────────────────────
    const da = getDesignAreaFraction();
    const DA_LEFT = VB_W * da.left;
    const DA_TOP  = VB_H * da.top;
    const DA_W    = VB_W * da.width;
    const DA_H    = VB_H * da.height;

    ctx.save();
    ctx.beginPath();
    ctx.rect(DA_LEFT, DA_TOP, DA_W, DA_H);
    ctx.clip();

    const visibleLayers = layers.filter(l => l.visible && l.side === activeSide);

    for (const layer of visibleLayers) {
      const lx  = DA_LEFT + (layer.x / 100) * DA_W;
      const ly  = DA_TOP  + (layer.y / 100) * DA_H;
      const lw  = (layer.width  / 100) * DA_W;
      const lh  = (layer.height / 100) * DA_H;
      const cx  = lx + lw / 2;
      const cyc = ly + lh / 2;

      ctx.save();
      ctx.globalAlpha = (layer.opacity ?? 100) / 100;

      if (layer.rotation) {
        ctx.translate(cx, cyc);
        ctx.rotate((layer.rotation * Math.PI) / 180);
        ctx.translate(-cx, -cyc);
      }

      if (layer.type === 'text') {
        const fs = layer.fontSize ?? 32;
        ctx.font = `bold ${fs}px "${layer.fontFamily ?? 'Inter'}", sans-serif`;
        ctx.fillStyle = layer.color ?? '#000000';
        ctx.textAlign  = (layer.textAlign as CanvasTextAlign) ?? 'center';
        ctx.textBaseline = 'middle';
        if (layer.letterSpacing) {
          const chars = Array.from(layer.content);
          let startX = cx - ctx.measureText(layer.content).width / 2;
          for (const ch of chars) {
            ctx.fillText(ch, startX, cyc);
            startX += ctx.measureText(ch).width + (layer.letterSpacing ?? 0);
          }
        } else {
          ctx.fillText(layer.content, cx, cyc);
        }
      } else if (layer.type === 'image') {
        try {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = layer.content;
          });
          ctx.drawImage(img, lx, ly, lw, lh);
        } catch {
          ctx.fillStyle = 'rgba(100,100,100,0.2)';
          ctx.fillRect(lx, ly, lw, lh);
        }
      } else if (layer.type === 'shape') {
        ctx.save();
        ctx.translate(lx, ly);
        ctx.scale(lw / 100, lh / 100);
        ctx.fillStyle = layer.color ?? '#3b82f6';
        ctx.fill(new Path2D(layer.content));
        ctx.restore();
      } else if (layer.type === 'emoji') {
        ctx.font = `${layer.fontSize ?? 48}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(layer.content, cx, cyc);
      }

      ctx.restore();
    }

    ctx.restore(); // end clip

    // ── 3. Download ───────────────────────────────────────────────────────────
    const link = document.createElement('a');
    link.download = `custom-tshirt-${activeSide}-${Date.now()}.png`;
    link.href = offscreen.toDataURL('image/png');
    link.click();
  }, [activeSide, layers, product]);


  const value: DesignerContextType = {
    activeTab, setActiveTab,
    isSheetOpen, setIsSheetOpen,
    isToolsSheetOpen, setIsToolsSheetOpen,
    product, setProduct,
    layers, setLayers,
    selectedLayerId, setSelectedLayerId,
    activeSide, setActiveSide,
    activeLayer,
    updateLayer,
    addTextLayer,
    addShapeLayer,
    addEmojiLayer,
    deleteLayer,
    duplicateLayer,
    handleImageUpload,
    handleDownload,
    undo, redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    saveDesign,
    loadDesign,
    deleteDesign,
    savedDesigns,
  };

  return (
    <DesignerContext.Provider value={value}>
      {children}
    </DesignerContext.Provider>
  );
}

export function useDesigner() {
  const ctx = useContext(DesignerContext);
  if (!ctx) throw new Error('useDesigner must be used within DesignerProvider');
  return ctx;
}
