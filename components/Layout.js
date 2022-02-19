import Footer from "./Footer";
import Nav from "./Nav";
import Headtitle from "./header";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Headtitle />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
