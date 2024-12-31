import '@/index.css';

export default function Work() {
  return (
    <>
      <div
        id="Work"
        className="md:h1/2 z-0 flex h-1/4 min-h-fit w-full flex-col items-start justify-center pt-20"
      >
        <p className="mb-8 w-full text-left text-4xl font-bold">
          Work
        </p>
        <div
          id="WorkContainer"
          className="flex w-full flex-col items-start justify-center gap-y-12"
        >
          <div id="WorkCard" className="text-base mx-auto w-full">
            <p className="mb-4 font-bold">
              Legio Vox Studios
            </p>
            <p className="font-semi mb-4 flex flex-row items-center justify-start">
              <p>Game Development Intern</p>
              <p className="ml-auto">Oct 24 - Dec 24</p>
            </p>
            <p>
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
