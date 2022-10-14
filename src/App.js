import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NewsDetail from "./components/home/news/NewsDetail";
import PostDetail from "./components/home/posts/PostDetail";
import Header from "./components/header/Header";
import "./components/home/news/NewsReel";
import LandingPage from "./components/landingPage/LandingPage";
import Payment from "./components/payment/payment"
// import News from "./components/home/news/News";
import Home from "./components/home/Home";
import CreatePost from "./components/createPost/CreatePost";
import Footer from "./components/footer/Footer";
import DashUser from "./components/DashUser/DashUser";
import BtnTop from "./components/btnTop/BtnTop";
//import Home from "./components/home/Home";
//import CreatePost from "./components/createPost/CreatePost";
import Successful from "./components/payment/Successful";
import ErrorPayment from "./components/payment/ErrorPayment";
import CancelPayment from "./components/payment/CancelPayment";



function App() {
  return (
    <BrowserRouter>
      <div className="App font-raleway">
        {/* <Header /> */}
          <BtnTop/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<Header />} />
          {/* lAS RUTAS ESTAN EN EL COMPONENTE Header. */}
          {/* <Route path="/home" element={<Home />} />
          <Route path="/newsDetail/:id" element={<NewsDetail />} />
          <Route path="/postDetail/:id" element={<PostDetail />} />
          <Route path="/createpost" element={<CreatePost />} />  */}
          <Route path="/successful" element={<Successful />} />
          <Route path="/errorPayment" element={<ErrorPayment />} />
          <Route path="/cancelPayment" element={<CancelPayment />} /> 
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
