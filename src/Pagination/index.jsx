import { useEffect } from "react";
import { useState } from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

const Pagination = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length ? (
    <h1>No products found</h1>
  ) : (
    <div>
      <h1>Pagination</h1>
      {products.map((p) => (
        <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
      ))}
    </div>
  );
};

export default Pagination;
