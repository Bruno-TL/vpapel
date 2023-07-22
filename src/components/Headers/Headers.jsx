import Image from 'next/image';
import { Search } from './Search';
import { Dropdowns } from './Dropdowns';
import Link from 'next/link';
import styles from '@/styles/headers.module.css';
import CarrinhoHeader from './CarrinhoHeader';
import RastrearPedido from './RastrearPedido';

export const Headers = () => {
  return (
    <header className="flex flex-col w-full topo">
      <section className=" w-full sm:flex justify-center bg-slate-100 hidden ">
        <div className="flex items-center w-4/5 ">
          <div className="flex  pl-2 text-sm sm:w-66 font-bold italic  text-black ">
            <p className="mr-4">Contato: (85) 9 92399-9504</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div className={styles.promo}>
            <p>PROMOÇÃO NOS PERSONALIZADOS</p>
          </div>
        </div>
      </section>
      <section className="bg-indigo-700 text-white py-2">
        <div className="flex justify-center items-center w-full mx-2.5">
          <Link href="/">
            <Image
              src="/issets/imageHeaders/logoWhiteSemfundo.png"
              width={100}
              height={100}
              alt="Logo VPapel"
              className="mr-10 h-11 w-20 lg:h-16 lg:w-24"
            />
          </Link>
        </div>
      </section>
    </header>
  );
};
