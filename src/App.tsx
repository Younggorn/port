// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import About from "./views/About";
import Work from "./views/Work";
//import Contact from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout ครอบทุกหน้า */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* localhost:3000/ */}
          <Route path="about" element={<About />} /> {/* localhost:3000/about */}
          <Route path="work" element={<Work />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
