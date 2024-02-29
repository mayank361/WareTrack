import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import './AddProducts.css';
import Navbar from './Navbar';


function AddProducts() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/products", product) 
      .then(function (response) {
        console.log(response.data); 
        setProduct({
          name: '',
          category: '',
          price: '',
          quantity: '',
          description: ''
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="containerAP">
      <div className="navaddAP"><Navbar/></div>
      <div className="tittleAP">Add New Product</div>
      <form onSubmit={handleSubmit}>
        <div className="detailsConAP">
          <div className="tittle1AP">Product Name:</div>
          <input
            className="inputboxAP"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product name"
          />
          <div className="tittle1AP">Product Category:</div>
          <input
            className="inputboxAP"
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Product category"
          />
          <div className="tittle1AP">Product Price:</div>
          <input
            className="inputboxAP"
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Product price"
          />
          <div className="tittle1AP">Product Quantity:</div>
          <input
            className="inputboxAP"
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Product quantity"
          />
          <div className="tittle1AP">Product Description:</div>
          <input
            className="inputdescAP"
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter brief product description"
          />
          <div className="submitContainerAP">
          <Link to="/dashboard" className="submitAP">
              Submit
            </Link></div>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;

{/* <div className="imageDetails"> 
      {/*  <div className="tittle1">Product image:</div>
      {/*  <div className="supFormat">Supported formats: jpg, jpeg, png</div>
       {/* <div className="inputImgCon"></div>
      {/*  <input className="inputImg" type="file" accept="image/*" placeholder="No file selected" onChange={handleImageUpload}/>     
    </div> */}