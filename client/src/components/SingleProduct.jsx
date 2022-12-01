import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/UseUsers";
import {
  fetchProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../api/products";

function SingleProduct() {
  const { productId } = useParams();
  const { user } = useAuth;
}
