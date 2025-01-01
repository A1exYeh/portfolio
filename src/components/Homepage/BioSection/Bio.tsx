import '@/index.css';
import BioIconBar from './BioIconBar';

export default function Bio() {
  return (
    <>
      <div
        id="Bio"
        className="items-left z-0 flex h-1/4 w-full flex-col justify-center pt-28"
      >
        <div className="mb-2 text-left text-lg font-bold">
          <p>Alex Yeh</p>
        </div>
        <p className="animate font-serif text-base animate-in">
          <em className="font-robotoSerif">
            {' '}
            I am a software engineer, web developer, a student-for-life, and a
            problem solver.{' '}
          </em>
          <br></br>
          <br></br>I love to build projects from the ground up, focusing on
          scalable designs and clean code structure. I aim to deepen my
          knowledge on current technologies and languages in order to enhance my
          skillset.
        </p>

        <BioIconBar />
      </div>
    </>
  );
}
