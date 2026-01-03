import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncDeleteProduct, asyncUpdateProduct } from "../store/actions/productActions";

const ProductDetails = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  const product = products?.find((product) => product.id == id);
  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category
    }
  });

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
  }

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  }
  

  return product ? (
    <div className="w-full flex flex-col bg-gray-800">
    <div className="flex p-10 gap-10">
      <img
        className="w-150 h-[80vh] bg-white object-contain"
        src={product.image}
        alt=""
      />
      <div className="w-1/2 h-1/2">
        <h1 className="text-3xl font-thin text-wrap">{product.title}</h1>
        <h2 className="text-2xl mb-10 text-green-500">${product.price}</h2>
        <p className="mb-10">{product.description}</p>
        <div className="flex gap-10">
          <button className="bg-green-500 px-4 py-2 rounded active:scale-95">
            buy now
          </button>
          <button className="bg-blue-500 px-4 py-2 rounded active:scale-95">
            add to cart
          </button>
        </div>
      </div>
    </div>
    {user && user.isAdmin ?  
      <form onSubmit={handleSubmit(updateProductHandler)} className="p-10 flex flex-col gap-5 w-full">
        <input {...register("image")} className="p-2 w-1/2 outline-0 border-2 border-gray-600" type="URL" placeholder="Enter image URL"  />
        <input {...register("title")} className="p-2 w-1/2 outline-0 border-2 border-gray-600" type="text" placeholder="title" />
        <input {...register("price")} className="p-2 w-1/2 outline-0 border-2 border-gray-600" type="text" placeholder="0.00"/>
        <textarea {...register("description")} className="p-2 w-1/2 outline-0 border-2 border-gray-600" placeholder="Enter the description"></textarea>
        <input {...register("category")} className="p-2 w-1/2 outline-0 border-2 border-gray-600" type="text" placeholder="Enter the category" />
        <div className="flex gap-10">
          <button className="bg-green-500 w-50 px-4 py-2 rounded active:scale-95">Update Product</button>
          <button onClick={deleteHandler} className="bg-red-500 w-50 px-4 py-2 rounded active:scale-95">Delete Product</button>
        </div>
      </form>: <></>
      }
    </div>
  ): ("Loading...");
};

export default ProductDetails;
