import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Bio from './BioSection/Bio';
import Work from './WorkSection/Work';
import Projects from './ProjectsSection/Projects';
import Footer from '../Footer';
export default function ProfileContainer() {
  return (
    <>
      <div className="mx-auto flex h-full max-w-screen-sm flex-col items-center justify-start">
        <NavBar />
        <div className="px-6 pb-[24rem]">
          <Bio />
          <Work />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}
