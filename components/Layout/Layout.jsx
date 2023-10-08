import React from 'react';
import { Navbar, Footer } from 'components/index';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles['layout-wrapper']}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
