import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ShopPage from './pages/ShopPage.jsx';
import Navbar from './components/Navbar.jsx';
import QuizPage from './pages/QuizPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import LinksPage from './pages/LinksPage.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/shoppage" element={<ShopPage />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/blogpage" element={<BlogPage />}/>
        <Route path="/quicklinks" element={<LinksPage />}/>
        
      </Routes>
    </>
  );
};

export default App;