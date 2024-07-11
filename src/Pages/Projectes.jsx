// ICON
import { GoProjectSymlink } from "react-icons/go"
import { FaGithub } from "react-icons/fa";

// Components
import ProjectBox from "../Components/ProjectBox"

// IMG
import protofolio from "../assets/imgs/protofolio.png"

export default function Projectes() {
    return (
        <div className="grid justify-center gap-5">
            <div>
                <h1 className="font-bold text-3xl text-zinc-900 dark:text-zinc-200"><div className="flex items-center gap-2">Web Projects<GoProjectSymlink /></div><hr /></h1>
                <h5 className="text-zinc-700 dark:text-zinc-300 text-sm">Exploring the world of projects. <br /> This is just a glimpse of what l bring to the table. Stay tuned for a wave of innovation about to unfold!</h5>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <ProjectBox projectPhoto={protofolio} nameProject="My protofolio"
                    aboutProject="This project I using (HTML, CSS, React, Tailwind)" />
                <ProjectBox projectPhoto={protofolio} nameProject="My protofolio"
                    aboutProject="This project I using (HTML, CSS, React, Tailwind)" />
                <ProjectBox projectPhoto={protofolio} nameProject="My protofolio"
                    aboutProject="This project I using (HTML, CSS, React, Tailwind)" />
                <ProjectBox projectPhoto={protofolio} nameProject="My protofolio"
                    aboutProject="This project I using (HTML, CSS, React, Tailwind)" />
            </div>
            <h5 className="text-zinc-700 dark:text-zinc-300 text-sm flex justify-center items-center flex-col md:flex-row md:gap-3">
                <div className="inline text-center">I'm a collaborative team player, comfortable with GitHub <FaGithub  className="inline"/>.</div>
                <a href="https://github.com/Aysha-Kassem" className="font-bold border-b-2 border-black">Explore my projects for yourself.</a></h5>
        </div>
    )
} 