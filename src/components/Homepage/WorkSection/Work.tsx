import '@/index.css';

export default function Work() {
  return (
    <>
      <div className="z-0 flex h-auto min-h-[100%] w-full items-start justify-center">
        <div className="w-full pt-[10%]">
          <p className="mb-20 w-full text-left text-6xl font-bold md:text-8xl">
            Work
          </p>
          <div
            id="WorkContainer"
            className="flex w-full flex-col items-start justify-center gap-y-12"
          >
            <div
              id="WorkCard"
              className="mx-auto w-[50%] rounded-xl border-4 border-solid border-primary bg-gradient-to-r from-primaryTransparent to-primary p-8 shadow-2xl shadow-primaryTransparent"
            >
              <p className="text-xl font-semibold shadow-primary md:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                eveniet deserunt cum sapiente nemo earum ipsa maiores soluta nam
                blanditiis amet, dolorem accusamus labore rem perferendis fugiat
                totam veniam eaque!
              </p>
            </div>
            <div
              id="WorkCard"
              className="mx-auto w-[50%] rounded-xl border-4 border-solid border-primary bg-gradient-to-r from-primaryTransparent to-primary p-4 shadow-2xl shadow-primaryTransparent"
            >
              <p className="text-xl font-semibold md:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                eveniet deserunt cum sapiente nemo earum ipsa maiores soluta nam
                blanditiis amet, dolorem accusamus labore rem perferendis fugiat
                totam veniam eaque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
