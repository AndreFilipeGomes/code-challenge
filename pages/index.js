import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import "@tailwindcss/ui/dist/tailwind-ui.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Code Challange</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </>
  );
}
