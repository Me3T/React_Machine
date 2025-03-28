import { useEffect, useState } from "react";
import "./style.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <span>{title}</span>
    </div>
  );
};

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return !products.length ? (
    <h1>No Products found</h1>
  ) : (
    <div>
      <h1>Pagination</h1>
      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
      <div className="pagination-container">
        <button
          disabled={currentPage === 0}
          className="page-number"
          onClick={() => goToPrevPage()}
        >
          ◀️
        </button>
        {[
          ...Array(noOfPages)
            .keys()
            .map((n) => (
              <button
                className={"page-number " + (n === currentPage ? "active" : "")}
                key={n}
                onClick={() => handlePageChange(n)}
              >
                {n}
              </button>
            )),
        ]}
        <button
          disabled={currentPage === noOfPages - 1}
          onClick={() => goToNextPage()}
        >
          ▶️
        </button>
      </div>
    </div>
  );
};

export default Pagination;
