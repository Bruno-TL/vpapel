'use client';

import Link from 'next/link';
import { useState } from 'react';
import RastrearPedido from './RastrearPedido';

export const Dropdowns = () => {
  const [brindes, setBrindes] = useState(false);
  const [person, setPerson] = useState(false);
  const [papelaria, setPapelaria] = useState(false);
  const [menu, setMenu] = useState(false);

  const show = () => {};

  return (
    <nav>
      <div className="relative inline-block text-left">
        <div className="">
          <button
            type="button"
            className="text-base inline-flex justify-evenly gap-x-1.5 rounded-full bg-white px-3 py-1  font-bold text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 border border-white hover:bg-indigo-600 hover:text-white"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setMenu(!menu)}
          >
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
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={
          menu
            ? ' absolute sm:left-2/3 lg:left-3/4 left-2/4 right-1 sm:w-48 w-44 z-10 mt-2  origin-top-right rounded-md bg-sky-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            : 'hidden'
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          {/* <!-- brindes: "bg-gray-100 text-gray-900", Not brindes: "text-gray-700" --> */}
          <Link
            href="#"
            className={`${
              brindes ? 'bg-indigo-700 text-white ' : 'text-gray-900 '
            } hover:bg-indigo-700 hover:text-white font-semibold px-4 py-2 text-sm flex`}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
            onClick={() => setBrindes(!brindes)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
            Produtos
          </Link>
          <div className="w-full sm:hidden block">
            <RastrearPedido />
          </div>
        </div>
      </div>
    </nav>
  );
};
