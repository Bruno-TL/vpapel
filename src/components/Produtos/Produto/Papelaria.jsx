import { PapelariaData } from '@/data/papelariaData';
import Image from 'next/image';

export const Papelaria = () => {
  const papelarias = PapelariaData();
  return (
    <>
      {papelarias.map((papelaria) => (
        <div key={papelaria.id} className="bg-indigo-100  border rounded-lg">
          <Image src={papelaria.url} width={200} height={200} className="mx-auto mt-4 rounded-lg" />
          <div className="text-center mt-3">
            <h2 className="font-bold">{papelaria.name}</h2>
            <p>{papelaria.description}</p>
            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg ">R$</span> {papelaria.price}
              </p>
              {papelaria.minimumOrder && <p>pedido mínimo {papelaria.minimumOrder}</p>}
              {papelaria.size && <p className="text-indigo-900">Tamanhos: {papelaria.size}</p>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
