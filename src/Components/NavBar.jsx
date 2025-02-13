import '../css/NavBar.css'
import {Link} from 'react-router-dom'
function NavBar(props) {

  return (
    <header>
        <h1>Sk8ts</h1>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Shop'>Shop</Link>
            <Link to='Contact'>Contact</Link>
            <Link to='/AboutUs'>About Us</Link>
            <Link to='/Cart'>Cart{' '}{props.countCartItems ? (props.countCartItems):('')}</Link>
            <Link to='/Login'>Login</Link>
        </nav>
    </header>
  )
}

export default NavBar