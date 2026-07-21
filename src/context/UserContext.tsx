import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem } from './CartContext';

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  isDefault?: boolean;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'PROCESSING' | 'SHIPPED' | 'DELIVERED';
  total: number;
  items: CartItem[];
  shippingAddress: Address;
}

interface UserContextType {
  profile: UserProfile;
  updateProfile: (profile: UserProfile) => void;
  addresses: Address[];
  addAddress: (address: Address) => void;
  orders: Order[];
  placeOrder: (items: CartItem[], total: number, shippingAddress: Address) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  });

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 'addr-1',
      firstName: 'John',
      lastName: 'Doe',
      line1: '123 Architecture Blvd',
      line2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      isDefault: true,
    },
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'KRZ-827361',
      date: 'Oct 15, 2024',
      status: 'DELIVERED',
      total: 395.00,
      items: [],
      shippingAddress: addresses[0],
    },
    {
      id: 'KRZ-492817',
      date: 'Nov 02, 2024',
      status: 'PROCESSING',
      total: 185.00,
      items: [],
      shippingAddress: addresses[0],
    },
  ]);

  const updateProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
  };

  const addAddress = (address: Address) => {
    setAddresses((prev) => [...prev, address]);
  };

  const placeOrder = (items: CartItem[], total: number, shippingAddress: Address) => {
    const newOrder: Order = {
      id: `KRZ-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'PROCESSING',
      total,
      items,
      shippingAddress,
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        updateProfile,
        addresses,
        addAddress,
        orders,
        placeOrder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
