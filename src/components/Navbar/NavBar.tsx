import '@/index.css';
import ThemeToggler from '../ThemeToggler';
import NavIcon from '@/assets/nav-icon.svg';

export default function NavBar() {
  return (
    <>
      <nav className="sticky top-0 z-10 mx-auto -mb-14 flex h-fit w-full max-w-full flex-row flex-wrap items-center justify-end gap-4 rounded-xl px-6 py-4 text-center backdrop-blur-sm transition-transform ease-in-out md:gap-8">
        <a
          href="#"
          className="transition-transform ease-in-out hover:scale-105"
        >
          Home
        </a>
        <a
          href="#Work"
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
