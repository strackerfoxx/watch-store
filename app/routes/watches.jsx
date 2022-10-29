import { Outlet, useOutletContext } from "@remix-run/react"

export default function Watches() {

  return (
    <div>
        <Outlet context={useOutletContext()}/>
    </div>
  )
} 
