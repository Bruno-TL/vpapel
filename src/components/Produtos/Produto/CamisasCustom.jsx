import { CamisasCustomData } from '@/data/camisasCustomData';
import Image from 'next/image';

export const CamisasCustom = () => {
  const camisasCustom = CamisasCustomData();
  return (
    <>
      {camisasCustom.map((camisa) => (
        <div key={camisa.id} className="bg-indigo-100  border rounded-lg">
          <Image src={camisa.url} width={200} height={200} className="mx-auto" />
          <div className="text-center mt-3">
            <h2 className="font-bold">{camisa.name}</h2>
            <p className="px-1">{camisa.description}</p>
            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg ">R$</span> {camisa.price}
              </p>
              {camisa.minimumOrder && <p>pedido mínimo {camisa.minimumOrder}</p>}
              <p className="text-indigo-900">Tamanhos: {camisa.size}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
