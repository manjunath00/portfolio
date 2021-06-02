import Head from "next/head";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Manjunath's Portfolio</title>
      </Head>
      <Portfolio />
    </div>
  );
}
