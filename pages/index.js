import Header from "../components/header";
import styles from "../styles/Home.module.css";

import { LanguageProvider } from "../context/languageContext";

import "@tailwindcss/ui/dist/tailwind-ui.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <div className={styles.container}>
          <Head>
            <title>Code Challange</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </div>
      </LanguageProvider>
    </>
  );
}
