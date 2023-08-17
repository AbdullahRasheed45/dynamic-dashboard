import React, { useState } from 'react'
import "./AddProduct.css"

const AddProduct = () => {

    
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [error, setError] = useState(false)
 

    const addProduct = async()=>{

        if (!name || !price || !category || !company){
           setError(true)
            return false;
        }


        console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        const data = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({name, price, category, company, userId}),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const result = await data.json();
        console.log(result)
        setName("")
        setPrice("")
        setCategory("")
        setCompany("")

    }


  return (
    <div className='addproduct'>
        <h1>Add Product</h1>
        <input className='input-box' type="text" placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)} value={name} />
        {error && !name &&<span className='invalid-input'>Enter valid name</span>}
        <input className='input-box' type="text" placeholder='Enter Product Price' onChange={(e)=>setPrice(e.target.value)} value={price} />
        {error && !price &&<span className='invalid-input'>Enter valid price</span>}
        <input className='input-box' type="text" placeholder='Enter Product Category' onChange={(e)=>setCategory(e.target.value)} value={category} />
        {error && !category &&<span className='invalid-input'>Enter valid category</span>}
        <input className='input-box' type="text" placeholder='Enter Product Company' onChange={(e)=>setCompany(e.target.value)} value={company} />
        {error && !company &&<span className='invalid-input'>Enter valid company</span>}
        <button onClick={addProduct} className="btn" type="button">Add Product</button>
      
    </div>
  )
}

export default AddProduct
