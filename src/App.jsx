import './App.css'
import SideBar from './Pages/SideBar/sideBar.jsx';
import User from './Pages/User/user.jsx';
import Movie from './Pages/Movie/movie.jsx';
import Category from './Pages/Category/category.jsx';
import Actor from './Pages/Actor/actor.jsx';
import Director from './Pages/Director/director.jsx';
import Home from './Pages/Home/home.jsx';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { DarkModeContextProvider } from './context/darkModeContext';
function App() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <DarkModeContextProvider>
      <div className='flex'>
        <BrowserRouter>
          <SideBar/>
          <Routes>
            <Route>
              <Route path="/" element={<Home/>}/>
              <Route path="/user" element={<User/>}/>
              <Route path="/movie" element={<Movie/>}/>
              <Route path="/category" element={<Category/>}/>
              <Route path="/actor" element={<Actor/>}/>
              <Route path="/director" element={<Director/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DarkModeContextProvider>
  )
}

export default App
