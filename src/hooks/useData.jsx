'use client';
import { DataProdutosContext } from '@/data/context/dataProdutoContext';
import { useContext } from 'react';

export function useData() {
  return useContext(DataProdutosContext);
}
