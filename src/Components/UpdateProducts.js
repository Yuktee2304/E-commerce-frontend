import {React,useEffect,useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProducts = ()=>{
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [category,setCategory] = useState("")
    const [company,setCompany] = useState("")
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductsDetails();
    },[])

    const getProductsDetails = async()=>{
        console.log(params)
       let result = await fetch(`https://e-commerce-backend-o0vx.onrender.com/getProducts/${params.id}`,{
        headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
       });
       result = await result.json();  
       setName(result.name);
       setPrice(result.price);
       setCategory(result.category);
       setCompany(result.company);
    }

    const updateProductsData=async()=>{
    let result = await fetch(`https://e-commerce-backend-o0vx.onrender.com/updateProducts/${params.id}`,{
        method:"PUT",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            "Content-type":"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    })
    result = await result.json();
    if(result)
    {
    navigate("/");
    }
    }

    return(
        <div>
             <h1 className="addStyleProducts">Update products</h1>
            <form className="addProductFom">
                <input type="text" placeholder="Enter product name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Enter product price" value={price}  onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" placeholder="Enter product category" value={category}  onChange={(e)=>setCategory(e.target.value)}/>
                <input type="text" placeholder="Enter product company name" value={company}  onChange={(e)=>setCompany(e.target.value)}/>
                <button className="submitBtn" onClick={updateProductsData} type="button">Update</button>
            </form>
        </div>
    )
}

export default UpdateProducts;