import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/Home.jsx";
import Popular from "./pages/Popular.jsx";
import Footer from "../src/pages/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/popular" element={<Popular />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
