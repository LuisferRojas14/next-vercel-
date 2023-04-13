import Head from 'next/head';
import styles from './HomeLayout.module.css';
import { Navbar } from '../Navbar';
import { FC, ReactNode } from 'react';

type MaintLayoutProps = {
  children: ReactNode;
}

export const MaintLayout: FC<MaintLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>LUISFERROJAS-index</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};
