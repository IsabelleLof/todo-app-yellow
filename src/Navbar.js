import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar () {
    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <Link to='./'><li>LOGO</li></Link>
                <Link to='./create'><li>Create a new Todo</li></Link>
                <Link to='./blog'><li>Blog</li></Link>
                <Link to='./login'><li>Login</li></Link>
            </ul>

        </div>
    )
}