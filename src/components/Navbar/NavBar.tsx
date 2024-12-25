import '@/index.css'
import ThemeToggler from '../ThemeToggler';

export default function NavBar () {
    return (
        <>
        <nav className='flex flex-row justify-evenly text-center font-bold align-center gap-12 h-fit w-fit px-6 py-4 bg-primary z-10 mx-auto rounded-xl backdrop-blur-lg bg-opacity-55'>
            <a href="#" className='hover:scale-105 ease-in-out transition-transform'>Home</a>
            <a href="#" className='hover:scale-105 ease-in-out transition-transform'>About</a>
            <a href="#" className='hover:scale-105 ease-in-out transition-transform'>Work</a>
            <a href="#" className='hover:scale-105 ease-in-out transition-transform'>Projects</a>
            <div className='hover:scale-10 hover:rotate-45 ease-in-out transition-transform duration-250'>
            <ThemeToggler />
            </div>
        </nav>
        </>
    );
};