import { useState} from "react"
import '../index.css'
import reactLogo from '../assets/react.svg'

export function Sidebar () {
    return (
        <>
        <div className="bg-zinc-950 h-full flex flex-col w-1/4 justify-center items-center gap-8">
            <a href="https://react.dev" target="_blank" rel="noopener" className="ease-in-out duration-300 w-auto rounded-2xl h-auto text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-110 p-8 flex justify-center items-center" >
                <img src={ reactLogo } alt="sidebar logo"/>
            </a>
           
            <button className="ease-in-out duration-300 w-1/2 rounded-2xl h-4 text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-110 p-8 flex justify-center items-center">TEST</button>
            <button className="ease-in-out duration-300 w-1/2 rounded-2xl h-4 text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-110 p-8 flex justify-center items-center">TEST</button>
            <button className="ease-in-out duration-300 w-1/2 rounded-2xl h-4 text-white bg-zinc-900 hover:bg-zinc-800 hover:scale-110 p-8 flex justify-center items-center">TEST</button>
        </div>
        </>
    )
}
