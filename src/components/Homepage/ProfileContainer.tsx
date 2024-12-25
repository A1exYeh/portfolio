import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Bio from './BioSection/Bio';
import Work from './WorkSection/Work';

export default function ProfileContainer() {
  return (
    <>
      <div className="mx-auto flex h-full w-full flex-col items-center justify-start bg-background p-4 px-8 md:border-x-2 md:border-solid md:border-primary lg:w-3/4 xl:w-[1246px]">
        <NavBar />
        <Bio />
        <div id="Work"></div>
        <Work />
        <Bio />
        <Bio />
      </div>
    </>
  );
}
