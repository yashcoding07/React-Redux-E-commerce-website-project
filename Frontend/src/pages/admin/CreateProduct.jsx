import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../../store/actions/productActions";
import { nanoid } from "@reduxjs/toolkit";

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch(); 

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(createProductHandler)} className="flex flex-col p-5 gap-y-5">
      <input
        {...register("image")}
        className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2"
        type="text"
        placeholder="Enter image URL"
      />
      <input
        {...register("title")}
        className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2"
        type="text"
        placeholder="Enter title"
      />
      <input
        {...register("price")}
        className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2"
        type="text"
        placeholder="Enter price"
      />
      <textarea
        {...register("description")}
        className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2"
        placeholder="Enter description here"
      ></textarea>
      <input
        {...register("category")}
        className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2"
        type="text"
        placeholder="Enter the category"
      />
      <button className="w-[20vw] rounded bg-blue-500 text-white px-4 py-2 active:scale-95">
        Create product
      </button>
    </form>
  );
};

export default CreateProduct;
