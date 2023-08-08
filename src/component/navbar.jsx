import '../styles/home.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
        <h2>Stories<span style={{color:"red" }}>.</span> </h2>
        <div className="link">
            {/* <a href="">Home</a> */}
            <Link to={'/home'} >Home</Link>
            <Link to={'/foodlist'}>Food</Link>
            <Link to={'/adding'} >Add Food</Link>
            <Link to={'/'} style={{color:'orange'}}>Logout</Link>
        </div>
    </div>
     );
}
 
export default Navbar;