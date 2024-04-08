import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Home  from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categorylist' element={<Category />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
