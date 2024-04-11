import { BellSimple } from "phosphor-react"

const Navbar = () => {
  return (
    <div className="">
      <div className="container py-2 mx-auto flex justify-between">
        <div className="font-extrabold text-xl">
          Home
        </div>
        <div>
          <BellSimple size={24} />
        </div>
      </div>
    </div>
  )
}

export { Navbar }