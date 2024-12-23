import '@/index.css'
import HomePage from './HomePage';

export default function HomePageLayout () {
    return (
        <>
        <div className='flex flex-col justify-center content-center h-full w-full bg-background text-text'>
            <HomePage/>
        </div>
        </>
    );
};