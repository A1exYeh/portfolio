import '@/index.css';

export default function Work() {
  return (
    <div
      id="Work"
      className="z-0 flex w-full flex-col items-start justify-center"
    >
      <p className="mb-2 w-full text-left text-lg font-bold">Work</p>

      <div
        id="WorkContainer"
        className="flex w-full flex-col items-start justify-center"
      >
        <div
          id="WorkCard"
          className="w-full cursor-default font-roboto text-base"
        >
          <p className="text-[1.05rem] font-semibold tracking-wide">
            Legio Vox Studios
          </p>
          <p className="font-semi mb-4 flex flex-row items-center justify-start">
            <p>Game Development Intern</p>
            <p className="ml-auto">Oct 24 - Dec 24</p>
          </p>
          <p className="font-serif text-base italic">
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
  );
}
