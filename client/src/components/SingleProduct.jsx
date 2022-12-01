import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/UseUsers";
import {
  fetchProductById,
  updateProduct,
  deleteProduct,
} from "../api/products";

export default function SingleProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    async function getProductById() {
      const product = await fetchProductById(productId);
      console.log("Single Product: ", singleProduct);
      setSingleProduct(product);
    }
    getProductById();
  }, []);

  async function handleDelete(id) {
    const result = await deleteProduct(id);
    navigate("/");
  }

  function displayEdit() {
    setShowEdit(true);
  }

  async function handleUpdate() {
    const result = await updateProduct(
      singleProduct.id,
      productName,
      description,
      price,
      isAvailable,
      imageUrl,
      categoryId
    );
    setShowEdit(false);
    console.log("Update Result: ", result);
  }

  return (
    <div>
      {singleProduct && (
        <div>
          <img src={singleProduct.imageUrl} alt="Product" />
          <h6>{singleProduct.productName}</h6>
          <h6>{singleProduct.description}</h6>
          <h6>${singleProduct.price}</h6>
          <h6>
            In Stock?: {singleProduct.isAvailable === true ? "Yes" : "No"}
          </h6>
          <button
            onClick={() => {
              navigate(`/`);
            }}
          >
            Back
          </button>
          <button>Add to Cart</button>
          <button onClick={() => handleDelete(singleProduct.id)}>Delete</button>
          <button onClick={displayEdit}>Edit</button>
          {showEdit === true ? (
            <div
              onSubmit={async (e) => {
                e.preventDefault();
                const result = await updateProduct(
                  singleProduct.id,
                  productName,
                  description,
                  price,
                  isAvailable,
                  imageUrl,
                  categoryId
                );
              }}
            >
              <div>
                <label>Product Name</label>
                <input
                  value={productName}
                  type="text"
                  placeholder={singleProduct.productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
                <label>Description</label>
                <input
                  value={description}
                  type="text"
                  placeholder={singleProduct.description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <label>Price</label>
                <input
                  value={price}
                  type="text"
                  placeholder={singleProduct.price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                <label>Is the product in stock?</label>
                <input
                  value={isAvailable}
                  type="checkbox"
                  onChange={(e) => {
                    setIsAvailable(e.target.value);
                  }}
                />
                <label>Category Id</label>
                <input
                  value={categoryId}
                  type="text"
                  placeholder={singleProduct.categoryId}
                  onChange={(e) => {
                    setCategoryId(e.target.value);
                  }}
                />
                <label>Image URL</label>
                <input
                  value={categoryId}
                  type="text"
                  placeholder={singleProduct.imageUrl}
                  onChange={(e) => {
                    setImageUrl(e.target.value);
                  }}
                />
                <button onClick={handleUpdate} type="submit">
                  Update
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
