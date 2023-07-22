import Link from 'next/link';
import RastrearPedido from '../Headers/RastrearPedido';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className="lg:w-1/2 md:w-4/5 w-full px-5 md:mx-auto mb-2">
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
          <div className="animate-bounce">
            <RastrearPedido />
          </div>

          <div className="mt-10 w-36 py-2  border rounded-lg border-indigo-950 hover:bg-indigo-800 hover:text-white transition duration-700 ease-in-out md:bg-white text-center flex justify-center items-center bg-sky-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
            <Link href="#topo" className="text-sm ">
              Voltar ao topo
            </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex items-center">
          <h3 className="mr-2 opacity-50">created by</h3>

          <h2>Grace</h2>
        </div>
      </section>
    </section>
  );
}
