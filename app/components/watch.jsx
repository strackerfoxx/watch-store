import {Link} from '@remix-run/react'

export default function Watch({watch}) {
    const { nombre, descripcion, precio, imagen } = watch.attributes
    const { id } = watch
  return (
    <div className='watch'>
        <img src={imagen.data.attributes.formats.medium.url} alt="papas" />
        <div className='contenido'>
            <h3>{nombre}</h3>
            <p className='descripcion'>{descripcion}</p>
            <p className='precio'>{precio}$</p>
            
            <Link className="enlace" to={`/watch/${id}`}>Ver Producto</Link>
        </div>
    </div>
  )
}
