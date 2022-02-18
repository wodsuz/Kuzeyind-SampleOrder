import "../styles/globals.css";
import Layout from "../components/Layout";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { ThemeProvider } from "next-themes";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // State managment wont get confused when we swtich pages
  const router = useRouter(); //For allowing indivudial dynmaic pages instead of saving each one
  return (
    <ThemeProvider attribute="class">
      <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ShopProvider>
    </ThemeProvider>
  );
}

export default MyApp;
