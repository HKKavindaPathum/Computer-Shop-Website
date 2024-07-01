import React, {useContext, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Tech Haven</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link> {menu==="home"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("laptop")}}><Link style={{textDecoration: 'none'}} to='/laptop'>Laptop</Link> {menu==="laptop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("monitor")}}><Link style={{textDecoration: 'none'}} to='/monitor'>Monitor</Link> {menu==="monitor"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("graphics card")}}><Link style={{textDecoration: 'none'}} to='/graphics card'>Graphics Card</Link> {menu==="graphics card"?<hr/>:<></>} </li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon } alt="" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
} 

export default Navbar
