import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/home/news/NewsReel";
import Spotlight from "./components/home/news/Spotlight";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/news" element={<Spotlight/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
