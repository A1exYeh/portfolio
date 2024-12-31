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
    } else {
      setTheme({
        ...theme,
        color: 'light',
        img: darkIcon,
      });
    }
  }

  //useEffect connected to 'theme' changes the data-theme variable on theme change
  useEffect(() => {
    console.log(`Current theme: ${theme.color} .`);
    document.documentElement.setAttribute('data-theme', theme.color);
  }, [theme]);

  return (
    <>
      <div
        ref={toggleIcon}
        className="align-center z-10 flex h-auto w-[1.25rem] justify-center"
      >
        <button onClick={toggleTheme}>
          <img src={theme.img} alt="" />
        </button>
      </div>
    </>
  );
}
