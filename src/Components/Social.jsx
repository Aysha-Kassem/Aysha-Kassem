// ICON
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Social(options) {
    return(
        <div className="grid gap-5 p-15 py-5">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-xl font-bold dark:text-zinc-400">Follow me</h1>
                <hr className="size-5/12" />
            </div>
                <div className="flex justify-center gap-5 items-center md:gap-16">
                    <a href="https://www.instagram.com/aish5.9?igsh=MTRkMXluZGUwOHl3OA==">
                        <IoLogoInstagram className="text-2xl bg-slate-200 size-12 p-3 rounded-md" />
                    </a>
                    <a href="https://www.linkedin.com/in/aysha-kassem-b137371b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <CiLinkedin className="text-2xl bg-slate-200 size-12 p-3 rounded-md" />
                    </a>
                    <a href="https://www.facebook.com/shoshokassem59?mibextid=ZbWKwL">
                        <FaFacebookF className="text-2xl bg-slate-200 size-12 p-3 rounded-md" />
                    </a>
                    <a href="https://x.com/aish559?t=-5-UnYdZA5vLR7Ka4J_A9g&s=09">
                        <FaXTwitter className="text-2xl bg-slate-200 size-12 p-3 rounded-md" />
                    </a>
                </div>
            </div>
    )
}