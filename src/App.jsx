import { useState } from "react";

import Header from "./pages/Header";
import Popular from "./pages/Popular.jsx";
import Footer from "../src/pages/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Popular />

      <Footer />
    </>
  );
}

export default App;
