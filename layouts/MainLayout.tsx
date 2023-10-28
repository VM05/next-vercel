import { Navbar } from '@/components/Navbar';
import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>About - Victor</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};
