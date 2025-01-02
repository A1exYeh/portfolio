import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Bio from './BioSection/Bio';
import Work from './WorkSection/Work';
import Projects from './ProjectsSection/Projects';
import Footer from '../Footer';
export default function ProfileContainer() {
  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-screen-sm flex-col items-center justify-start">
        <NavBar />
        <div className="w-full px-6">
          <div className="flex flex-col gap-24 pb-56 h-full">
            <Bio />
            <Work />
            <Projects />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
