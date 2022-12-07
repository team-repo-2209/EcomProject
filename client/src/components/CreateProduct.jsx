import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createProduct } from "../api/products";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function CreateProduct() {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");

  return (
    <div>
      <Card>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const result = await createProduct(
                productName,
                description,
                price,
                isAvailable,
                imageUrl,
                categoryId
              );
              navigate("/");
              console.log("Create Routine Result: ", result);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <h3>Create a New Product</h3>
          <Form.Group className="mb-3" controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              value={productName}
              type="text"
              placeholder="Enter a Name for Your Product"
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              type="text"
              placeholder="Enter a Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              as="textarea"
              rows={5}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              type="text"
              placeholder="Enter the amount"
              onChange={(e) => {
                setPrice(+e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formIsAvailable">
            <Form.Check
              value={isAvailable}
              type="checkbox"
              label="Available?"
              onChange={() => {
                setIsAvailable(!isAvailable);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImageUrl">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={imageUrl}
              type="text"
              placeholder="Enter an URL for the image"
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategoryId">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={categoryId}
              type="text"
              placeholder="Enter a Category ID"
              onChange={(e) => {
                setCategoryId(+e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="cancel">
            Cancel
          </Button>
        </Form>
      </Card>
    </div>
  );
}
