import Link from "next/link";
import Image from "next/image";

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
import { GrCart } from "react-icons/gr";
import { GiFruitBowl, GiMedicalDrip } from "react-icons/gi";
export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const logo = require("../public/logonew2.jpg");

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <div>
      <header className="border-b sticky top-0 z-20 bg-white  ">
        <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <Image
                src={logo}
                alt={"altText"}
                layout="fixed"
                objectFit="cover"
                height={30}
                width={30}
              />
              <span className="text-lg pt-1 font-bold align-top pl-2">
                Kuzey ind &copy; Order{" "}
              </span>
            </a>
          </Link>
          <div className="text-slate-800 align-top pb-2 text-lg ">
            <a
              className="tet-md font-bold cursor-pointer  flex"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <GrCart className="w-8 h-8 items-center justify-center mr-2" />
              Cart ({cartQuantity})
            </a>
            <MiniCart cart={cart} />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center mx-auto overflow-hidden relative ">
        <div className="relative opacity-20 lg:opacity-100 h-72 w-72 ">
          <Image src={logo} alt={"altText"} layout="fill" objectFit="cover" />
        </div>
        <div className="max-w-screen-2xl absolute w-full lg:relative lg:w-auto ">
          <p className="text-lg underline md:text-xl decoration-1 decoration-sky-500 ">
            <a
              className="flex items-center justify-center decoration-sky-500 hover:text-yellow-700 "
              href="https://www.kuzeyind.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiMouseFill className="w-5 h-5 md:w-7 md:h-7 " />
              www.kuzeyind.com
            </a>
          </p>
          <p className="text-lg underline md:flex items-center justify-center md:text-xl decoration-1 decoration-sky-500 ">
            <a
              className="flex items-center justify-center decoration-sky-500 hover:text-yellow-700 "
              href="mailto:naz@kuzeyind.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="w-5 h-5 md:w-7 md:h-7 " />
              naz@kuzeyind.com
            </a>
            <a
              className="flex items-center justify-center pl-2 sm:pl-5 decoration-sky-500 hover:text-yellow-700 "
              href="mailto:ongun@kuzeyind.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="w-5 h-5 md:w-7 md:h-7 " />
              ongun@kuzeyind.com
            </a>
          </p>
          <p className="text-sm underline sm:text-lg decoration-1 decoration-sky-500">
            <a
              className="flex text-center decoration-sky-500 hover:text-yellow-700 justify-center items-center "
              href="https://goo.gl/maps/wePBK3EmKBXaga7K6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLocationPin className="w-8 h-8 ml-5 sm:w-7 sm:h-7" />
              Atakent sitesi 1225.sokak no:33 İncek Gölbaşı ANKARA/TURKEY, 06830
            </a>
          </p>
          <p className="flex justify-center pt-1 pb-1 underline text-1xl text-sky decoration-2 decoration-sky-500 ">
            <a
              href="https://www.linkedin.com/company/80288110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedinIn className="w-10 h-10 border-2 border-solid rounded-md sm:w-12 sm:h-12 md:w-14 md:h-14 hover:text-yellow-700 border-sky-500 hover:border-yellow-700" />
            </a>
            <a
              href="https://www.google.com/search?q=kuzey+ind"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GoogleSearch"
            >
              <FaGoogle className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-700 border-sky-500 hover:border-yellow-700" />
            </a>
            <a
              href="https://lnkd.in/eHV-DJUe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yandex"
            >
              <FaYandex className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
            </a>
            <a
              href="https://wa.me/905307081298"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <FaWhatsapp className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
            </a>
            <a
              href="https://lnkd.in/e9f9GBui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1_uCKkP-CEjh65cs6gO3OsFuokgQq0-O_?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fruitcatalogs"
            >
              <GiFruitBowl className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1_uCKkP-CEjh65cs6gO3OsFuokgQq0-O_?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medicalcatalogs"
            >
              <GiMedicalDrip className="w-10 h-10 ml-3 border-2 border-solid rounded-md sm:w-12 sm:h-12 sm:ml-5 md:w-14 md:h-14 md:ml-8 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
