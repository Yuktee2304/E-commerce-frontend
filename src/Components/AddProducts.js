import {React,useState} from 'react';

const AddProducts = ()=>{
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")

    const collectProductsData = async()=>{
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        console.log(userId);
        let result = await fetch("https://e-commerce-backend-o0vx.onrender.com/addProducts",{
            method:"POST",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        })
        result= await result.json();
        if(result)
        {
            alert("Product is added successfully");
            
        }
        console.log(result);
    }

    return(
        <div>
             <h1 className="addStyleProducts">Add products</h1>
            <form className="addProductFom">
                <input type="text" placeholder="Enter product name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="number" placeholder="Enter product price" value={price}  onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" placeholder="Enter product category" value={category}  onChange={(e)=>setCategory(e.target.value)}/>
                <input type="text" placeholder="Enter product company name" value={company}  onChange={(e)=>setCompany(e.target.value)}/>
                <button className="submitBtn" onClick={collectProductsData} type="button">Add</button>
            </form>
        </div>
    )
}

export default AddProducts;