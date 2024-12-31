import '@/index.css';
import BioIconBar from './BioIconBar';

export default function Bio() {
  

  return (
    <>
      <div
      id='Bio'
        className="items-left z-0 flex h-1/4 w-full flex-col justify-center pt-28"
      >
        <p className="mb-4 text-left text-4xl font-bold">Alex Yeh</p>
        <p className="text-base animate animate-in">
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
