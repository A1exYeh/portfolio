import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Bio from './BioSection/Bio';
import Work from './WorkSection/Work';
import Projects from './ProjectsSection/Projects';
import Education from './WorkSection/Education';
import Footer from '../Footer';
export default function ProfileContainer() {
  return (
    <>
      <div className="mx-auto flex h-full max-w-screen-sm flex-col items-center justify-start bg-background">
        <NavBar />
        <div className="px-6 pb-64">
          <Bio />
          <Work />
          <Education />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}
