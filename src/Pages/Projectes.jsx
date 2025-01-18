// ICON
import { GoProjectSymlink } from "react-icons/go"
import { FaGithub } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

// IMG
import protofolio from "../assets/imgs/protofolio.png"
import Solar from "../assets/imgs/Solar-Community.png"
import Exclusive from "../assets/imgs/Exclusive-Shopping.png"
import Shopping from "../assets/imgs/Shopping Chart.png"
import { useState } from "react";
export default function Projectes() {
    // is hover
    const [isHover, setIsHover] = useState(null);
    return (
        <div className="grid justify-center gap-5">
            <div className="space-y-2">
                <h1 className="font-bold text-3xl text-zinc-900 dark:text-zinc-200"><div className="flex items-center gap-2">Web Projects<GoProjectSymlink /></div><hr /></h1>
                <h5 className="text-zinc-700 dark:text-zinc-300 text-sm">Exploring the world of projects. <br /> This is just a glimpse of what l bring to the table. Stay tuned for a wave of innovation about to unfold!</h5>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <div key={1} className="text-center shadow-lg dark:shadow-zinc-400 w-64 relative ">
                    <img src={protofolio} alt="Project Photo" className="transition duration-300 ease-in-out" onMouseEnter={() => setIsHover(1)} onMouseLeave={() => setIsHover(null)} />
                    {
                        isHover === 1 &&
                        <div onMouseEnter={() => setIsHover(1)} onMouseLeave={() => setIsHover(null)} className="absolute left-0 right-0 bottom-0 top-0 p-5 bg-zinc-900 bg-opacity-85 dark:bg-zinc-200 dark:bg-opacity-90 text-white dark:text-black grid items-center">
                            <div className="basis-9/12 space-y-2">
                                <h6 className="font-bold  text-[10px]">Project Name: My protofolio.</h6>
                                <p className='text-[8px]'>Website about My protofolio . This project I used HTML, Tailwind CSS and ReactJS.</p>
                            </div>
                            <div className="flex gap-5 justify-center items-center">
                                <a href=""><IoMdEye />
                                </a>
                                <a href="https://github.com/Aysha-Kassem/Aisha-Portfolio">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    }
                </div >
                <div key={2} className="text-center shadow-lg dark:shadow-zinc-400 w-64 relative ">
                    <img src={Solar} alt="Project Photo" className="transition duration-300 ease-in-out" onMouseEnter={() => setIsHover(2)} onMouseLeave={() => setIsHover(null)} />
                    {
                        isHover === 2 &&
                        <div onMouseEnter={() => setIsHover(2)} onMouseLeave={() => setIsHover(null)} className="absolute left-0 right-0 bottom-0 top-0 p-5 bg-zinc-900 bg-opacity-85 dark:bg-zinc-200 dark:bg-opacity-90 text-white dark:text-black grid items-center">
                            <div className="basis-9/12 space-y-2">
                                <h6 className="font-bold  text-[10px]">Project Name: Solar Community.</h6>
                                <p className='text-[8px]'>Website about solar community. This project I used HTML, CSS and JavaScript.</p>
                            </div>
                            <div className="flex gap-5 justify-center items-center">
                                <a href="https://aysha-kassem.github.io/Solar-Community/"><IoMdEye />
                                </a>
                                <a href="https://github.com/Aysha-Kassem/Solar-Community">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    }
                </div >
                <div key={3} className="text-center shadow-lg dark:shadow-zinc-400 w-64 relative ">
                    <img src={Exclusive} alt="Project Photo" className="transition duration-300 ease-in-out" onMouseEnter={() => setIsHover(3)} onMouseLeave={() => setIsHover(null)} />
                    {
                        isHover === 3 &&
                        <div onMouseEnter={() => setIsHover(3)} onMouseLeave={() => setIsHover(null)} className="absolute left-0 right-0 bottom-0 top-0 p-5 bg-zinc-900 bg-opacity-85 dark:bg-zinc-200 dark:bg-opacity-90 text-white dark:text-black grid items-center">
                            <div className="basis-9/12 space-y-2">
                                <h6 className="font-bold  text-[10px]">Project Name: Exclusive-Shopping.</h6>
                                <p className='text-[8px]'>Website about Shopping Cart . This project I used HTML, Tailwind CSS and ReactJS.</p>
                            </div>
                            <div className="flex gap-5 justify-center items-center">
                                <a href="https://ExclusiveShopping.surge.sh"><IoMdEye />
                                </a>
                                <a href="https://github.com/Aysha-Kassem/-Exclusive-Shopping">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    }
                </div >
                <div key={4} className="text-center shadow-lg dark:shadow-zinc-400 w-64 relative ">
                    <img src={Shopping} alt="Project Photo" className="transition duration-300 ease-in-out" onMouseEnter={() => setIsHover(4)} onMouseLeave={() => setIsHover(null)} />
                    {
                        isHover === 4 &&
                        <div onMouseEnter={() => setIsHover(4)} onMouseLeave={() => setIsHover(null)} className="absolute left-0 right-0 bottom-0 top-0 p-5 bg-zinc-900 bg-opacity-85 dark:bg-zinc-200 dark:bg-opacity-90 text-white dark:text-black grid items-center">
                            <div className="basis-9/12 space-y-2">
                                <h6 className="font-bold  text-[10px]">Project Name: Shopping Chart.</h6>
                                <p className='text-[8px]'>Website about Shopping Cart . This project I used HTML, Tailwind CSS and JavaScript.</p>
                            </div>
                            <div className="flex gap-5 justify-center items-center">
                                <a href="https://aysha-kassem.github.io/ShoppingChart/"><IoMdEye />
                                </a>
                                <a href="https://github.com/Aysha-Kassem/ShoppingChart">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    }
                </div >
            </div>
            <h5 className="text-zinc-700 dark:text-zinc-300 text-sm flex justify-center items-center flex-col md:flex-row md:gap-3">
                <div className="inline text-center">I'm a collaborative team player, comfortable with GitHub <FaGithub className="inline" />.</div>
                <a href="https://github.com/Aysha-Kassem" className="font-bold border-b-2 border-black">Explore my projects for yourself.</a></h5>
        </div>
    )
} 