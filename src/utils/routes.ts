// Utility to encode strings for obfuscated routing
export const encodePath = (path: string) => {
  // btoa encodes to base64. We replace = to make it slightly cleaner,
  // though standard base64 often has = padding.
  return btoa(path).replace(/=/g, '');
};

// Application Route Constants
export const PATHS = {
  HOME: '/',
  SHOP: `/${encodePath('shop')}`,
  DESIGNER: `/${encodePath('designer')}`,
  CART: `/${encodePath('cart')}`,
  DASHBOARD: `/${encodePath('dashboard')}`,
  PRODUCT: `/${encodePath('product')}`,
  SIGNUP: `/${encodePath('signup')}`,
  LOGIN: `/${encodePath('login')}`,
  FAVORITES: `/${encodePath('favorites')}`,
};

// Helper to generate dynamic product links
export const getProductLink = (id: string | number) => {
  return `${PATHS.PRODUCT}/${encodePath(String(id))}`;
};