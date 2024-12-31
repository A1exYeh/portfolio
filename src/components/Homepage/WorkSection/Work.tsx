import '@/index.css';

export default function Work() {
  return (
    <>
      <div id='Work' className="z-0 flex flex-col min-h-fit h-1/4 md:h1/2 w-full items-start justify-center mb-12 pt-20">
      
          <p className="mb-8 md:mb-20 w-full text-left text-5xl font-bold">
            Work
          </p>
          <div
            id="WorkContainer"
            className="flex w-full flex-col items-start justify-center gap-y-12"
          >
            <div
              id="WorkCard"
              className="mx-auto w-full text-md md:text-xl"
            >
              <p className='text-lg font-bold mb-4 md:text-xl'>Legio Vox Studios</p>
              <p className='text-lg font-semi flex flex-row justify-start items-center mb-4 md:text-xl'>
                <p>Game Development Intern</p>
                <p className='ml-auto'>Oct 24 - Dec 24</p>
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
