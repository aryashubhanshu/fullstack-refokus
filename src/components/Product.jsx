import Button from "./Button";

function Product({ product }) {
  return (
    <div className="w-full py-20 text-white">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-6xl capitalize font-medium">{product.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{product.desc}</p>
          <div className="flex items-center gap-5">
            {product.live && <Button title="Live Website" />}
            {product.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
