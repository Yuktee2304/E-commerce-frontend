import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Navbar = ()=>{
    const auth=localStorage.getItem("user");
    const navigate=useNavigate();
    const logout=()=>{
       localStorage.clear();
        navigate("/signup");
    }
    return(
        <div>
             <img className="logo"src="https://www.nicepng.com/png/detail/247-2475175_ecommerce-e-commerce-website-logo.png" alt="E-commerce website image"/>
            {
            auth?
            <ul className='nav-ul'>
                <li><Link to ="/">Products Page </Link></li>
                <li><Link to ="/addproduct">Add Product</Link></li>
                {/* <li><Link to ="/updateProducts">Update Product</Link></li> */}
                <li><Link to ="/userprofile">Profile </Link></li>
                <li><Link onClick={logout} to ="/signup">Logout Page ({JSON.parse(auth).name})</Link></li>
                </ul>
                :  <ul className='nav-ul nav-right'>
                    <li><Link to="/signup">Sign Up</Link></li>
                   <li><Link to ="/login">Login </Link></li>
                   </ul>
            }
        </div>
    )
}

export default Navbar;