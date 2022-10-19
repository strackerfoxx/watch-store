import {getWatch} from '~/api/watch'
import { useLoaderData } from '@remix-run/react'

export async function loader({params}){
    const id = params.urlWatch
    const watch = await getWatch(id)
    return watchP = watch.data[0].attributes  
}

export default function urlWatch() {
    const watch = useLoaderData()
    const {nombre, descripcion, precio, stock, imagen} = watch
    const imgUrl = imagen.data.attributes.url

  return (
    <>
        <div className="contenedor watch full">
            <img src={imgUrl} alt={`Image de la guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>     
                <p>Unidades en existencia:<p className='precio'> {stock}</p></p>
                <p>Unidades en precio:<p className='precio'> {precio}</p></p>    
                <a href="/" className='enlace'>comprar ahora</a>  
            </div>
            <div>
            </div>
        </div>
        <div className='descripcion'>
            <p>{descripcion}</p>
        </div>
    </>
  )
}
