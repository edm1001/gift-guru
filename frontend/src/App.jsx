import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import ShopPage from './pages/ShopPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import LinksPage from './pages/LinksPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/links" element={<LinksPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </>
  );
};

export default App;