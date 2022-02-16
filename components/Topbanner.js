import Image from "next/image";
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
import {
  FaFileCode,
  FaDownload,
  FaHackerrank,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import { GiFruitBowl, GiMedicalDrip } from "react-icons/gi";
const Topbanner = () => {
  const logo = require("../public/logonew2.jpg");
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 ">
      <div className="mx-auto max-w-screen-2xl">
        <div className="space-y-3 shadow-lg bg-white/40 ">
          <p className="text-2xl text-center underline text-sky decoration-3 decoration-sky-500 text-slate-800">
            Kuzey ind. © Export & Import inc.
          </p>
          <div className="max-w-[30%] w-60 relative mx-auto float-left ">
            <Image
              src={logo}
              alt="Icon or logo of Kuzeyind"
              className="rounded-full"
              layout="responsive"
              quality="100"
              objectFit="cover"
            />
          </div>
          <div className=" text-slate-800">
            <p className="text-lg underline md:text-xl text-sky decoration-1 decoration-sky-500 ">
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
            <p className="text-base underline sm:flex md:text-xl text-sky decoration-1 decoration-sky-500 ">
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
            <p className="text-sm underline md:text-lg text-sky decoration-1 decoration-sky-500">
              <a
                className="flex text-center decoration-sky-500 hover:text-yellow-700 sm:justify-center sm:items-center "
                href="https://goo.gl/maps/wePBK3EmKBXaga7K6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLocationPin className="w-8 h-8 ml-5 sm:w-7 sm:h-7" />
                Atakent sitesi 1225.sokak no:33 İncek Gölbaşı ANKARA/TURKEY,
                06830
              </a>
            </p>
            <p className="flex justify-center pt-1 pb-1 underline text-1xl text-sky decoration-2 decoration-sky-500 ">
              <a
                href="https://www.linkedin.com/company/80288110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedinIn className="w-8 h-8 ml-2 border-2 border-solid rounded-md sm:w-10 sm:h-10 sm:ml-3 hover:text-yellow-700 border-sky-500 hover:border-yellow-700" />
              </a>
              <a
                href="https://www.google.com/search?q=kuzey+ind"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoogleSearch"
              >
                <FaGoogle className="w-8 h-8 ml-2 border-2 border-solid rounded-md sm:w-10 sm:h-10 sm:ml-3 hover:text-yellow-700 border-sky-500 hover:border-yellow-700" />
              </a>
              <a
                href="https://lnkd.in/eHV-DJUe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yandex"
              >
                <FaYandex className="w-8 h-8 ml-2 border-2 border-solid rounded-md sm:w-10 sm:h-10 sm:ml-3 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
              </a>
              <a
                href="https://wa.me/905307081298"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <FaWhatsapp className="w-8 h-8 ml-2 border-2 border-solid rounded-md sm:w-10 sm:h-10 sm:ml-3 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
              </a>
              <a
                href="https://lnkd.in/e9f9GBui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="w-8 h-8 ml-2 border-2 border-solid rounded-md sm:w-10 sm:h-10 sm:ml-3 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
              </a>
              <a
                href="https://drive.google.com/drive/folders/1_uCKkP-CEjh65cs6gO3OsFuokgQq0-O_?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fruitcatalogs"
              >
                <GiFruitBowl className="w-8 h-8 ml-2 border-2 border-solid rounded-md sm:w-10 sm:h-10 sm:ml-3 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
              </a>
              <a
                href="https://drive.google.com/drive/folders/1_uCKkP-CEjh65cs6gO3OsFuokgQq0-O_?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medicalcatalogs"
              >
                <GiMedicalDrip className="w-8 h-8 ml-2 border-2 border-solid rounded-md sm:w-10 sm:h-10 sm:ml-3 hover:text-yellow-700 border-sky-500 hover:border-yellow-700 " />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
