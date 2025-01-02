import '@/index.css';

export default function Projects() {
  return (
    <>
      <div
        id="Projects"
        className="z-0 flex h-1/4 min-h-fit w-full flex-col items-start justify-center pt-20"
      >
        <p className="mb-2 w-full text-left text-lg font-bold">Projects</p>
        <div
          id="ProjectsContainer"
          className="flex w-full flex-col items-start justify-center gap-y-8 pt-4 font-robotoSerif text-base"
        >
          <div
            id="ProjectsCard"
            className="mx-auto w-full rounded-xl bg-gradient-to-r from-primaryTransparent to-primary p-4 shadow-2xl shadow-transparent transition-all ease-out hover:scale-105 hover:shadow-black"
          >
            <p className="font-roboto font-semibold tracking-wide">
              Portfolio Site
            </p>
            <p>Built with React & Typescript</p>
          </div>
          <div
            id="ProjectsCard"
            className="mx-auto w-full rounded-xl bg-gradient-to-r from-primaryTransparent to-primary p-4 shadow-2xl shadow-transparent transition-all ease-out hover:scale-105 hover:shadow-black"
          >
            <p className="font-roboto font-semibold tracking-wide">gymAPP</p>
            <p className='font-roboto'>Webapp to keep track of exercise weights.</p>
          </div>
        </div>
      </div>
    </>
  );
}
