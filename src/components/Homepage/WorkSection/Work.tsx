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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              eveniet deserunt cum sapiente nemo earum ipsa maiores soluta nam
              blanditiis amet, dolorem accusamus labore rem perferendis fugiat
              totam veniam eaque!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
