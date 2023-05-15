import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>De Dessert</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/order'>Order</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;