import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/home/news/NewsReel";
import NewsReel from "./components/home/news/NewsReel";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/news" element={<NewsReel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
