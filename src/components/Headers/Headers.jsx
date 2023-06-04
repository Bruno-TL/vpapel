import Image from 'next/image';
import { Search } from './Search';
import { Dorpdowns } from './Dropdowns';
import Link from 'next/link';
import styles from '@/styles/headers.module.css';

export const Headers = () => {
  return (
    <header className="flex flex-col w-full">
      <section className="flex w-full bg-sky-100 text-purple-950 items-center ">
        <div className="ml-20 pl-2 w-66 font-bold italic">
          <p>Contato: (85) 9 92399-9504</p>
        </div>
        <div className={styles.numero}>
          <p>PROMOÇÃO NOS PERSONALIZADOS</p>
        </div>
      </section>
      <section className="flex justify-around bg-indigo-700 text-white py-1.5 items-center">
        <div className="flex justify-between w-1/2 border border-white items-center">
          <Image
            src="/issets/imageHeaders/logoWhiteSemfundo.png"
            width={100}
            height={100}
            alt="Logo VPapel"
          />
          <Search />
        </div>

        <div>
          <nav>
            <Dorpdowns />
          </nav>
        </div>
        <div className="flex items-center justify-between  w-20">
          <Image src="/issets/imageHeaders/instagram.png" width={35} height={35} />
          <Link href="#">
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
          <Link href="#">rastreiar pedido</Link>
        </div>
      </section>
    </header>
  );
};
