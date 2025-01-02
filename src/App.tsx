import { Routes, Route } from 'react-router-dom';
import HomePageLayout from './components/Homepage/HomePageLayout';
import WorkPage from './components/WorkPage/WorkPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/work" element={<WorkPage />} />
      </Routes>
    </div>
  );
};

export default App;
