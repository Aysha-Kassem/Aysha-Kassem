// Componants
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

//react router dom
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from "./Pages/Home";
import Projectes from "./Pages/Projectes";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Redux Store
import { useSelector } from 'react-redux';

// Icons
import { FaWhatsapp } from "react-icons/fa";


export default function App() {
    const { darkMode } = useSelector(Store => Store.listSlice);
    return (
        <div className={`${darkMode ? "dark" : ""} relative`}>
            <div className="min-h-svh bg-slate-50 dark:bg-zinc-800 transition-all">
                <Nav />
                <div className="mt-5 p-10 md:px-16">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projectes" element={<Projectes />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>
            <div className="fixed right-5 bottom-5 bg-zinc-900 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 rounded-full text-xl p-2 ">
                <a href="https://wa.me/201096384780"><FaWhatsapp /></a>
            </div>
        </div>
    )
} 