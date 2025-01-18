import AboutMe from "../Components/AboutMe";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Social from "../Components/Social";
import Services from "../Components/Services";


export default function About() {
    return (
        <div className="grid gap-16">
            <div className="grid justify-start items-start gap-16 md:grid-cols-2">
                <AboutMe />
                <Education />
                <Skills />
                <Services />
            </div>
            <Social />
        </div>
    )
} 