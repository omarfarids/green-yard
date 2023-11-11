import React from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import MissionPage from "./pages/MissionPage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={"mission"} element={<MissionPage />} />
          <Route path={"about-us"} element={<About />} />
          <Route path={"contact-us"} element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
