import '../styles/globals.css';
import Layout from '../components/layouts/Main';
import { ContextProvider } from '../context/ContextProvider';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
