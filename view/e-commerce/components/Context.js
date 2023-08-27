import { createContext } from 'react';

// Provide a suitable initial value for your context
const initialContextValue = {
  data: [],
  setData: () => {},
  product: [],
  setProduct: () => {},
  quantity: 1, // Or whatever initial value you want
  setQuantity: () => {},
};

export const AppContext = createContext(initialContextValue);
