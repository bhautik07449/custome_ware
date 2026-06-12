export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  colors: string[]; // tailwind classes or hex for the swatches
  badge?: string; // e.g. "New Arrival", "Sale"
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Signature Heavyweight Tee',
    price: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE_0piTBxzbr5QpiAgExOrW8k2-nYDcyMcIXUeiWgjexYN8Sr56WzO2EbZz4W8REiNT-aT8i3jtEat4BczNhTyeP98YpjxeaD72jOGwhYlkYnwHwGfaeIeIeWLmCcfuXnQAHwgJuWMRKZ9lv-ozJYFfNViTe4lNaiZk2Mzqgn5mz4YEvVglAgO_45UxShgqNa5VgvduJPI1yQ0M5wAEVXJK_L0yaq8UeztZU488mxxWRP1Q5pKlhLVXZBKq4C0dHpUqRZpLy-QC1g',
    rating: 4,
    reviews: 124,
    colors: ['bg-on-surface', 'bg-surface-container-high', 'bg-red-700'],
    badge: 'New Arrival'
  },
  {
    id: '2',
    name: 'Organic Essential Tee',
    price: 38.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBInDBHLShrBu7wNWxJfZhk3LDr7vBSi6obfGbLl8-fxgtvoYyz50_YAf4WG2seh3fnuK2VpXqtQANS-4IEimaQSWv3JL6LFTX29V_7zqwXwNs8wqHWvZcjWfaMP0YtAafpPVXzCPc_Ciel-zg9vjcQeQuNAXNdAMwSeGRiFB5DD0C1ce_ACnRjGUGYmmfrI964S8g6Oq3ebPWKVlV3gOj0NTj9pEdsXPx4Mka61mnI0fT0u223YnjTU52A66WTiancL7kUkb9esSk',
    rating: 5,
    reviews: 89,
    colors: ['bg-white', 'bg-blue-100', 'bg-secondary-fixed']
  },
  {
    id: '3',
    name: 'Active Performance Tee',
    price: 32.00,
    originalPrice: 55.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4pxSan1xqCsw_1iRw4M_esVHrNOL44xGcUXK0m24ns3TmwoDfHgr86ovKEAJ6cSQAIXVst_7gS5rXPo7S6x7QCAyXEd-L4efz6rb356ggu8ooRNsswRbpp6CAlbi-1F2ZHaOg8-rRJSjCBuSIkSCnJ0rJyFiqNjbDADDGtFPD685ET59y3Cbht4RJ8zupHQLsywnnY-JzQaIcP-wUUAq7E4mgJzM8y2sQI6-C2QtA_WWQF8_46GGrxldEP2BsVYvC7STqkSDWzgE',
    rating: 4.5,
    reviews: 215,
    colors: ['bg-on-surface-variant', 'bg-blue-900'],
    badge: 'Sale'
  },
  {
    id: '4',
    name: 'Pastel Collection Tee',
    price: 42.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbhcRkHq3muDvWiLbZgbvjFiUoQ4AwvzA06EX9b3awK3nZKGfpWwOs6DIz989T7XKDfrvVhxN5-kZV4aXC9oAEjFSOPwWNCu8CY6D9Kfur-JPvBFPeeAUwaZOfZyfAawaSkFOJVuYnuMQzl9M1JMOI30N1iPlgU2NrriZqVW_KsRti6YAmzbZE7X9P0rHNXnFVDnbDYSp2R3qTAI5N0vM-MJCahL44QTSzWk1vh9ZMoGq6E7XYbVnxhzxwnH3ZrR3ZaxMMloEmV2Y',
    rating: 4,
    reviews: 56,
    colors: ['bg-pink-100', 'bg-green-100', 'bg-purple-100']
  },
  {
    id: '5',
    name: 'Urban Heavy Tee',
    price: 52.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxvYqsJgyw0xiq3LbN3k2pboL3_LeYRPT2gjTWDw1H1-AyJnFutBiXSp4mzVcx7RIyJvHe23XDL7DsuY_ZE9FPo7Fm2PetACGkOpdS5Z0kNhwyc-WO1yQYjHqfU-SBL5DOxasr6ih9woE_Dfxp9wdA4fYL7ZnyonVzv4m79GhJ75Fck2ZGvvDCkrSA6TIj-nBXMtKpdp8f59UVlLbeTRdpFwNGE8qT8HmBXHVWUoICxRQFLN1bbWooVgiYO93sBUTiaf59sWS1NMM',
    rating: 5,
    reviews: 41,
    colors: ['bg-blue-950']
  },
  {
    id: '6',
    name: 'Vintage Oversized Tee',
    price: 48.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxqZq2VLEJ1pUHkk_flkXXaTPJRSeiQIT3rqgXiK8wwZBl3UjxsfxL2NJhFlP2UboYrV1lwuc1pVLLnqBhNXaCgR0Sl4bzgLdKGpN-yYnGFdqwPY78AGKvWeZRLV-bfEcqeGMJhRDhMkBvR8xoQzwbzFfaPcSgIt-o1gcIE0qKXzfQX5aclL37UIaWEPV84dMGJdg_LJz4O6bVLhuv118-c5cXm3aitO8V1BfC4wVptvjKL9DvjRph6wUa8vs5Gb39e0etkef4qKw',
    rating: 4,
    reviews: 112,
    colors: ['bg-emerald-100', 'bg-stone-300']
  }
];

export interface CartItemType {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
  isCustom?: boolean;
}

export const CART_ITEMS: CartItemType[] = [
  {
    id: '1',
    name: 'Essential Heavyweight Tee',
    size: 'L',
    color: 'Off-White',
    price: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_rv9aovCvCX1U8io62k2ZU3vSVqmyKEMz4zOouy_8A1F84W0pEziS6tlp_baKa-0hu2r61PW5ClGjxYm3UUvxtQI-q1r803nFqnlqiNdL7h6Hq8nrUpTOPkwr3vEEhE4WrYHA-X14RjPoEvKdubg4UP7YHRTM4OSpaVfqjbcaEcSn66Od2lc1XDEKiHFxw07gGcDbnOLkk7nUafao-v13vKf1CHnBZpH3Q8CeQcnwsLI8kYp2UA2CjgXtoX1I21OsjQnSI0thIoA',
    quantity: 1,
    isCustom: true
  },
  {
    id: '2',
    name: 'Premium Oversized Hoodie',
    size: 'XL',
    color: 'Midnight Gray',
    price: 85.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEEfAt-1yMMJmItCPKgan8hjGieOZL_-1YT4IOBs3LZSseJxDQ1DXq4BuDaqFw9NwjC5cWW7xobFMDsGJK8Z4MwNR_y0VqxeBT6YmODg_HCsli6tj6fieOLDHQD4jMJ3Nz6uzcRtWMniHnRooKJ322fd5GuuzHstF_smvcPhy6HtAj2Lri81sPO3Zthm4fQMEC0co46DigN5kUBLhLISbA0dJspwzq1eBkbp7VTCLyG8rLX9POR2iaeb9P-b_ZiY5-P1YAeee9pG8',
    quantity: 1,
    isCustom: true
  }
];

export interface UpsellItemType {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const UPSELL_ITEMS: UpsellItemType[] = [
  {
    id: '1',
    name: 'Organic Socks',
    price: 12.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8BiDPg4BD1WKcsaacSE2guM23wepfsNnCOYBaBqFtDx5UQHjaneWZk8MicLDP2XN-vRK1HSaJDQeRvuLUYV6IOIznUrnPViMDeAUPFTizOxV8npQi9lhg8em6xMMsTTp99RncSnBrfPACVLEHhEOfa1Itrx4dEzsa3oma5qPmEVXtjVROEHfOTW9KEPaZrVbgVVA2b7Bt5-A9FFwESSjdl2u3lvcS-iIsoMb_msdV_G25RO0oaKVfI6Sxr0IaH13di9i7mYItdM8'
  },
  {
    id: '2',
    name: '6-Panel Cap',
    price: 28.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9Mf-WdvkJBSzmp4WBw-Z0XKhmDyFEFkBstH3TuDCwWvsyEtMWALufi4B8Sr0-6qEFrTSSgAXntnrg-M-L7IG3yum5pFnl9rmKUgXDP7t4z0nsMi-loaBTBnaLQu_yAhjijaW161eAY_YmweTSCobyd5R3QlTjoaRJXfMuOdR2GLF9GhRvgP044uL_FBDdp2UX9ACjtNR-jl-6vcjaQFAYN0jCycWXNG4axsoQvhy9JI5q0xGK2EnmQzHgyMh6L2pE4vfzejjOS8'
  }
];

export interface OrderType {
  id: string;
  orderNumber: string;
  date: string;
  status: 'Shipped' | 'Delivered' | 'In Transit';
  total: number;
  image: string;
  name: string;
  details: string;
}

export const ORDERS: OrderType[] = [
  {
    id: '1',
    orderNumber: '#CW-92831',
    date: 'Oct 24, 2023',
    status: 'Shipped',
    total: 42.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFmqxhcDBFklQNBQ_CwRv10M-iJnpRMnRLcUqxxfXDjrHbTDuiwuI39_hS1ZmaOvK12QaFn9yp1PjlF2lBAF7I76phsdy3a-wFyTu5fR8MgKyNJEHsKX1Ar5cOMWYrwRqAL2QhswX8Er1AGVW7aOfl1Icwuger16WAxt2rD_q2rEbiYDJoMxgxt_B2Qlppw9gXZNF94f2izj9tr6xXiQEcPNiU0Tv0WrQ0_NXzTzCj4tIRXkGE14jazMnM21U7ZRPqbVcBFKve0Y8',
    name: 'Abstract Geometry Tee',
    details: 'Size L • Custom Navy'
  },
  {
    id: '2',
    orderNumber: '#CW-92804',
    date: 'Oct 12, 2023',
    status: 'Delivered',
    total: 38.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO6QBkIcxd5vIV-it495Mu4fMeEKdCClusR-wK12AdpTIvNgU-qMxNbu-rmAK2u9BDzAk7RrFz1D-3ZdAFGjlzjheiSsR3oJwMg-vBololLlMxfcWM8sVOdVIhAs7JHetRKrke6P7tmA3CSe1ZZv0ChBH4vZHPCvr0VoM2ZjXzw3EBV1mqXOhufVEV-_5javvCebsQssyoPc5ZtUjIa_GHmMSKF0O1CHarJQsnKlw9tDDWBo1uQ6KLHB7siRxRv59t58uZZv31ZLE',
    name: 'Minimalist Studio Crew',
    details: 'Size M • Stealth Black'
  }
];

export interface SavedDesignType {
  id: string;
  name: string;
  lastEdited: string;
  image: string;
}

export const SAVED_DESIGNS: SavedDesignType[] = [
  {
    id: '1',
    name: 'Minimalist Peak',
    lastEdited: 'Edited 2 days ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk_567VbS9O15Eg-1p7vMBLO4hQ028hsF5fp9CMM0vsCPGg84Ag_1BCb4msU0fUNK_PDgsHGZui_SbrrWo5Zk2zAm1NqDvx-vVbiakSCkpv29JtuhqqanlBvsj7ecRjrbY62L1zLo2KB-Pa193TEb_irJO--mKVOb4QL8V-5AW4v9JcuBNzv-Z-HeQuEt6LzeoJuUHXAqTpiKQZNb6kEqV49xfk_PMLseQtxb-HMMxA-7HDpwpy-FIIB3LBStv6-ZoIqfucxK55Wo'
  },
  {
    id: '2',
    name: 'Neon Pulse',
    lastEdited: 'Edited 1 week ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjxL63nLSlASU7Q_k5kl4-dP0RwLEnC9CYKyYVN-dOLRsAvf8qFW2WMxL0Gm-vcZEYmB5htS5v9mrVuDT90KujTGTi0c_JGkPr-U5941-6VZ-bYSiUFWXIi4WAcWp8ULkWelGNCai80tNNbCnGcBfVASyifnEGOCA4jN7xPrWQR0osFT2DZmds0GAVxysV6QYwAfuBcyCepTzaEyx_pVOIQqLTXDqIDM_-a6I7Gy-Q3umrCHDhAZB_mKYU8XBYTOa1nR4mmlUljYo'
  },
  {
    id: '3',
    name: 'Forest Emblem',
    lastEdited: 'Edited 2 weeks ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYeKv6h-GvrUwAuA1K_4Vew6EStbky1eukSI3q05nCph5Zw31zWshJBSathGlSup2U-SowzeA1aETM7kVMbE8N5tromnLCaHuG6rSNjQtJ-6Yn9sF4_K5m9UxyJjNE6LfXKfwY4pvoCNE8CKLBRURuSTEYOLrzvyTz06JTC0Vu7C8puO0h9cUFcPhA_IIzTLsV19dqPpSGrxt1GCzUGnp6alihdzRRkI368prmk7gNDykrvPpp1qI8J52u_5GnUOEdU3ykkE2jb0Q'
  },
  {
    id: '4',
    name: 'Digital Dusk',
    lastEdited: 'Edited 1 month ago',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG40XCoolQBCkfwGTD67tDu6SrssVHpnD7rmTnVYpORS0u5d96ql6A5SxRqzzd_-psx-E7oe9NLOZbFYkLE1CQAE0RFe4fqGBqKP_9hPJOgwaDME6S4M_JjZTOEJyYdgnET08CJaBhaD58x-C6mksmzyTQbMtbloB8EEvZFNyBrnwm03zBs7_Oy4QO_t6olNrwMSN8UesJnrEoWIibxdetNZqI2_UKM-s2KslWwtstQc9nt15tyBzZW4ySkv2-y_57rLy0augBIzc'
  }
];
