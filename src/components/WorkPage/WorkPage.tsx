import '@/index.css';
import NavBar from '../Navbar/NavBar';
import Work from '../Homepage/WorkSection/Work';
import Education from '../Homepage/WorkSection/Education';
import Footer from '../Footer';

export default function WorkPage() {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col content-center justify-center bg-background font-roboto text-text">
      <div className="mx-auto flex h-full w-full max-w-screen-sm flex-col items-center justify-start">
        <NavBar />
        <div className="w-full px-6">
          <div className="flex h-full flex-col gap-32 pb-[41rem] pt-20 md:pt-0">
            <Work />
            <Education />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
