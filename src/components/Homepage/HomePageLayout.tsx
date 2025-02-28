import '@/index.css';
import ProfileContainer from './ProfileContainer';

export default function HomePageLayout() {
  return (
    <>
      <div className="flex h-full min-h-screen w-full flex-col content-center justify-center bg-background font-roboto text-text">
        <ProfileContainer />
      </div>
    </>
  );
}
