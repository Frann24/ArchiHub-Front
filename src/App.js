import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/home/news/NewsReel";
import News from "./components/home/news/News";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/news" element={<News/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
