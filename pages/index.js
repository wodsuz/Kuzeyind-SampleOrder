import { getProductsinCollection } from "../lib/shopify";
import ProdcutsList from "../components/ProdcutsList";
import Headtitle from "../components/header";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const URL = `https://${domain}/api/2022-01/graphql.json`;

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="body">
      <Headtitle />
      <div className="">
        <div className="">
          <ProdcutsList products={products} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsinCollection();
  return {
    props: { products }, // will be passed to the page component as props
  };
}
