import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const updateProduct = async () => {
    console.log(name, price, category, company);
    let data = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await data.json();
    console.log(result);
    navigate("/")
  };

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line
  }, []);

  const getProductDetail = async () => {
    if (!params.id) {
      console.error("Invalid product ID");
      // Handle the case when the product ID is missing or invalid
      // You could show an error message or redirect to another page
      return;
    }

    try {
      let result = await fetch(`http://localhost:5000/product/${params.id}`);
      if (!result.ok) {
        throw new Error("Network response was not ok");
      }
      result = await result.json();
      console.log(result);
      setName(result?.name || "");
      setPrice(result?.price || "");
      setCategory(result?.category || "");
      setCompany(result?.company || "");
    } catch (error) {
      console.error("Error fetching product details:", error);
      // Handle the error when fetching product details
      // You could show an error message or redirect to another page
    }
  };

  return (
    <div className="update-product">
      <h1>Update Product</h1>
      <input
        className="input-box"
        type="text"
        placeholder="Enter Product Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <input
        className="input-box"
        type="text"
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />

      <input
        className="input-box"
        type="text"
        placeholder="Enter Product Category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />

      <input
        className="input-box"
        type="text"
        placeholder="Enter Product Company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      />

      <button onClick={updateProduct} className="btn" type="button">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
