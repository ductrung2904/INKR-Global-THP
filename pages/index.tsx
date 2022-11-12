import Head from "next/head";
import styles from "../styles/Home.module.css";

import Info from "../components/Info/info";
import Price from "../components/Price/price";
import List from "../components/List/list";
import About from "../components/About/about";
import RelatedTitle from "../components/RelatedTitle/relatedTitle";
import Comments from "../components/Comments/comments";
import QRCode from "../components/QRCode/qrCode";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>INKR GLOBAL THP</title>
        <meta name="description" content="INKR Global Take-Home Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-left">
        <Info />
        <Price />
        <List />
      </div>
      <div className="container-right">
        <About />
        <RelatedTitle />
        <Comments />
        <QRCode />
      </div>
    </div>
  );
}
