import Headtitle from "../components/header";
import Topbanner from "../components/Topbanner";
import { getProductsinCollection } from "../lib/shopify";
import ProdcutsList from "../components/ProdcutsList";
export default function Home({ products }) {
  return (
    <div className="body">
      <Headtitle />
      <main>
        <Topbanner />
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
