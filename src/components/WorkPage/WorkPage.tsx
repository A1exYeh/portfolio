import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Work from '../Homepage/WorkSection/Work';
import Education from '../Homepage/WorkSection/Education';
import Bio from '../Homepage/BioSection/Bio';
import Projects from '../Homepage/ProjectsSection/Projects';
import Footer from '../Footer';
export default function WorkPage() {
  return (
    <>
      <div className="flex h-auto min-h-full w-full flex-col content-center justify-center bg-background font-roboto text-text">
      <div className="mx-auto flex h-full max-w-screen-sm w-full flex-col items-center justify-start">
        <NavBar />
        <div className="px-6 pt-8 pb-[24rem] w-full">
          <Work />
          <Education />
          <Projects />
        </div>
        <Footer />
      </div>
      </div>
    </>
  );
}

