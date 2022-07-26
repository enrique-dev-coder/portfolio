import React from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useProvider } from '../context/ContextProvider';
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
  const { dark } = useProvider();
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
          <h2
            className={`${
              dark ? 'text-indigo-200' : 'text-indigo-800'
            } transition duration-300 ease-in-out poppins font-bold text-lg `}
          >
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
                  className={`${
                    dark
                      ? 'text-white hover:border-b-indigo-200'
                      : 'text-black hover:border-b-indigo-800'
                  } text-sm cursor-pointer transition-all hover:border-b   px-2 py-1
                  ${
                    l.link === route.asPath &&
                    'bg-indigo-500 hover:border-none transition duration-300 ease-in-out '
                  }`}
                >
                  {l.title}
                </p>
              </Link>
            );
          })}
          <div className="flex cursor-pointer space-x-2 group">
            <img
              src={dark ? '/img/github_icon.svg' : '/img/github_light_icon.svg'}
              alt="checkout my github"
              className="w-[20px] group-hover:rotate-[20deg] transition-all"
            />
            <p className={`${dark ? 'text-white' : 'text-black'} text-sm`}>
              Github
            </p>
          </div>
        </div>
      </div>
      <ThemeButton />
    </nav>
  );
};

export default Navbar;
