import { CanecasData } from '@/data/canecasData';
import Image from 'next/image';

export const Canecas = () => {
  const canecas = CanecasData();
  return (
    <>
      {canecas.map((caneca) => (
        <div key={caneca.id} className="bg-indigo-100  border rounded-lg">
          <Image src={caneca.url} width={200} height={200} className="mx-auto" />
          <div className="text-center mt-3">
            <h2 className="font-bold">{caneca.name}</h2>
            <p>{caneca.description}</p>

            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg">R$</span> {caneca.price}
              </p>
              {caneca.minimumOrder && (
                <p className="text-indigo-900">pedido mínimo {caneca.minimumOrder}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
