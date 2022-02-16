import { NextSeo } from "next-seo";
import Head from "next/head";
import { date } from "../components/time";
const Headtitle = () => {
  const title =
    "Kuzeyind. © Export & Import - " +
    date() +
    "- Sample Fruit & Disposable Medical Products Order Webpage";
  return (
    <div>
      <Head>
        <meta name="author" content="Ongun-Demirag" key="title" />
        <meta
          name="description"
          content="Web page to order sample food and disposable medical products online."
        />
        <meta
          name="keywords"
          content="Fresh fruit,Fresh Vegetables,Dried fruits,Powders,Freeze-Dried Powders,Concentrates,Spray-Dried Powders,%100 Powders,Disposable Medical products"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-touch-icon" href="/apple-touch-icon-72x72.png" />
        <meta name="theme-color" content="#0000000" />
        <link rel="icon" href="/logonew.ico" />
      </Head>
      <NextSeo
        title={title}
        description="Web page to order sample food and disposable medical products online."
      />
    </div>
  );
};
export default Headtitle;
