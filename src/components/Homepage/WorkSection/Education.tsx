import '@/index.css';

export default function Education() {
  return (
    <>
      <div
        id="Education"
        className="md:h1/2 z-0 flex h-1/4 min-h-fit w-full flex-col items-start justify-center pt-20"
      >
        <p className="mb-4 w-full text-left text-4xl font-bold">
          Education
          <hr className="border-[1px] border-primary" />
        </p>

        <div className="flex w-full flex-col items-start justify-center">
          <div className="mx-auto w-full cursor-default text-base">
            <p className="text-[1.1rem] font-bold">
              University of Las Vegas, Nevada
            </p>
            <p className="font-semi mb-4 flex flex-row items-center justify-start">
              <p>B.S. Computer Science</p>
              <p className="ml-auto">2026</p>
            </p>
            <p className="font-robotoSerif text-base italic">
              Data Structures & Alogrithms, Discrete Math, Calc I/II, Databases
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
