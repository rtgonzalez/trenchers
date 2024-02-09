import { Children } from 'react';
import styles from 'styles/globals.css';
import { SessionProvider } from 'next-auth/react';
// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Layout, ErrorBoundary, Header } from 'components/index';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    Roboto,
    Bebas_Neue,
    Antonio,
    Montserrat,
    Poppins,
    Lato
} from '@next/font/google';

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

const montserrat = Montserrat({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin']
});

const poppins = Poppins({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin']
});

const lato = Lato({
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
                        --monserrat-font: ${montserrat.style.fontFamily};
                        --poppins-font: ${poppins.style.fontFamily};
                        --lato-font: ${lato.style.fontFamily};
                    }
                `}</style>
                <Header />
                <SessionProvider session={pageProps.session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </Layout>
        </ErrorBoundary>
    );
}
