import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Work from '../Homepage/WorkSection/Work';
import Education from '../Homepage/WorkSection/Education';
import Projects from '../Homepage/ProjectsSection/Projects';
import Footer from '../Footer';

export default function WorkPage() {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col content-center justify-center bg-background font-roboto text-text">
      <div className="mx-auto flex h-full w-full max-w-screen-sm flex-col items-center justify-start">
        <NavBar />
        <div className="w-full px-6">
          <div className="flex flex-col gap-32 pb-72 h-full">
            <Work />
            <Education />
            <Projects />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
