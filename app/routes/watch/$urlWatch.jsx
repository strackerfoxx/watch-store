import {getWatch} from '~/api/watch'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { useState } from 'react'

export async function loader({params}){
    const id = params.urlWatch
    const watch = await getWatch(id)
    return watch
}

export default function urlWatch() {

    const [cantidad, setCantidad] = useState()
    const watch = useLoaderData()

    const {nombre, descripcion, precio, stock, imagen} = watch.data[0].attributes
    const imgUrl = imagen.data.attributes.url
    const {id} = watch

    const {productoCarrito} = useOutletContext()

    const arreglo = []
    for (let i = 1; i <= stock; i++) {
        arreglo.push(i)
    }
    function handleSubmit(e){
        e.preventDefault();
        
        if(cantidad < 1){
            alert('la cantidad minima es 1')
            return
        }

        const productoActual = {
            id,
            nombre,
            precio,
            stock,
            imgUrl,
            cantidad
        } 

        productoCarrito(productoActual)
    }

    
  return (
    <>
        <div className="contenedor watch full">
            <img src={imgUrl} alt={`Image de la guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>     
                <p>Unidades en existencia:<p className='precio'> {stock}</p></p>
                <p>Unidades en precio:<p className='precio'> {precio}</p></p>    
                <a href="/" className='enlace'>Comprar ahora</a>  

                <form onSubmit={handleSubmit}>
                    <label htmlFor="cantidad">Cantidad</label>

                        <select 
                            id="cantidad" 
                            onChange={ e => setCantidad(+e.target.value)}
                        >
                            <option value="0">Seleccione la cantidad</option>
                            {arreglo.map( valor => (
                                <option value={valor}>{valor}</option>
                            ))}
                        </select>

                    <input type="submit" className='enlace-cart' value='Agregar al carrito'/>
                </form>
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
