import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {

  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="page">

      <h1>Your Cart 🛒</h1>

      {cartItems.length === 0 ? (

        <h2>Cart is Empty</h2>

      ) : (

        <>
          <div className="cart-grid">

            {cartItems.map((item, index) => (

              <div
                className="cart-card"
                key={index}
              >

                <img
                  src={item.thumbnail}
                  alt={item.title}
                />

                <h3>{item.title}</h3>

                <p>${item.price}</p>

              </div>
            ))}

          </div>

          <h2 className="total">
            Total Price: ${totalPrice}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;