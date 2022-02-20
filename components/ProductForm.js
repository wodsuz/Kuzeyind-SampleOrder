import { useState, useContext } from "react";
import { formatter } from "../utils/helper";
import ProductOptions from "./ProductOptions";
import { CartContext } from "../context/shopContext";
import { BsCart } from "react-icons/bs";

export default function ProductForm({ product }) {
  const { addToCart } = useContext(CartContext); // Destructing to add in function
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};
    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selecttedOptions, setselectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setselectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selecttedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="rounded-2xl p-4 shadow-2xl flex flex-col w-full md:w-1/3">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-1 ">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selecttedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className=" bg-green-500 dark:bg-primary flex items-center justify-center
        dark:text-dark-300 dark:hover:bg-gray-400 rounded-2xl 
        text-white px-2 py-3 hover:bg-green-800 mt-2"
      >
        <BsCart className="w-5 h-5 mr-3" />
        Add To Card <BsCart className="w-5 h-5 ml-3" />
      </button>
    </div>
  );
}
