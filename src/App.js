import './App.css';
import Home from "./components/home/home"
import About from "./components/about/about"
import Footer from './components/footer/footer';
import Profile from "./components/profile/profile"
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/header"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>


      {/* <Footer /> */}

    </div> 
  );
}

export default App;
