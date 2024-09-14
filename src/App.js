import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import { ListPage } from "./pages/List/ListPage";
import { MainPage } from "./pages/main/MainPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<MainPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/test' element={<ListPage />} />
        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
