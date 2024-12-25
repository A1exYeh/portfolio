import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Bio from './Bio';
export default function ProfileContainer() {
  return (
    <>
      <div className="mx-auto flex h-full w-full lg:w-3/4 xl:w-[1246px] content-center justify-center bg-background p-4 ">
        <NavBar />
      </div>
    </>
  );
}
