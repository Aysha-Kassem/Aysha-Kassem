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

export default function App() {
    const { darkMode } = useSelector(Store => Store.listSlice);
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-slate-50 dark:bg-zinc-800 h-full transition-all">
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
        </div>
    )
} 