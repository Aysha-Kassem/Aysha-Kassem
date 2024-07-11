// ICON
import { MdScreenshotMonitor } from "react-icons/md";


export default function Services() {
    return (
        <div className="grid gap-5">
            <div>
                <h3 className="font-bold text-2xl text-zinc-900 dark:text-zinc-200">Services. <hr /></h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm">Crafting Web Experiences! From sleek designs to dynamic apps, I bring your digital ideas to life. Let's create a standout online presence together!</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
                <div className="p-5 flex flex-col gap-2 justify-center items-center border text-xs text-center rounded-md">
                    <MdScreenshotMonitor className="size-2/12" />
                    <h4 className="text-zinc-800 dark:text-zinc-300">RESPONSIVE DESIGN MASTERY</h4>
                    <p className="text-zinc-700 dark:text-zinc-500 ">Delight your users with websites that adapt flawlessly to any device. <br />
                        My frontend skills ensure a visually stunning and responsive user interface, offering an optimal experience on every screen.</p>
                </div>

            </div>
        </div>
    )
} 