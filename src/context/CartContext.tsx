import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
  id: string; // unique id for cart item, usually product.id + size + color
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string, color: string, quantity: number) => {
    setCartItems((prev) => {
      const existingItemId = `${product.id}-${size}-${color}`;
      const existingItem = prev.find((item) => item.id === existingItemId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === existingItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: existingItemId, product, size, color, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
