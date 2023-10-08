// pages/404.js
import Link from 'next/link';
import styles from 'styles/404.module.scss';

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>
        <p>
          Use the search box or the links below to explore our amazing
          application
        </p>
        <input
          type="search"
          className={styles.searchBox}
          placeholder="Search box..."
        />
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Homepage
          </Link>
          <Link href="/" className={styles.link}>
            Contact US
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
