import { BrindesData } from '@/data/brindesData';
import Image from 'next/image';

export const Brindes = () => {
  const brindes = BrindesData();
  return (
    <>
      {brindes.map((brinde) => (
        <div key={brinde.id} className="bg-indigo-100  border rounded-lg">
          <Image src={brinde.url} width={200} height={200} className="mx-auto mt-4 rounded-lg" />
          <div className="text-center mt-3">
            <h2 className="font-bold">{brinde.name}</h2>
            <p>{brinde.description}</p>
            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg ">R$</span> {brinde.price}
              </p>
              {brinde.minimumOrder && <p>pedido mínimo {brinde.minimumOrder}</p>}
              <p className="text-indigo-900">{brinde.set}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
