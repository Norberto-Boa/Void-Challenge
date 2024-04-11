import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import Posts from "./components/Posts"

function App() {

  return (
    <div className="lg:px-96">
      <Navbar />
      <Header />
      <Posts />
    </div>
  )
}

export default App
