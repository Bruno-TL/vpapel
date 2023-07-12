import { AdesivoData } from '@/data/adesivosData';
import Image from 'next/image';

export const Adesivos = () => {
  const adesivos = AdesivoData();
  return (
    <>
      {adesivos.map((adesivo) => (
        <div key={adesivo.id} className="bg-indigo-100  border rounded-lg">
          <Image src={adesivo.url} width={200} height={200} className="mx-auto mt-4 rounded-lg" />
          <div className="text-center mt-3">
            <h2 className="font-bold">{adesivo.name}</h2>
            <p>{adesivo.description}</p>
            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg">R$</span> {adesivo.price}
              </p>
              {adesivo.minimumOrder && (
                <p className="text-indigo-900">Pedido mínimo {adesivo.minimumOrder}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
