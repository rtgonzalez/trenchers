import { Children } from 'react';
import styles from 'styles/globals.css';
// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Layout, ErrorBoundary } from 'components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Roboto, Bebas_Neue, Antonio } from '@next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});
const bebasNeue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
   subsets: ['latin']
});
const antonio = Antonio({
  weight: ['400'],
  style: ['normal'],
   subsets: ['latin']
});
config.autoAddCss = false;
library.add(fas, fab);

export default function MyApp({ Component, pageProps }) {
  return (
    // Wrap the Component prop with ErrorBoundary component
    <ErrorBoundary>
      <Layout>
        <style jsx global>{`
          :root {
            --roboto-font: ${roboto.style.fontFamily};
            --bebas-neue-font: ${bebasNeue.style.fontFamily};
            --antonio-font: ${antonio.style.fontFamily};
          }
        `}</style>

        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
