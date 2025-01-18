// ICON
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {

    return (
        <footer className="pt-16 md:pt-10">
            <hr />
            <div className="grid text-center gap-1 py-3 px-12 text-xs">
                <h1 className=" dark:text-zinc-400">Copyright &copy;2024 All rights reserved | Developed by <strong>Aysha Kassem</strong> </h1>
                <div className="flex justify-center gap-1 items-center">
                    <a href="https://www.instagram.com/aish5.9?igsh=MTRkMXluZGUwOHl3OA==">
                        <IoLogoInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/aysha-kassem-b137371b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <CiLinkedin />
                    </a>
                    <a href="https://www.facebook.com/shoshokassem59?mibextid=ZbWKwL">
                        <FaFacebookF />
                    </a>
                    <a href="https://x.com/aish559?t=-5-UnYdZA5vLR7Ka4J_A9g&s=09">
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </footer>
    )
}