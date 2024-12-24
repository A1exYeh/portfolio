import '@/index.css';
import ProfileCard from './ProfileCard';

export default function HomePageLayout() {
  return (
    <>
      <div className="flex h-full w-full flex-col content-center justify-center bg-background text-text">
        <ProfileCard />
      </div>
    </>
  );
}