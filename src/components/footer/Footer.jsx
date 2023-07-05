import Link from 'next/link';
import RastrearPedido from '../Headers/RastrearPedido';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className="w-1/2 mx-auto mb-2">
      <section className="flex justify-between my-8">
        <div className="flex flex-col justify-center items-center ">
          <Link href="/">
            <Image
              src="/issets/imageHeaders/logopretoSemfundo.png"
              width={150}
              height={150}
              alt="Logo VPapel"
              className=""
            />
          </Link>
          <p>Caucaia | CE</p>
          <Link href="https://www.instagram.com/vpapelll/">
            <Image
              src="/issets/imageHeaders/instagramPreto.png"
              width={50}
              height={100}
              alt="Logo instagram"
            />
          </Link>
        </div>
        <div className="pr-5 flex flex-col items-center">
          <RastrearPedido />
          <div className="mt-10 w-24 h-24 border rounded-full bg-white text-center flex justify-center items-center flex-col">
            <Link href="/">Voltar ao topo</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex items-center">
          <h3 className="mr-2 opacity-50">created by</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
          <h2>Grace</h2>
        </div>
      </section>
    </section>
  );
}
