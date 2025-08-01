import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import QHSE from "./components/QHSE";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <QHSE/>
      <Services />
      <Projects />

     
    </>
  );
}

export default App;
