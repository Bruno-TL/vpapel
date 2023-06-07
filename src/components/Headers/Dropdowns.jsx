'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Dropdowns = () => {
  const [brindes, setBrindes] = useState(false);
  const [person, setPerson] = useState(false);
  const [papelaria, setPapelaria] = useState(false);
  const [menu, setMenu] = useState(false);

  const show = () => {};

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-base inline-flex w-40 justify-evenly gap-x-1.5 rounded-full bg-white px-3 py-1  font-bold text-indigo-900 shadow-sm ring-1 ring-inset ring-gray-300 border border-white hover:bg-indigo-600 hover:text-white"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setMenu(!menu)}
        >
          Produtos
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

      {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div
        className={
          menu
            ? ' absolute right-0 left-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-sky-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
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
              brindes
                ? 'bg-indigo-700 text-white px-4 py-2 text-sm flex'
                : 'text-gray-900 px-4 py-2 text-sm flex'
            } hover:bg-indigo-700 hover:text-white`}
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
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            Brindes
          </Link>
          <Link
            href="#"
            className={`${
              person
                ? 'bg-indigo-700 text-white px-4 py-2 text-sm flex'
                : 'text-gray-900 px-4 py-2 text-sm flex'
            } hover:bg-indigo-700 hover:text-white`}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
            onClick={() => setPerson(!person)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
            Personalizados
          </Link>
          <Link
            href="#"
            className={`${
              papelaria
                ? 'bg-indigo-700 text-white px-4 py-2 text-sm flex'
                : 'text-gray-900 px-4 py-2 text-sm flex'
            } hover:bg-indigo-700 hover:text-white`}
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
            onClick={() => setPapelaria(!papelaria)}
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
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
              />
            </svg>
            Papelaria
          </Link>
        </div>
      </div>
    </div>
  );
};
