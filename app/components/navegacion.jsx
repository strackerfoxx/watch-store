import {Link} from '@remix-run/react'

export default function Navegacion() {
  return (
    <div className='navegacion'>
        <Link to='/' >index</Link>
        <Link to='/watches' >shop</Link>
        <Link to='/' >best seller</Link>
        <Link to='/us' >about us</Link>
    </div>
  )
}
