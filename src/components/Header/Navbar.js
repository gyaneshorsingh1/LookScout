// components/Navbar.jsx
import "./navbar.css"
import Link from "next/link"
export default function Navbar() {
  return <nav className="navbar">
    <div className="left-nav">
        <div className="logo">
            <img src="Lookscout.png" alt="lookscout logo" className="logo" />
        </div>
        <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/our-products">Our Products</Link>
            <Link href="/Resources">Resources</Link>
            <Link href="/Contacts">Contacts</Link>
        </div>

    </div>
    <div className="login-btns">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
    </div>
    
      <img className="nav-icon" src="nav-icon.png" />
    
  </nav>
}
