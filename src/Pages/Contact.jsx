// ICON
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoIosShareAlt } from "react-icons/io";


export default function Contact() {
    return (
        <div className="grid md:grid-cols-2 gap-5">
            <div className="md:py-32 flex flex-col gap-5">
                <h3 className="font-bold text-3xl text-black dark:text-white">Contact with me. <hr className="size-2/3" /></h3>
                <div className="grid gap-5">
                    <div>
                        <div className="font-bold">
                            <h3 className="text-lg text-zinc-800 dark:text-zinc-300">Are you ready to work together?</h3>
                            <p className="text-zinc-700 dark:text-zinc-500 flex items-center gap-1"><IoIosShareAlt />Let's start a project! Hire me.</p>

                        </div>
                        <div className="text-zinc-600 dark:text-zinc-400">
                            <p className="text-sm max-w-md">I'm Open To Any Communication! Feel Free To Contact Me Any Convenient Way! I'm Always Interested In Hearing About New Projects And Opportunities.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg text-zinc-900 dark:text-zinc-200">Contact details</h1>
                        <div className="text-zinc-600 dark:text-zinc-400">
                            <h3 className="flex items-center gap-2">
                                <MdOutlineEmail />
                                ayshakassem59@gmail.com
                            </h3>
                            <h3 className="flex items-center gap-2">
                                <CiPhone />
                                +201551944713
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" text-zinc-900 dark:text-zinc-200 rounded-lg flex flex-col justify-around gap-7 p-5 px-7 py-10 shadow-lg dark:shadow-md dark:shadow-zinc-400">
                <h1 className="font-bold text-xl">Contact Form</h1>
                <div className="flex flex-col gap-5">
                    <div className={style.input_box}>
                        <label for="fname">Full Name</label>
                        <input className={style.input} id="fname" type="text" placeholder="Your Name" />
                    </div>
                    <div className={style.input_box}>
                        <label for="email">Email</label>
                        <input className={style.input} id="email" type="email" placeholder="Email" />
                    </div>
                    <div className={style.input_box}>
                        <label for="email">Phone</label>
                        <input className={style.input} id="phone" type="tel" placeholder="Phone" />
                    </div>
                    <div className={style.input_box}>
                        <label for="subject">Subject</label>
                        <input className={`${style.input} h-14`} id="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className={style.input_box}>
                        <label for="massage">Message</label>
                        <textarea className={`${style.input} h-36`} id="massage" type="text" placeholder='Project description' />
                    </div>
                    <button className="bg-black hover:bg-zinc-800 text-slate-100 rounded-lg w-36 p-3 dark:bg-zinc-300 dark:text-zinc-700 dark:hover:bg-zinc-400">Send Message</button>
                </div>
            </div>

        </div>
    )
}


const style = {
    input: "rounded-lg bg-slate-50 p-3",
    input_box: "flex flex-col",
}