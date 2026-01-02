import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productReducer.products);
  const product = products?.find((product) => product.id == id);

  return (
    <div className="w-full flex p-10 gap-10">
      <img className="w-150 h-[80vh] bg-white object-contain" src={product.image} alt=""/>
      <div className="w-1/2 h-1/2">
        <h1 className="text-3xl font-thin text-wrap">{product.title}</h1>
        <h2 className="text-2xl mb-10 text-green-500">${product.price}</h2>
        <p className="mb-10">{product.description}</p>
        <div className="flex gap-10">
        <button className="bg-green-500 px-4 py-2 rounded active:scale-95">buy now</button>
        <button className="bg-blue-500 px-4 py-2 rounded active:scale-95">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
