import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Bio from './BioSection/Bio';
import Work from './WorkSection/Work';

export default function ProfileContainer() {
  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-[900px] flex-col items-center justify-start bg-background">
        <NavBar />
        <div className="px-8">
          <Bio />
          <div id="Work"></div>
          <Work />
          <Bio />
          <Bio />
        </div>
      </div>
    </>
  );
}
