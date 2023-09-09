import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2>Popular Products</h2>
          <p>Experience top-notch quality and style with our selections. Discover a world of comfort, design and value</p>
        </div>
      </section>
    </div>
  );
};

export default PopularProducts;