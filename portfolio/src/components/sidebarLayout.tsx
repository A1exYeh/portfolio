import { useState} from "react"
import '../index.css'
import { Sidebar} from "./sidebar"
import { PageContainer} from './pageContainer.tsx'

function SidebarLayout () {
    return (
        <>
        <div className="flex flex-row h-full w-full">
            <Sidebar />
            <PageContainer />
        </div>
        </>
    )
}

export default SidebarLayout