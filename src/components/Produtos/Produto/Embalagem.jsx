import { EmbalagemData } from '@/data/embalagemData';
import Image from 'next/image';

export const Embalagem = () => {
  const embalagems = EmbalagemData();
  return (
    <>
      {embalagems.map((embalagem) => (
        <div key={embalagem.id} className="bg-indigo-100  border rounded-lg">
          <Image src={embalagem.url} width={200} height={200} className="mx-auto" />
          <div className="text-center mt-3">
            <h2 className="font-bold">{embalagem.name}</h2>
            <p>{embalagem.description}</p>
            <div className="my-2">
              <p className="font-medium text-orange-500">
                <span className="text-lg ">R$</span> {embalagem.price}
              </p>
              {embalagem.minimumOrder && (
                <p className="text-indigo-900">{embalagem.minimumOrder}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
