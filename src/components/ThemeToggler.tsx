import '@/index.css';
import { useEffect, useState, useRef } from 'react';
import { MutableRefObject } from 'react';
import darkIcon from '@/assets/dark-icon.svg';
import lightIcon from '@/assets/light-icon.svg';
export default function ThemeToggler() {
  //usestate sets out variable
  const [theme, setTheme] = useState({
    color: 'light',
    img: darkIcon,
  });
  //useref serves as a reference to the button element
  const toggleIcon = useRef() as MutableRefObject<HTMLDivElement>;

  //toggle theme sets the 'theme' variable, and the icon (swapped icons due to the toggle nature)
  function toggleTheme() {
    if (theme.color == 'light') {
      setTheme({
        ...theme,
        color: 'dark',
        img: lightIcon,
      });
      toggleIcon.current.style.background = 'black';
    } else {
      setTheme({
        ...theme,
        color: 'light',
        img: darkIcon,
      });
      toggleIcon.current.style.background = 'blue';
    }
  }

  //useEffect connected to 'theme' changes the data-theme variable on theme change
  useEffect(() => {
    console.log(`Current theme: ${theme.color} .`);
    document.documentElement.setAttribute('data-theme', theme.color);
    toggleIcon.current.style.background =
      theme.color == 'light' ? 'black' : 'white';
  }, [theme]);

  return (
    <>
      <div
        ref={toggleIcon}
        className="absolute right-4 top-4 z-10 flex h-auto w-10 content-center justify-center rounded-full p-1"
      >
        <button onClick={toggleTheme}>
          <img src={theme.img} alt="" />
        </button>
      </div>
    </>
  );
}
