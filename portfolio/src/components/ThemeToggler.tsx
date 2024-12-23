import '@/index.css'
import { useEffect, useState, useRef } from 'react'
import reactLogo from '@/assets/react.svg'
export default function ThemeToggler () {
    const [themeColor, setTheme] = useState('light');
    const themeButton = useRef(null);

    function toggleTheme () {
        if (themeColor == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    useEffect( () => {
        console.log(`Current theme: ${themeColor} .`);
        document.documentElement.setAttribute("data-theme", themeColor);
    }, [themeColor]);

    return (
        <>
        <div className='flex justify-center content-center min-w-fit h-auto absolute right-4 top-4 z-10 p-1 rounded-full bg-red-500'>
            <button ref={themeButton} onClick={toggleTheme}>
                <img src={reactLogo} alt="" />
            </button>
        </div>
        </>
    )
}