import Headtitle from "../components/header";
import Topbanner from "../components/Topbanner";
import { getProductsinCollection } from "../lib/shopify";
import ProdcutsList from "../components/ProdcutsList";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/api/2022-01/graphql.json`;

export default function Home({ products }) {
  console.log("denemesdfasd1: " + URL);
  return (
    <div className="body">
      <Headtitle />
      <main>
        <ProdcutsList products={products} />
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
