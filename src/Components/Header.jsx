// ICON
import { CiSaveDown1 } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";


// IMG
import programing from "../assets/imgs/programer.jpg"

export default function Header() {

    return (
        <header className=" grid gap-10 md:grid-cols-2">
            <div className="grid md:my-8">
                <div className="space-y-2">
                    <div>
                        <h3 className="text-zinc-800 dark:text-zinc-300 font-bold flex gap-1 items-center"><FaArrowRightLong />ATHIS IS ME</h3>
                        <h1 className=" font-bold text-2xl text-zinc-900 dark:text-zinc-200">AYSHA KASSEM <hr /></h1>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Hello, I'm Aysha Kassem, a seasoned Web Designer & Developer
                        with a passion for continuous learning and professional growth.<br />
                        I possess extensive expertise in both front-end <div className="hidden">and back-end</div> development techniques.</p>
                </div>

                <a href="https://drive.google.com/drive/folders/1bza3mMwSRCPbVWFXpAXbLMRMzcxXi7xt?usp=drive_link" className="max-w-sm flex items-center gap-2 bg-zinc-800 text-zinc-200 dark:text-zinc-700 p-3 my-3 rounded-lg hover:bg-zinc-800 dark:bg-zinc-200 dark:hover:bg-zinc-300" >
                    <CiSaveDown1 className="text-xl" />
                    <p>Download CV</p>
                </a>
            </div>
            <div className="flex shrink">
                <img src={programing} alt="programming" className="max-h-80 dark:bg-zinc-200 m-auto" />
            </div>
        </header>
    )
} 