import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import myContext from "../../../context/data/myContext";

function UpdateProduct() {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct, getProductById } = context;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id]);

  const safeProducts = products || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 sm:p-6 md:p-8">
      <div className="bg-gray-800 px-4 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 rounded-xl w-full max-w-md sm:max-w-lg md:max-w-2xl">
        <h1 className="text-center text-white text-xl sm:text-2xl md:text-3xl mb-6 font-bold">
          Update Product
        </h1>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Product title"
          value={safeProducts.title || ""}
          onChange={(e) =>
            setProducts({ ...safeProducts, title: e.target.value })
          }
          className="w-full mb-4 px-3 py-2 rounded-lg text-white bg-gray-700 placeholder-gray-300 outline-none"
        />

        {/* Price */}
        <input
          type="text"
          name="price"
          placeholder="Product price"
          value={safeProducts.price || ""}
          onChange={(e) =>
            setProducts({ ...safeProducts, price: e.target.value })
          }
          className="w-full mb-4 px-3 py-2 rounded-lg text-white bg-gray-700 placeholder-gray-300 outline-none"
        />

        {/* Image URL */}
        <input
          type="text"
          name="imageurl"
          placeholder="Product image URL"
          value={safeProducts.imageUrl || ""}
          onChange={(e) =>
            setProducts({ ...safeProducts, imageUrl: e.target.value })
          }
          className="w-full mb-4 px-3 py-2 rounded-lg text-white bg-gray-700 placeholder-gray-300 outline-none"
        />

        {/* Category */}
        <input
          type="text"
          name="category"
          placeholder="Product category"
          value={safeProducts.category || ""}
          onChange={(e) =>
            setProducts({ ...safeProducts, category: e.target.value })
          }
          className="w-full mb-4 px-3 py-2 rounded-lg text-white bg-gray-700 placeholder-gray-300 outline-none"
        />

        {/* Description */}
        <textarea
          name="description"
          rows="5"
          placeholder="Product description"
          value={safeProducts.description || ""}
          onChange={(e) =>
            setProducts({ ...safeProducts, description: e.target.value })
          }
          className="w-full mb-4 px-3 py-2 rounded-lg text-white bg-gray-700 placeholder-gray-300 outline-none resize-none"
        />

        {/* Update Button */}
        <button
          onClick={() => updateProduct(id, safeProducts)}
          className="w-full py-2 px-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
        >
          Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;