import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NewsDetail from "./components/home/news/NewsDetail";

// import News from "./components/home/news/News";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsDetail/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
