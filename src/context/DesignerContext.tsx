import React, { createContext, useContext, useState, type ReactNode } from 'react';

export type LayerType = 'text' | 'image';
export type SideType = 'front' | 'back';

export interface Layer {
  id: string;
  name: string;
  type: LayerType;
  content: string;
  side: SideType;
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right';
  letterSpacing?: number;
  fontSize?: number;
  visible: boolean;
}

export interface ProductConfig {
  style: string;
  color: string;
  basePrice: number;
}

export const FABRIC_COLORS = [
  { id: 'white', value: '#FFFFFF', name: 'White' },
  { id: 'black', value: '#111827', name: 'Black' },
  { id: 'blue', value: '#3b82f6', name: 'Royal Blue' },
  { id: 'red', value: '#ef4444', name: 'Crimson Red' },
  { id: 'green', value: '#10b981', name: 'Emerald' },
  { id: 'yellow', value: '#f59e0b', name: 'Amber' },
];

export const FONTS = ['Inter', 'Playfair Display', 'Roboto Mono', 'Caveat Brush'];

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
  deleteLayer: (id: string) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDownload: () => void;
}

const DesignerContext = createContext<DesignerContextType | undefined>(undefined);

export function DesignerProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState('Upload');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isToolsSheetOpen, setIsToolsSheetOpen] = useState(false);

  const [product, setProduct] = useState<ProductConfig>({
    style: 'Classic Crew',
    color: '#FFFFFF',
    basePrice: 24.99
  });

  const [layers, setLayers] = useState<Layer[]>([
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
      visible: true
    }
  ]);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>('layer-1');
  const [activeSide, setActiveSide] = useState<SideType>('front');

  const activeLayer = layers.find(l => l.id === selectedLayerId);

  const updateLayer = (id: string, updates: Partial<Layer>) => {
    setLayers(layers.map(l => l.id === id ? { ...l, ...updates } : l));
  };

  const addTextLayer = () => {
    const newId = `layer-${Date.now()}`;
    setLayers([...layers, {
      id: newId,
      name: 'New Text',
      type: 'text',
      content: 'NEW TEXT',
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
      visible: true
    }]);
    setSelectedLayerId(newId);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newId = `layer-${Date.now()}`;
      setLayers([...layers, {
        id: newId,
        name: file.name,
        type: 'image',
        content: url,
        side: activeSide,
        x: 25,
        y: 25,
        width: 50,
        height: 50,
        visible: true
      }]);
      setSelectedLayerId(newId);
    }
  };

  const deleteLayer = (id: string) => {
    setLayers(layers.filter(l => l.id !== id));
    if (selectedLayerId === id) setSelectedLayerId(null);
  };

  const handleDownload = async () => {
    import('html2canvas').then(({ default: html2canvas }) => {
      const isMobile = window.innerWidth < 768;
      const element = document.getElementById(isMobile ? 'tshirt-canvas-mobile' : 'tshirt-canvas-desktop');
      if (!element) return;
      
      html2canvas(element, { backgroundColor: null, useCORS: true }).then((canvas) => {
        const link = document.createElement('a');
        link.download = `custom-tshirt-${activeSide}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
  };

  const value = {
    activeTab,
    setActiveTab,
    isSheetOpen,
    setIsSheetOpen,
    isToolsSheetOpen,
    setIsToolsSheetOpen,
    product,
    setProduct,
    layers,
    setLayers,
    selectedLayerId,
    setSelectedLayerId,
    activeSide,
    setActiveSide,
    activeLayer,
    updateLayer,
    addTextLayer,
    deleteLayer,
    handleImageUpload,
    handleDownload
  };

  return (
    <DesignerContext.Provider value={value}>
      {children}
    </DesignerContext.Provider>
  );
}

export function useDesigner() {
  const context = useContext(DesignerContext);
  if (context === undefined) {
    throw new Error('useDesigner must be used within a DesignerProvider');
  }
  return context;
}
