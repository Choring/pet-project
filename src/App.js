import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import { ListPage } from "./pages/List/ListPage";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<ListPage />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
