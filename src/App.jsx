
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Multimedia from "./pages/Multimedia";
import Reflection from "./pages/Reflection";

import "./index.css";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/reflection" element={<Reflection />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
