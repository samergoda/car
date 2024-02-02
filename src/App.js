
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contanct from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contanct />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
