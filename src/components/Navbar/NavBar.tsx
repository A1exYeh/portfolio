import '@/index.css';
import ThemeToggler from '../ThemeToggler';

export default function NavBar() {
  return (
    <>
      <nav className="align-center z-10 mx-auto flex h-fit w-fit max-w-full flex-row justify-evenly md:gap-12 gap-4 rounded-xl transition-transform ease-in-out bg-primaryTransparent backdrop-blur-sm px-6 py-4 text-center font-bold sticky -mb-14 top-4">
        <a
          href="#"
          className="transition-transform ease-in-out hover:scale-105"
        >
          Home
        </a>
        <a
          href="#"
          className="transition-transform ease-in-out hover:scale-105"
        >
          About
        </a>
        <a
          href="#"
          className="transition-transform ease-in-out hover:scale-105"
        >
          Work
        </a>
        <a
          href="#"
          className="transition-transform ease-in-out hover:scale-105"
        >
          Projects
        </a>
        <div className="hover:scale-10 duration-250 transition-transform ease-in-out hover:rotate-45 active:rotate-45">
          <ThemeToggler />
        </div>
      </nav>
    </>
  );
}
