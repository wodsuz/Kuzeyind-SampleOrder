import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { RiMouseFill } from "react-icons/ri";
import {
  FaLinkedinIn,
  FaGoogle,
  FaYandex,
  FaWhatsapp,
  FaGoogleDrive,
  FaInstagram,
} from "react-icons/fa";
import { GiFruitBowl, GiMedicalDrip } from "react-icons/gi";
import { BsFillSunFill, BsCart, BsMoonFill } from "react-icons/bs";

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const logo = require("../public/logonew2.jpg");
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const icon =
    theme === "light" ? (
      <BsMoonFill className="w-7 h-7 md:w-10 md:h-10" />
    ) : (
      <BsFillSunFill className="w-7 h-7 md:w-10 md:h-10" />
    );

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <div>
      <header className="border-b sticky top-0 z-20 bg-secondary dark:border-0 dark:bg-dark-100 dark:text-primary ">
        <div className="flex  items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <Image
                src={logo}
                alt={"altText"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full"
                height={30}
                width={30}
              />
              <span className="text-md md:text-lg pt-1 font-bold align-top pl-2">
                Kuzey ind &copy; Order{" "}
              </span>
            </a>
          </Link>
          <div>
            <button onClick={changeTheme}>{icon}</button>
          </div>
          <div className="dark:text-primary align-top pb-2 text-md md:text-lg  ">
            <a
              className="tet-md font-bold cursor-pointer  flex"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <BsCart className="w-7 h-7 md:w-10 md:h-10 items-center justify-center mr-2 red-400 " />
              Cart ({cartQuantity})
            </a>
            <MiniCart cart={cart} />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Nav;
