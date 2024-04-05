import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';

function App() {
  return (
<Routes>
  <Route index element={<Home />}/>
  <Route path="/category/itemgroup" element={<Category/>}/>
</Routes>

 )
}

export default App
