import './App.css';
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
