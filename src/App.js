import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NewsDetail from "./components/home/news/NewsDetail";
import PostDetail from "./components/home/posts/PostDetail";
import Header from "./components/header/Header";
import "./components/home/news/NewsReel";
import LandingPage from "./components/landingPage/LandingPage";

// import News from "./components/home/news/News";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-raleway">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/newsDetail/:id" element={<NewsDetail />} />
          <Route path="/postDetail/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
