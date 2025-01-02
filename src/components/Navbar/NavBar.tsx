import '@/index.css';
import ThemeToggler from '../ThemeToggler';

export default function NavBar() {
  function smoothScrollToDiv(id: string) {
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function pingIcon(id: string, toggle: boolean) {
    const ping = document.getElementById(id);
    if (ping && toggle) {
      console.log('mouseEnter');
      ping.style.opacity = '1';
      ping.style.transform = 'scale(2.3)';
      //ping.classList.add('animate-pingOnce');
      // setTimeout(() => {
      //   ping.style.opacity = '0';
      // }, 970);
    } else if (ping && !toggle) {
      console.log('mouseLeave');
      ping.style.transform = 'scale(0)';
      //ping.style.opacity = '0';
      //ping.classList.remove('animate-pingOnce');
    }
  }

  return (
    <>
      <nav className="fixed left-0 top-0 z-10 w-full overflow-hidden bg-gradient-to-b from-backgroundLighter to-transparent py-4 backdrop-blur-sm transition-transform ease-in-out">
        <div className="mx-auto flex max-w-screen-sm flex-nowrap items-center justify-between px-6">
          <div
            className="mr-auto flex w-fit cursor-pointer flex-row text-text drop-shadow-glow"
            onClick={() => smoothScrollToDiv('Bio')}
            onMouseEnter={() => pingIcon('logoPing', true)}
            onMouseLeave={() => pingIcon('logoPing', false)}
          >
            <svg
              fill="currentColor"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 122.3 122.3"
              stroke="currentColor"
              className="hover:!animate-none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {' '}
                <g>
                  {' '}
                  <path d="M116.3,15.15H6c-3.3,0-6,2.7-6,6v80c0,3.3,2.7,6,6,6h110.3c3.3,0,6-2.7,6-6v-80C122.3,17.85,119.6,15.15,116.3,15.15z M42.6,57.75l-19.7,19.7c-1.7,1.7-4.2,2.3-6.3,1.4c-4.3-1.8-5-7-2.1-9.9l11.2-11.2c2.3-2.3,2.3-6.1,0-8.5l-11.3-11.2 c-2.9-2.9-2.2-8.1,2.1-9.9c2.2-0.9,4.7-0.3,6.3,1.4l19.7,19.7c1.2,1.2,1.8,2.7,1.8,4.2S43.8,56.55,42.6,57.75z M86.5,79.15h-36 c-3.3,0-6-2.7-6-6s2.7-6,6-6h36c3.3,0,6,2.7,6,6S89.8,79.15,86.5,79.15z" />{' '}
                </g>{' '}
              </g>
            </svg>
            <div
              id="logoPing"
              className="-ml-1 mt-1 h-1 w-1 rounded-full bg-green-500 p-[1px] opacity-0 drop-shadow-glowGreen transition-all ease-in-out"
            ></div>
          </div>
          <div className="flex flex-nowrap items-center gap-4">
            <p
              onClick={() => smoothScrollToDiv('Work')}
              className="cursor-pointer transition-transform ease-in-out hover:scale-105"
            >
              work
            </p>
            <p
              onClick={() => smoothScrollToDiv('Projects')}
              className="cursor-pointer transition-transform ease-in-out hover:scale-105"
            >
              projects
            </p>
            <div className="hover:scale-10 duration-250 transition-transform ease-in-out hover:rotate-45 active:rotate-45">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
