import Image from 'next/image';
import Produtos from '@/components/Produtos/Produtos';

export default function Home() {
  return (
    <main className="mx-auto md:w-4/5 w-full border border-sky-500">
      <div className="">
        <Image
          src="/issets/imageHome/imgMain.png"
          width={1080}
          height={1080}
          className="mx-auto lg:px-5"
          alt="Imagem de exibição"
        />
      </div>

      <Produtos />
    </main>
  );
}
