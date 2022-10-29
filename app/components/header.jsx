import {Link} from '@remix-run/react'
import logo from '../../public/img/logo.jpeg'
import Nav1 from './navegacion'

export default function Header() {
  return (
    <div className='header'>
        <div className='barra'>

            <Nav1/>

            <div className='logo'>
              <Link to='/' ><img src={logo} alt="Logo de la tienda" /></Link> 
            </div>

            <div className='navegacion'>
                <Link to='/' >usd</Link>
                <Link to='/carrito' >cart</Link>
                <Link to='/' >wish</Link>
                <Link to='/' >search</Link>
                <Link to='/' >about us</Link>
            </div>

    
        </div>  
    </div>
  )
}
