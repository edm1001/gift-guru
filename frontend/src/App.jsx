import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import {Home}  from "./pages/Home.jsx";
import {Category} from "./pages/Category.jsx";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
