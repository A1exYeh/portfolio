import '@/index.css';

export default function Projects() {
  return (
    <>
      <div className="z-0 flex h-1/4 min-h-fit w-full flex-col items-start justify-center pt-12">
        <p className="mb-8 w-full text-left text-5xl font-bold md:mb-20">
          Projects
        </p>
        <div
          id="ProjectsContainer"
          className="flex w-full flex-col items-start justify-center gap-y-12"
        >
          <div
            id="ProjectsCard"
            className="mx-auto w-full rounded-xl border-4 border-solid border-primary bg-gradient-to-r from-primaryTransparent to-primary p-4 shadow-2xl shadow-primaryTransparent"
          >
            <p className="text-md shadow-primary md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              eveniet deserunt cum sapiente nemo earum ipsa maiores soluta nam
              blanditiis amet, dolorem accusamus labore rem perferendis fugiat
              totam veniam eaque!
            </p>
          </div>
          <div
            id="ProjectsCard"
            className="mx-auto w-full rounded-xl border-4 border-solid border-primary bg-gradient-to-r from-primaryTransparent to-primary p-4 shadow-2xl shadow-primaryTransparent"
          >
            <p className="text-md shadow-primary md:text-xl">
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
