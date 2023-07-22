'use client';
import { useData } from '@/hooks/useData';
import Image from 'next/image';
import Link from 'next/link';

export const Produto = () => {
  const produtos = useData();
  return (
    <>
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="bg-indigo-100  border rounded-lg hover:border-indigo-700 hover:border-2"
        >
          <Image src={produto.url} width={200} height={200} className="mx-auto mt-4 rounded-lg" />
          <div className="text-center mt-3 md:h-72 px-1">
            <h2 className="font-bold">{produto.name}</h2>
            {produto.description && <p className="mb-1">{produto.description}</p>}
            {produto.description1 && <p>{produto.description1}</p>}
            {produto.description2 && <p>{produto.description2}</p>}

            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg ">R$</span> {produto.price}
              </p>
              {produto.minimumOrder && <p>pedido mínimo {produto.minimumOrder}</p>}
              {produto.size && <p className="text-indigo-900">Tamanhos: {produto.size}</p>}
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href={produto.linkProduct}
              className="font-bold flex items-center mb-4 border-2 rounded-xl p-2 border-indigo-700 hover:scale-105 hover:bg-white"
            >
              Fazer pedido no
              <Image src="/issets/imageHome/WhatsApp.png" width={30} height={100} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
