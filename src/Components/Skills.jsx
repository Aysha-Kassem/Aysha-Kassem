// ICON
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";



export default function Skills (){
    return(
        <div className="grid gap-2">
                <h3 className="font-bold text-2xl text-zinc-900 dark:text-zinc-200">Skills. <hr /></h3>
                <div className="grid gap-2">
                    <div className="text-zinc-700 dark:text-zinc-300 grid gap-3">
                        <h3>Tools Expertness For Web</h3>
                        <div className="flex flex-wrap gap-3">
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <FaHtml5 className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">HTML5</h5>
                            </div>
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <FaCss3 className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">CSS3</h5>
                            </div>
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <FaHtml5 className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">Javascript</h5>
                            </div>
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <FaBootstrap className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">Bootstrap</h5>
                            </div>
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <SiTailwindcss className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">Tailwind</h5>
                            </div>
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <FaReact className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">ReactJS</h5>
                            </div>
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <SiReactrouter
                                className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">React Router Dom</h5>
                            </div>
                            <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <SiRedux  className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">React Redux</h5>
                            </div>
                            {/* <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                <DiJqueryLogo className="size-5 dark:text-zinc-400" />
                                <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">jQuery</h5>
                            </div> */}
                            <div className="w-36 h-16 hidden"></div>

                        </div>
                    </div>
                    <div className="grid gap-5">
                        <div className="text-zinc-700 dark:text-zinc-300 grid gap-3">
                            <h3>More Languages</h3>
                            <div className="flex flex-wrap gap-3">
                                <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                    <TbBrandCpp />
                                    <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">C</h5>
                                </div>
                                <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                    <FaJava className="size-5 dark:text-zinc-400" />
                                    <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">JAVA</h5>
                                </div>
                                <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                    <FaPython className="size-5 dark:text-zinc-400" />
                                    <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">Python</h5>
                                </div>
                            </div>
                        </div>
                        <div className="text-zinc-700 dark:text-zinc-300 grid gap-3">
                            <h3>Techical Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                    <FaWordpressSimple className="size-5 dark:text-zinc-400" />
                                    <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">Word</h5>
                                </div>
                                <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                    <SiMicrosoftpowerpoint className="size-5 dark:text-zinc-400" />
                                    <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">PowerPoint</h5>
                                </div>
                                <div className=" p-2 w-32 h-16 flex flex-col justify-center items-center border border-zinc-800 dark:border-zinc-200 rounded-md gap-1">
                                    <SiMicrosoftexcel className="size-5 dark:text-zinc-400" />
                                    <h5 className="text-zinc-600 dark:text-zinc-400 text-sm font-thin">Excel</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

    )
}