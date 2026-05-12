import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (
    <div className="card">

      <img src={product.thumbnail} alt={product.title} />

      <div className="card-content">

        <h3>{product.title}</h3>

        <p>${product.price}</p>

        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;