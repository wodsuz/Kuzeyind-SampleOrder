import Image from "next/image";
import ProductForm from "./ProductForm";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import RecommenList from "./RecommendedList";
import parse from "html-react-parser";
import React, { useState } from "react";

export default function ProductPageContent({ product }) {
  const images = [];
  const [className, setClassName] = useState("invisible");
  const [toggleClass, setToggleClass] = useState(
    " h-14 w-full dark:bg-dark-100  "
  );
  const myClick = () => {
    className.includes("invisible")
      ? setClassName("visible dark:text-primary dark:bg-dark-100 ml-3") +
        setToggleClass("relative h-72 w-full dark:bg-dark-100 overflow-auto")
      : setClassName("invisible") + setToggleClass(" h-14 w-full  ");
  };

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image
          src={image.node.url}
          alt={image.node.altText}
          layout="fill"
          objectFit="cover"
        />
      </SwiperSlide>
    );
  });

  SwiperCore.use([Navigation, Pagination]);

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center md:flex-row 
    md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto"
      >
        <div className="w-full max-w-md bg-white dark:bg-dark-100 rounded-2xl overflow-hidden shadow-xl md:w-1/2">
          <div className="relative h-96 w-full">
            <Swiper
              style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": "#000",
              }}
              navigation
              pagination={{ clickable: true }}
              className="h-96 rounded-2xl "
              logo="true"
            >
              {images}
            </Swiper>
          </div>
          <div className={toggleClass}>
            <button
              onClick={myClick}
              className="bg-green-500 dark:bg-dark-200
            dark:text-primary dark:hover:bg-gray-400 rounded-2xl 
            text-white px-2 py-3  hover:bg-green-800 mt-2 mx-auto 
            flex content-center "
              aria-label="product-details"
            >
              Product Description{" "}
            </button>
            <div className={className}>{parse(product.descriptionHtml)}</div>
          </div>
        </div>

        <ProductForm product={product} />
      </div>
      <p className="text-lg md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto text-center"></p>
      <RecommenList
        current={product.id}
        products={product.collections.edges[0].node.products.edges}
      />
    </div>
  );
}
