import '@/index.css';
import ProfileContainer from './ProfileContainer';

export default function HomePageLayout() {
  return (
    <>
      <div className="flex h-full w-full flex-col content-center justify-center bg-background text-text">
        <ProfileContainer />
      </div>
    </>
  );
}
