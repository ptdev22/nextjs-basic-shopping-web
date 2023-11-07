
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
export default function Layout({ children }) {
  // console.log(children)
  return (
        <div>
            <Navbar/> { children }<Footer/>
        </div>
  )
}
