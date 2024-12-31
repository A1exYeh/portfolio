import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Bio from './BioSection/Bio';
import Work from './WorkSection/Work';
import Projects from './ProjectsSection/Projects';

export default function ProfileContainer() {
  return (
    <>
      <div className="mx-auto flex h-full max-w-screen-sm flex-col items-center justify-start bg-background">
        <NavBar />
        <div className="px-6 pb-[900px]">
          <Bio />
          <Work />
          <Projects />
        </div>
      </div>
    </>
  );
}
