const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

async function ShopifyData(query) {
  const URL = `https://kuzey-ind.myshopify.com/api/2022-01/graphql.json`;
  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductsinCollection() {
  const query = `
        {
        collection(handle: "frontpage") {
            title
            products(first: 25) {
            edges{
                node {
                id
                title
                handle
                priceRange{
          	    minVariantPrice{
                  amount
                    }
                  }
                images (first: 5) {
                    edges {
                    node {
                        url
                        altText
                    }
                    }
                }
                }
            }
            }
        }
        }
`;
  const response = await ShopifyData(query);

  const allProducts = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `{
  products (first:25) {
    edges {
      node {
        handle
        id
      }
    }
  }
}`;

  const response = await ShopifyData(query);
  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];
  return slugs;
}

export async function getProduct(handle) {
  const query = `
  {
	product (handle: "${handle}" ) {
    id
    title
    handle
    description
    images(first:5){
      edges {
        node {
          url
          altText
        }
      }
    }
    options {
      name
      values
      id
    }
    variants(first:25) {
      edges {
        node {
          selectedOptions {
            name
            value
          }
          image {
            url
            altText
          }
          title
          id
          priceV2 {
            amount
          }
        }
      }
    }
  }
}`;
  const response = await ShopifyData(query);
  const product = response.data.product ? response.data.product : [];
  return product;
}