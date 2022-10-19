export async function getWatches(){
    const respuesta = await fetch(`${process.env.API_URL}/watches?populate=imagen`)
    return await respuesta.json()
}
export async function getWatch(id){
    const respuesta = await fetch(`${process.env.API_URL}/watches?filters[id]=${id}&populate=imagen`)
    return await respuesta.json()
}