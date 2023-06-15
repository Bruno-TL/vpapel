import { ProdutosDigitaisData } from '@/data/produtosDigitaisData';
import Image from 'next/image';

export const ProdutosDigitais = () => {
  const produtosDigitais = ProdutosDigitaisData();
  return (
    <>
      {produtosDigitais.map((produtoDgital) => (
        <div key={produtoDgital.id} className="bg-indigo-100  border rounded-lg">
          <Image src={produtoDgital.url} width={200} height={200} className="mx-auto" />
          <div className="text-center mt-3">
            <h2 className="font-bold">{produtoDgital.name}</h2>
            <p>{produtoDgital.description}</p>
            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg">R$</span> {produtoDgital.price}
              </p>
              {produtoDgital.minimumOrder && (
                <p className="text-indigo-900">Pedido mínimo {produtoDgital.minimumOrder}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
