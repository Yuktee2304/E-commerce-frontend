import {React,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>
    {
        const auth=localStorage.getItem("user");
        if(auth)
        {
            navigate("/");
        }
    },[])

   // const data = localStorage.setItem("loggedUser",result)

    const collectLoginData =async()=>{
        console.log(email,password);
            let result = await fetch("https://e-commerce-backend-o0vx.onrender.com/login",{
                method:"POST",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            result= await result.json();
            console.log(result);
            if(result.auth)
            {
                localStorage.setItem("user",JSON.stringify(result.user));
                localStorage.setItem("token",JSON.stringify(result.auth));
                navigate("/")
            }
            else{
                alert("Please enter correct details....")
            }
        }
    

    return(
        <div>
        <h1 className="login">Login</h1>
        <form className='loginForm'>
        <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button className="loginBtn"  type="button" onClick={collectLoginData}>Login</button>
        </form>
        </div>
    )
    }

export default Login;