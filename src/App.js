import './App.css';
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { ListPage } from "./pages/List/ListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/List" element={<ListPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
