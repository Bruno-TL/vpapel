import Image from 'next/image';
import { Produtos } from '@/components/Produtos/Produtos';

export default function Home() {
  return (
    <main className="mx-auto w-3/4 border border-sky-500">
      <Image src="/issets/imageHome/imgMain.png" width={1320} height={1080} className="mx-auto" />
      <Produtos />
    </main>
  );
}
