import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {

  const products = useSelector((state) => state.productReducer.products);
  const renderProducts = products.map((product) => {
    return <div className="w-60 border shadow flex flex-col gap-2 justify-center p-3 rounded" key={product.id}>
      <img className="h-[20vh] w-full bg-white object-contain mb-3 rounded" src={product.image}/>
      <h1 className="text-lg">{product.title}</h1>
      <small>{product.description.slice(0, 100)}...</small>
      <div className="flex items-center justify-between">
        <p>{product.price}</p>
        <Link className="bg-blue-500 px-4 py-2 rounded text-sm font-bold active:scale-95">add to cart</Link>
      </div>
      <Link className="bg-green-500 text-center px-4 py-2 rounded text-sm font-bold active:scale-95" to={`/products/product/${product.id}`}>More info</Link>
    </div>
  })

  return products.length > 0 ? (<div className="w-full p-10 flex flex-wrap gap-5">{renderProducts}</div>) : ("Loading...");
}

export default Products