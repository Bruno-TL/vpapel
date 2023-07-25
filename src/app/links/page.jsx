import styles from '@/styles/links.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Links() {
  return (
    <main className="m-0">
      <section className={`${styles.fundo} flex flex-col justify-center items-center`}>
        <section className="sm:w-2/4 flex flex-col items-center mb-8">
          <div className=" mb-2 border-2 rounded-full border-white w-40 h-40 flex items-center justify-center  shadow-2xl shadow-cyan-500/100">
            <Image
              src="/issets/imageHeaders/logoWhiteSemFundo.png"
              width={130}
              height={100}
              alt="Logo VPapel"
            />
          </div>
          <h1 className="font-extrabold text-white my-6 text-center">
            VPapell - Imprimindo qualidade, inspirando ideias.
          </h1>
          <p className="text-xs sm:w-2/3 text-gray-400 text-center">
            TODOS OS PRODUTOS DA LOJA SÃO FEITOS SOB ENCOMENDA.
          </p>
        </section>
        <section className="flex flex-col items-center mb-8">
          <div className="rounded-xl h-12 sm:w-96 w-80 flex justify-around items-center bg-orange-500 text-white mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <Link href="#" prefetch={false} className="font-bold text-xl w-2/3 text-center">
              Site VPapell
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <div className="rounded-xl h-12 sm:w-96 w-80 flex justify-around items-center bg-orange-500 text-white mb-4">
            <Image src="/issets/imageHeaders/instagram.png" width={35} height={100} />

            <Link href="#" prefetch={false} className="font-bold text-xl w-2/3 text-center">
              instagram
            </Link>

            <Image src="/issets/imageHeaders/instagram.png" width={35} height={100} />
          </div>
          <div className="rounded-xl h-12 sm:w-96 w-80 flex justify-around items-center bg-orange-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>

            <Link
              href="https://wa.me/c/558581605010"
              prefetch={false}
              className="font-bold text-xl w-2/3 text-center"
            >
              WhatsApp
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>
          </div>
        </section>
        <section>
          <h5 className="text-gray-700">
            created by <span className="text-slate-400">Grace</span>
          </h5>
        </section>
      </section>
    </main>
  );
}
