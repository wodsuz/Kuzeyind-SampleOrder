import Headtitle from "../components/header";
import Topbanner from "../components/Topbanner.tsx";
import { getProductsinCollection } from "../lib/shopify";
import ProdcutsList from "../components/ProdcutsList.tsx";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/api/2022-01/graphql.json`;

export default function Home({ products }) {
  console.log("denemesdfasd1: " + URL);
  return (
    <div className="body">
      <Headtitle />
      <main>
        <div className="">
          <div className="">
            <ProdcutsList products={products} />
          </div>

          {/*
           <Topbanner />
                  <div className="items-start justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500">

          <div className="text-5xl font-bold text-center text-yellow-400 border-2 border-yellow-500 border-dotted rounded-3x1 ">
            Welcome to <a href="https://kuzeyind.com">Kuzey!</a>
          </div>
        </div>
      
         <div className="h-1/6 bg-gradient-to-r from-red-500 to-green-500">
            Copyright
          </div>
          */}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsinCollection();
  return {
    props: { products }, // will be passed to the page component as props
  };
}
