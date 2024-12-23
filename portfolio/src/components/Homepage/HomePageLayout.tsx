import '@/index.css'
import HomePage from './HomePage';

export default function HomePageLayout () {
    return (
        <>
        <div className='flex justify-center content-center h-full bg-background text-text'>
            <HomePage/>
        </div>
        </>
    );
};