import '@/index.css';
import BioIconBar from './BioIconBar';

export default function Bio() {
  

  return (
    <>
      <div
      id='Bio'
        className="items-left z-0 flex h-1/4 w-full flex-col justify-center pt-20"
      >
        <p className="mb-4 w-full text-left text-5xl font-bold">Alex Yeh</p>
        <p className="text-md w-3/4 md:w-full md:text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eveniet
          deserunt cum sapiente nemo earum ipsa maiores soluta nam blanditiis
          amet, dolorem accusamus labore rem perferendis fugiat totam veniam
          eaque!
        </p>

        <BioIconBar />
      </div>
    </>
  );
}
