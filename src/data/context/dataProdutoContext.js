'use client';
import { createContext } from 'react';
import { EmbalagemData } from '@/data/embalagemData';

const embalagems = EmbalagemData();
export const DataProdutosContext = createContext();

export function DataContextProvider({ children }) {
  return <DataProdutosContext.Provider value={embalagems}>{children}</DataProdutosContext.Provider>;
}
