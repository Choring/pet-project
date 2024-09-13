<<<<<<< HEAD
import './App.css';
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { ListPage } from "./pages/List/ListPage";
=======
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
>>>>>>> eunseon

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/List" element={<ListPage />}></Route>
=======
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NotFound />} />
>>>>>>> eunseon
    </Routes>
  );
}

export default App;
