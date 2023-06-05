import Image from 'next/image';
import { Search } from './Search';
import { Dropdowns } from './Dropdowns';
import Link from 'next/link';
import styles from '@/styles/headers.module.css';

export const Headers = () => {
  return (
    <header className="flex flex-col w-full">
      <section className="flex w-full bg-slate-100  items-center ">
        <div className="flex ml-20 pl-2 w-66 font-bold italic  text-black">
          <p className="mr-4">Contato: (85) 9 92399-9504</p>
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </div>
        <div className={styles.numero}>
          <p>PROMOÇÃO NOS PERSONALIZADOS</p>
        </div>
      </section>
      <section className="flex justify-around bg-indigo-700 text-white py-1.5 items-center">
        <div className="flex justify-between w-1/2 items-center">
          <Link href="/">
            <Image
              src="/issets/imageHeaders/logoWhiteSemfundo.png"
              width={100}
              height={100}
              alt="Logo VPapel"
            />
          </Link>
          <Search />
        </div>

        <div>
          <nav>
            <Dropdowns />
          </nav>
        </div>
        <div className="flex items-center justify-between  w-64 ">
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
          <Link
            href="#"
            className="flex px-1 border w-42  items-center rounded-md text-indigo-700 bg-white font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            Rastrear pedido
          </Link>
          <Link href="https://www.instagram.com/vpapelll/">
            <Image src="/issets/imageHeaders/instagram.png" width={35} height={35} />
          </Link>
        </div>
      </section>
    </header>
  );
};
