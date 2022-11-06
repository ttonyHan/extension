import './App.css';
import Home from "./components/home/home"
import Community from "./components/community/community"
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
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>


      <Footer />

    </div> 
  );
}

export default App;
