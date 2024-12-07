import { useState} from "react"
import '../index.css'

export function PageContainer () {
    return (
        <>
        <div className="bg-zinc-900 h-full flex flex-col w-3/4 justify-center items-center gap-8">
            <button className="ease-in-out duration-300 w-1/2 rounded-2xl h-4 text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-110 p-8 flex justify-center items-center">PAGE ELEMENT 1</button>
            <button className="ease-in-out duration-300 w-1/2 rounded-2xl h-4 text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-110 p-8 flex justify-center items-center">PAGE ELEMENT 2</button>
            <button className="ease-in-out duration-300 w-1/2 rounded-2xl h-4 text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-110 p-8 flex justify-center items-center">PAGE ELEMENT 3</button>
        </div>
        </>
    )
}
