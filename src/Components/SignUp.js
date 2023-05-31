import {React,useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const Signup=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth)
        {
            navigate("/");
        }
    },[])    
   const collectFormData=async()=>{
        console.log(name,email,password);
        let loginResult = await fetch("https://e-commerce-backend-o0vx.onrender.com/register",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-type':'application/json'
            }
        })
        loginResult = await loginResult.json();
        localStorage.setItem("user",JSON.stringify(loginResult.result));
        localStorage.setItem("token",JSON.stringify(loginResult.auth));
        console.log(loginResult);
        navigate("/");
    }
 
    return(
        <div>
        <h1 className="register">Register</h1>
        <form className='signupForm'>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder="Enter Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter your Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="formBtn" onClick={collectFormData} type="button">Sign Up</button>
        </form>
        </div>
    )
}

export default Signup;