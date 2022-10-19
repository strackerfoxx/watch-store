import { useLoaderData } from "@remix-run/react"
import {getWatches} from '~/api/watch'

import ListadoWatches from "~/components/listado-watches"

export async function loader(){
    const watches = await getWatches()
    return watches.data
}

export default function Index() {
    const watches = useLoaderData()
  return (
    <div>
        <ListadoWatches watches={watches} />
    </div>
  )

}