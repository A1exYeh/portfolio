import '@/index.css';

export default function Work() {
  return (
    <>
      <div
        id="Work"
        className="md:h1/2 z-0 flex h-1/4 min-h-fit w-full flex-col items-start justify-center pt-20"
      >
        <p className="mb-4 w-full text-left text-4xl font-bold">
          Work
          <hr className="border-[1px] border-primary" />
        </p>

        <div
          id="WorkContainer"
          className="flex w-full flex-col items-start justify-center"
        >
          <div
            id="WorkCard"
            className="mx-auto w-full cursor-default text-base"
          >
            <p className="text-[1.1rem] font-bold">Legio Vox Studios</p>
            <p className="font-semi mb-4 flex flex-row items-center justify-start">
              <p>Game Development Intern</p>
              <p className="ml-auto">Oct 24 - Dec 24</p>
            </p>
            <p className="font-robotoSerif text-base italic">
              - Led development of key game features and solutions to specific
              bugs.
              <br></br>- Worked with multiple departments in order to design and
              test systems.
              <br></br>- Iterated and implemented on game software using Agile
              methods.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
