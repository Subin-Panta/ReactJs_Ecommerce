import React from 'react'
import logo from "../logo.svg"
import { FaCartPlus} from "react-icons/fa"
import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
            <Link to ="/" > <img src={logo} alt="home"/>
            {/* 
             https://www.iconfinder.com/icons/1243689/call_phone_icon
             Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/p" className="nav-link">Products</Link></li>
            </ul>
            <Link to ="/cart" className="ml-auto">
                <button>
                    <FaCartPlus />My cart
                </button>
            </Link>
        </nav>
    )
}
