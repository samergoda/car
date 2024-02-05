import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContext } from "./Context/DataContext";

function App() {
  return (
    <>
      <DataContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route path="/categories" element={<Category />} />


            <Route path="/:index" element={<Product />} />

          </Routes>
        </BrowserRouter>
      </DataContext>
    </>
  );
}

export default App;
