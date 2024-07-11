
export default function ProjectBox({ projectPhoto, nameProject, aboutProject, linkProject }) {

    return (
        <div className="text-center shadow-lg dark:shadow-zinc-400 w-64 h-52 ">
            <img src={projectPhoto} alt="Project Photo" className="transition duration-300 ease-in-out" />
            <div className="px-5 py-2 bg-zinc-200 dark:bg-zinc-900 grid gap-1">
                <div className="basis-9/12 flex flex-col text-zinc-600 dark:text-zinc-400">
                    <h6 className="font-bold  text-[10px] text-zinc-900 dark:text-zinc-200">Project Name: {nameProject}.</h6>
                    <p className='text-[8px] text-zinc-800 dark:text-zinc-300'>{aboutProject}</p>
                </div>
                <button className="basis-3/12 bg-zinc-800 text-[8px] my-1 p-1 hover:bg-zinc-900 text-zinc-50 rounded-md dark:bg-zinc-300 dark:text-zinc-700 dark:hover:bg-zinc-400">
                    <a href={linkProject}>View Website</a>
                </button>
            </div>
        </div >
    )
}