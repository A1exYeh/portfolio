import '@/index.css';
import BioIconBar from './BioIconBar';

export default function Bio() {
  return (
    <>
      <div className="z-0 flex h-screen w-full items-center justify-center pt-4">
        <div className="">
          <p className="mb-4 w-full text-left text-5xl font-bold">
            Alex Yeh
          </p>
          <p className="w-3/4 text-md md:w-full md:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eveniet
            deserunt cum sapiente nemo earum ipsa maiores soluta nam blanditiis
            amet, dolorem accusamus labore rem perferendis fugiat totam veniam
            eaque!
          </p>

          <BioIconBar />
        </div>
      </div>
    </>
  );
}
