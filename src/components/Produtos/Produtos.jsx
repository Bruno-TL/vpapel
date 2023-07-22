'use client';
import { Adesivos } from './Produto/Adesivos';
import { Brindes } from './Produto/Brindes';
import { Papelaria } from './Produto/Papelaria';
import { Embalagem } from './Produto/Embalagem';
import { ProdutosDigitais } from './Produto/ProdutosDigitais';
import { useData } from '@/hooks/useData';

export default function Produtos() {
  const test = useData();
  console.log(test);
  return (
    <section className="bg-white border rounded-md pb-10">
      <div className="my-6 pl-5">
        <h1 className="text-2xl">Produtos populares</h1>
      </div>
      <section className="mx-5">
        <div className="w-full grid gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2">
          <Brindes />
          <Papelaria />
          <Embalagem />
        </div>
      </section>
    </section>
  );
}
