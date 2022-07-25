import React from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Links = [
  {
    id: 1,
    title: 'Works',
    link: '/works',
  },
  {
    id: 2,
    title: 'Contact',
    link: '/contact',
  },
];

const Navbar = ({ router }) => {
  const route = useRouter();
  return (
    <nav
      className="flex items-center justify-between py-4
     "
    >
      <Link href={'/'}>
        <div className="flex items-center cursor-pointer group">
          <img
            src="/img/logo_darkTheme.png"
            alt="portfolio logo "
            className="w-[45px] group-hover:rotate-[20deg] transition-all"
          />
          <h2 className="text-indigo-200 poppins font-bold text-lg">
            EnriqueAlvarado
          </h2>
        </div>
      </Link>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-6">
          {Links.map((l) => {
            return (
              <Link key={l.id} href={l.link}>
                <p
                  className={`text-white text-sm cursor-pointer transition-all hover:border-b border-b-indigo-200  px-2 py-1
                  ${
                    l.link === route.asPath &&
                    'bg-indigo-500 hover:border-none transition-all'
                  }`}
                >
                  {l.title}
                </p>
              </Link>
            );
          })}
          <div className="flex cursor-pointer space-x-2 group">
            <img
              src="/img/github_icon.svg"
              alt="checkout my github"
              className="w-[20px] group-hover:rotate-[20deg] transition-all"
            />
            <p className="text-white text-sm">Github</p>
          </div>
        </div>
      </div>
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
