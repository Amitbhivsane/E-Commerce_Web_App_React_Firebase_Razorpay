import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import myContext from "../../../context/data/myContext";

function UpdateProduct() {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct, getProductById } = context;
  const { id } = useParams();

  // Fetch product data when component mounts
  useEffect(() => {
    if (id) {
      getProductById(id); // assume this sets products state with the product data
    }
  }, [id]);

  // If products is null, default to empty object to avoid undefined errors
  const safeProducts = products || {};

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-800 px-10 py-10 rounded-xl">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Update Product
          </h1>

          {/* Title */}
          <input
            type="text"
            name="title"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product title"
            value={safeProducts.title || ""}
            onChange={(e) =>
              setProducts({ ...safeProducts, title: e.target.value })
            }
          />

          {/* Price */}
          <input
            type="text"
            name="price"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product price"
            value={safeProducts.price || ""}
            onChange={(e) =>
              setProducts({ ...safeProducts, price: e.target.value })
            }
          />

          {/* Image URL */}
          <input
            type="text"
            name="imageurl"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product imageUrl"
            value={safeProducts.imageUrl || ""}
            onChange={(e) =>
              setProducts({ ...safeProducts, imageUrl: e.target.value })
            }
          />

          {/* Category */}
          <input
            type="text"
            name="category"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product category"
            value={safeProducts.category || ""}
            onChange={(e) =>
              setProducts({ ...safeProducts, category: e.target.value })
            }
          />

          {/* Description */}
          <textarea
            cols="30"
            rows="10"
            name="description"
            className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product description"
            value={safeProducts.description || ""}
            onChange={(e) =>
              setProducts({ ...safeProducts, description: e.target.value })
            }
          />

          {/* Update Button */}
          <div className="flex justify-center mb-3">
            <button
              onClick={() => updateProduct(id, safeProducts)}
              className="bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg"
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;