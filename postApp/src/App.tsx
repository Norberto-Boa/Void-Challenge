import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import Posts from "./components/Posts"

function App() {

  return (
    <div>
      <div className="lg:px-96">
        <Navbar />
        <Header />
      </div>
      <div className="h-[1px] bg-zinc-400 " />
      <div className="lg:px-96">
        <Posts />
      </div>
    </div>
  )
}

export default App
