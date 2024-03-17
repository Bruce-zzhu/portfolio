'use client';

import React, { useState } from 'react';
import { styles } from '@/styles/styles';
import Link from 'next/link';
import { logo, menu, close } from '@/assets';
import Image from 'next/image';
import { navLinks } from '@/constants';

export const Header = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 w-fit"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className={`hover:text-white text-[16px] font-medium cursor-pointer 
                  ${active === link.id ? 'text-white' : 'text-secondary'}`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? menu : close}
            alt="Menu"
            className="w-[26px] h-[26px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    className={`font-poppins  text-[14px] font-medium cursor-pointer 
                      ${active === link.id ? 'text-white' : 'text-secondary'}`}
                    onClick={() => {
                      setActive(link.id);
                      setToggle(!toggle);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
