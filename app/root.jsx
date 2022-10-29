import { useState, useEffect } from 'react';

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

import Header from '~/components/header'
import Footer from '~/components/footer'

import stylesMain from '~/styles/index.css'
import stylesUs from '~/styles/us.css'
import stylesWatch from '~/styles/watch.css'

export const meta = () => ({
  charset: "utf-8",
  title: "Guitar LA remix",
  viewport: "width=device-width,initial-scale=1",
});

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap'
    },
    {
      rel: 'stylesheet',
      href: stylesMain
    },
    {
      rel: 'stylesheet',
      href: stylesUs
    },
    {
      rel: 'stylesheet',
      href: stylesWatch
    },
    
  ]
}

export default function App() {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  function productoCarrito(producto){
    if(carrito.some( productoActual => productoActual.id === producto.id )){
        const carritoActualizado = carrito.map( productoActual => {
          if(productoActual.id === producto.id){
            productoActual.cantidad = producto.cantidad
          }
          return carritoActualizado
        })
        setCarrito(carritoActualizado)
      }else{
        setCarrito([...carrito, producto])
    }
  }

  function actualizarCantidad(){
    const carritoActualizado = carrito.map( productoActual => {
      if(productoActual.id === producto.id){
        productoActual.cantidad = producto.cantidad
      }
      return carritoActualizado
    })
    setCarrito(carritoActualizado)
  }

  function eliminarProducto(id){
    const carritoActualizado = carrito.filter( productoActual => productoActual.id != id )
    setCarrito(carritoActualizado)
  }

  return (
    <Document>
        <Outlet context={{
          carrito,
          productoCarrito,
          actualizarCantidad,
          eliminarProducto
        }}/>
    </Document>
  );
}

function Document({children}){

  return(
    <html lang="es">
        <head>  
            <Meta/>
            <Links/>
        </head>
        <body>      
            <Header/>    
            {children}
            <Footer/>
            <Scripts />
            <LiveReload/>
        </body>
    </html>
  )
}