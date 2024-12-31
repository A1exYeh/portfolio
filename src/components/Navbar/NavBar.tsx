import '@/index.css';
import ThemeToggler from '../ThemeToggler';

export default function NavBar() {
  function smoothScrollToDiv (id: string) {
    const targetDiv = document.getElementById(id);
    if (targetDiv) {
      targetDiv.scrollIntoView({behavior: "smooth"});
    }
  }


  return (
    <>
      <nav className="fixed w-full top-0 z-10 py-4 backdrop-blur-sm transition-transform ease-in-out">
        <div className='mx-auto max-w-screen-sm flex flex-nowrap justify-between items-center gap-8 md:gap-12 px-6'>
        <a href="#" className="mr-auto text-text hover:animate-spin">
          <svg
            fill="currentColor"
            height="34"
            width="34"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.001 512.001"
            stroke="currentColor"
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
                <g>
                  {' '}
                  <path d="M363.507,340.876H148.493c-8.903,0-16.12,7.218-16.12,16.12c0,8.903,7.218,16.12,16.12,16.12h215.013 c8.903,0,16.12-7.218,16.12-16.12C379.626,348.094,372.41,340.876,363.507,340.876z" />{' '}
                </g>{' '}
              </g>{' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d="M450.466,199.973c-8.441,0-16.602,1.715-24.08,4.889v-9.548c0-93.945-76.435-170.374-170.386-170.374 S85.614,101.37,85.614,195.314v9.548c-7.478-3.174-15.639-4.889-24.08-4.889C27.604,199.973,0,227.577,0,261.507 c0,34.871,29.147,63.059,64.323,61.476c-9.829,90.584,81.258,164.077,191.678,164.077c110.219,0,201.447-73.274,191.68-164.077 c35.153,1.578,64.321-26.583,64.321-61.476C512,227.577,484.396,199.973,450.466,199.973z M85.614,265.485 c-4.67,6.984-8.967,14.817-12.349,22.883c-19.304,8.448-41.023-5.783-41.023-26.86c0-16.152,13.141-29.293,29.293-29.293 c9.708,0,18.645,4.751,24.08,12.605V265.485z M117.854,195.314h0.001c0-76.167,61.972-138.133,138.145-138.133 s138.146,61.966,138.146,138.133v35.268c-10.58-8.551-23.214-16.656-37.073-23.359v-24.808c0-32.31-26.286-58.596-58.597-58.596 c-16.702,0-31.793,7.022-42.476,18.271c-10.684-11.249-25.775-18.271-42.476-18.271c-32.31,0-58.597,26.286-58.597,58.596v24.806 c-12.943,6.254-25.784,14.206-37.073,23.334V195.314z M256.001,454.82c-104.245,0-181.954-73.625-154.854-149.262 c0.049-0.127,0.109-0.249,0.155-0.378c12.287-33.91,43.057-58.816,76.007-72.699c5.976-2.518,9.861-8.371,9.861-14.856v-35.208 c0-14.532,11.823-26.355,26.356-26.355s26.356,11.823,26.356,26.355c0,8.903,7.218,16.12,16.12,16.12 c8.903,0,16.12-7.218,16.12-16.12c0-14.532,11.823-26.355,26.356-26.355s26.356,11.823,26.356,26.355v35.208 c0,6.483,3.884,12.338,9.864,14.857c33.443,14.084,63.844,39.137,76.008,72.709C438.235,381.013,360.347,454.82,256.001,454.82z M438.736,288.367c-3.212-7.663-7.462-15.572-12.349-22.881V244.82c5.435-7.855,14.372-12.605,24.08-12.605 c16.152,0,29.293,13.141,29.293,29.293C479.759,282.579,458.045,296.819,438.736,288.367z" />{' '}
                </g>{' '}
              </g>{' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d="M237.09,291.29l-4.186-4.186c-6.295-6.294-16.502-6.294-22.798,0s-6.296,16.502,0,22.798l4.186,4.186 c6.296,6.296,16.502,6.296,22.798,0C243.386,307.793,243.386,297.586,237.09,291.29z" />{' '}
                </g>{' '}
              </g>{' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d="M301.893,287.104c-6.294-6.294-16.502-6.294-22.798,0l-4.186,4.186c-6.296,6.294-6.296,16.502,0,22.798 c6.296,6.297,16.502,6.296,22.798,0l4.186-4.186C308.189,303.608,308.189,293.4,301.893,287.104z" />{' '}
                </g>{' '}
              </g>{' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <circle cx="215.498" cy="238.4" r="21.325" />{' '}
                </g>{' '}
              </g>{' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <circle cx="297.154" cy="238.4" r="21.325" />{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        </a>
        <div className='flex flex-nowrap gap-8'>
        <p
        onClick={() => smoothScrollToDiv('Bio')}
          className="transition-transform ease-in-out hover:scale-105 cursor-pointer"
        >
          Home
        </p>
        <p
        onClick={() => smoothScrollToDiv('Work')}
          className="transition-transform ease-in-out hover:scale-105 cursor-pointer"
        >
          Work
        </p>
        <p
        onClick={() => smoothScrollToDiv('Projects')}
          className="transition-transform ease-in-out hover:scale-105 cursor-pointer"
        >
          Projects
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
