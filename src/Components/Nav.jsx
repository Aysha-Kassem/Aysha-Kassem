// React
import { useState } from 'react';

// LOGO
import LOGO from "../assets/imgs/icon.png"

// ICON
import { HiOutlineViewList } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

//react router dom
import { Link } from 'react-router-dom';

// Redux Store
import { useDispatch } from 'react-redux';
import { openDarkMode, closeDarkMode, openModal } from '../redux/listSlice';


export default function Nav() {
    const [openList, setOpenList] = useState(false);

    // Dispatch
    const dispatach = useDispatch();

    return (
        <nav>
                <div className='flex flex-col dark:text-zinc-400'>
                    <div className="py-3 pt-7 p-5 flex justify-between items-center font-serif text-xl md:justify-evenly md:gap-10 lg:gap-36">
                        <Link onClick={() => { setOpenList(false) }} to="/" className="flex justify-center items-center gap-1">
                            <img className="w-6 rounded-full dark:bg-zinc-400" src={LOGO} alt="LOGO" />
                            <h2 className="font-bold">AYSHA</h2>
                        </Link>
                        <div className="gap-10 hidden md:flex">
                            <Link to="/about">About Me</Link>
                            <Link to="/projectes">Projectes</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="gap-10 hidden items-center md:flex">
                            <MdOutlineDarkMode className='dark:hidden' onClick={() => { dispatach(openDarkMode()) }} />
                            <MdDarkMode className="hidden dark:block" onClick={() => { dispatach(closeDarkMode()) }} />

                        </div>
                        <div className="flex items-center gap-10 md:hidden relative">
                            <MdOutlineDarkMode className='dark:hidden cursor-pointer' onClick={() => { dispatach(openDarkMode()) }} />
                            <MdDarkMode className="cursor-pointer hidden dark:block" onClick={() => { dispatach(closeDarkMode()) }} />
                            {
                                !openList &&
                                <HiOutlineViewList onClick={() => { setOpenList(true) }} />
                            }
                            {
                                openList &&
                                <IoCloseSharp onClick={() => { setOpenList(false) }} />
                            }
                        </div>
                    </div>
                    {
                        openList &&
                        <div className="flex flex-col items-center text-center gap-5 relative p-5 shadow-lg md:hidden dark:shadow-zinc-600">
                            <div className='pb-5 flex flex-col gap-2 border-b-2 w-3/4'>
                                <Link onClick={() => { setOpenList(false) }} to="/about">About Me</Link>
                                <Link onClick={() => { setOpenList(false) }} to="/projectes">Projectes</Link>
                                <Link onClick={() => { setOpenList(false) }} to="/contact">Contact</Link>
                            </div>
                            <div className='font-bold'>Welcom to my page</div>
                        </div>
                    }
                </div>
        </nav>
    )
}








