import Header from "../Components/Header"
import About from "./About"
import Contact from "./Contact"
import Projectes from "./Projectes"

export default function Home() {
    return(
        <div className="grid gap-20">
            <Header/>
            <hr />
            <About />
            <hr />
            <Projectes />
            <hr />
            <Contact />
        </div>
    )
    
}