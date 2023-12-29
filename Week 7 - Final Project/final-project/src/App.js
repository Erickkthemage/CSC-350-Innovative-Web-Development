// Name: Erick Diaz  Date: 11/26/23

import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Games from "./pages/Games";
import Characters from "./pages/Characters";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/characters" element={<Characters/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
};

export default App;