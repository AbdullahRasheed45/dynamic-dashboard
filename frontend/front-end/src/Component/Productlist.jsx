import React, { useEffect, useState } from "react";
import "./Productlist.css";
import { Link } from "react-router-dom";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  },[]);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
    console.log(products); 
  };
  const deleteProduct = async (id) => {
    try {
      let result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      });
      if (result.ok) {
        getProducts(); // Refresh the product list after successful deletion
      } else {
        console.error("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Error deleting the product:", error);
    }
  };
  const searchHandle = async(e)=>{
    let key = e.target.value
    if (key){
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      console.log(result)
      if(result){
        setProducts(result)
      }
    } else{
      getProducts();
    }
  }
  
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <input className="search-input" type="text" placeholder="Search Product" onChange={searchHandle}/>
      <ul>
        <li>S. NO</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>
      {
      products.length>0 ? products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>Rs. {item.price}</li>
            <li>{item.category}</li>
            <li>
                <button onClick={()=>deleteProduct(item._id)} className="btnn">Delete</button>
                <button className="btnn"><Link className="linkk" to= {`/update/${item._id}`} >Update</Link></button>
                
            </li>
          </ul>

      )):
       <h1 className="heading">No Results Found</h1>
      }
    </div>
  );
};

export default Productlist;
