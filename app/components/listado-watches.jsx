import Watch from "./watch"

export default function listadoWatches({watches}) {
  return (
    <>
      <h2 className="heading">Our most Popular Watches</h2>
      <div className="watches-grid">
          {watches.map( watch => (
                <Watch watch={watch} key={watch.id} />
          ) )}
      </div>
    </>
  )
}
