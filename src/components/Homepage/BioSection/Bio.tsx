import '@/index.css';
import { useRef } from 'react';
import { MutableRefObject } from 'react';
import BioIconBar from './BioIconBar';

export default function Bio() {
  const bioDiv = useRef() as MutableRefObject<HTMLDivElement>;

  function scrollWork() {
    scrollTo({
      top: bioDiv.current.offsetHeight,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <div
        ref={bioDiv}
        className="items-left z-0 flex h-screen w-full flex-col justify-center pt-4"
      >
        <p className="mb-4 w-full text-left text-5xl font-bold">Alex Yeh</p>
        <p className="text-md w-3/4 md:w-full md:text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eveniet
          deserunt cum sapiente nemo earum ipsa maiores soluta nam blanditiis
          amet, dolorem accusamus labore rem perferendis fugiat totam veniam
          eaque!
        </p>

        <BioIconBar />

        <a
          onClick={scrollWork}
          className="absolute bottom-8 left-1/2 flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-full bg-red-600 md:h-16 md:w-16"
        >
          V
        </a>
      </div>
    </>
  );
}
