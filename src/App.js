import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import "./style/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Subscribe" element={<Subscribe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
