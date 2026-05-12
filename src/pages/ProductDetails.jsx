import { useEffect, useState, useContext } from "react";

import { useParams } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));

  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-page">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div>

        <h1>{product.title}</h1>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>

      </div>
    </div>
  );
}

export default ProductDetails;