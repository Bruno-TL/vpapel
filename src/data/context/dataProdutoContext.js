'use client';
import { createContext } from 'react';
import { ProdutosData } from '../produtos';

const produtos = ProdutosData();
export const DataProdutosContext = createContext();

export function DataContextProvider({ children }) {
  return <DataProdutosContext.Provider value={produtos}>{children}</DataProdutosContext.Provider>;
}
