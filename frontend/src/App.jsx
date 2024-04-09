import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorylist" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;