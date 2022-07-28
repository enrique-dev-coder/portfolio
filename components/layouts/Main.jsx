import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HeaderPages from '../HeaderPages';
import { useProvider } from '../../context/ContextProvider';
const Main = ({ children }) => {
  const { dark } = useProvider();
  return (
    <div
      className={`w-full h-full ${
        dark ? 'bg-slate-900 ' : 'bg-slate-50'
      } transition-all`}
    >
      <div className="w-4/5 max-w-[900px] mx-auto">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Takuya's homepage" />
          <meta name="author" content="Takuya Matsuyama" />
          <meta name="author" content="craftzdog" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="twitter:title" content="Takuya Matsuyama" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@craftzdog" />
          <meta name="twitter:creator" content="@craftzdog" />
          <meta
            name="twitter:image"
            content="https://www.craftz.dog/card.png"
          />
          <meta property="og:site_name" content="Takuya Matsuyama" />
          <meta name="og:title" content="Takuya Matsuyama" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.craftz.dog/card.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <title>Takuya Matsuyama - Homepage</title>
        </Head>
        <Navbar />
        <HeaderPages />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
