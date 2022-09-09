import Head from 'next/head';
import styles from './properties.module.css';
const properties = () => {
  return (
    <>
      <Head>
        <title>BJF Properties | Properties</title>

        <meta name="keywords" content="BJF Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.propBanner}>
        <p className={styles.bannersubH}> Explore Our Properties </p>
      </div>
    </>
  );
};

export default properties;
