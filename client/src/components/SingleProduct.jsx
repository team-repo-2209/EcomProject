import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import {
  fetchProductById,
  updateProduct,
  deleteProduct,
} from "../api/products";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function SingleProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState({});
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [categoryId, setCategoryId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    async function getProductById() {
      const product = await fetchProductById(productId);
      setSingleProduct(product);
      setProductName(product.productName);
      setDescription(product.description);
      setPrice(product.price);
      setIsAvailable(product.isAvailable);
      setCategoryId(product.categoryId);
      setImageUrl(product.imageUrl);
    }
    getProductById();
  }, []);
  console.log(singleProduct);
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
    <Card>
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
            <button onClick={() => handleDelete(singleProduct.id)}>
              Delete
            </button>
            <button onClick={displayEdit}>Edit</button>
            {showEdit === true ? (
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();
                  window.location.reload();
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
                      setPrice(+e.target.value);
                    }}
                  />
                  <label>Is the product in stock?</label>
                  <input
                    value={isAvailable}
                    type="checkbox"
                    onChange={(e) => {
                      setIsAvailable(!isAvailable);
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
                  <button type="submit">Update</button>
                  <button>Cancel</button>
                </div>
              </Form>
            ) : null}
          </div>
        )}
      </div>
    </Card>
  );
}
