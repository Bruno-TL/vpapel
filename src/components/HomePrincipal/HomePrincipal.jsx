import Image from 'next/image';
import Produtos from '../Produtos/Produtos';
import ProvaSocial from './ProvaSocial';

export default function Home() {
  return (
    <>
      <div className="mx-auto md:w-4/5 w-full">
        <Image
          src="/issets/imageHome/imgMain.png"
          width={1080}
          height={1080}
          className="mx-auto lg:px-5 my-4"
          alt="Imagem de exibição"
        />
        <Produtos />
      </div>

      <div className="bg-indigo-700 w-full py-5 my-2">
        <Image
          src="/issets/imageHome/VPapellImg2.png"
          width={1315}
          height={417}
          className="mx-auto lg:px-5 "
          alt="Imagem de exibição"
        />
      </div>
      <section className="mx-auto md:w-4/5 w-full">
        <ProvaSocial />
      </section>
    </>
  );
}
