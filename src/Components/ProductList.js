import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("https://e-commerce-backend-o0vx.onrender.com/getProducts",{
      headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(`https://e-commerce-backend-o0vx.onrender.com//deleteProducts/${id}`, {
      method: "DELETE",
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    });
    result = await result.json();
    if (result) {
      prompt("Are you sure you want to delete");
      getProducts();
    }
  };

  const updateProducts = (id) => {
    navigate(`/updateProducts/${id}`);
  };

  const searchHandle = async (e) => {
    let searchData = e.target.value;
    if (searchData) {
      let result = await fetch(
        `https://e-commerce-backend-o0vx.onrender.com//searchProducts/${searchData}`,{
          headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        }
      );
      result = await result.json();
      if (result) {
        setProducts(result);
      }
      //console.log(searchData);
    }
    else{
        getProducts();
    }
  };

  return (
    <div className="product-list">
       {/* <h1>Welcome {products.name}!</h1> */}
      <h1>Product List Component</h1>
      <input
        type=""
        className="search-product-list"
        placeholder="Search products"
        onChange={searchHandle}
      />
      <ul>
        <li>S.NO</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {
      products.length>0? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button id="delete-item" onClick={() => deleteProduct(item._id)}>
              Delete
            </button>
            <button id="update-item" onClick={() => updateProducts(item._id)}>
              Update
            </button>
          </li>
        </ul>
      )):<h1>No Records Found!</h1>}
    </div>
  );
};
export default Productlist;
