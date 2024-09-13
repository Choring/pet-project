import './App.css';
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { ListPage } from "./pages/List/ListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/List" element={<ListPage />}></Route>
    </Routes>
  );
}

export default App;
