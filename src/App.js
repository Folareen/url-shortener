import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Cta />
      <Footer />
      <div className="text-Gray flex flex-col py-2 items-center bg-VeryDarkViolet">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-Cyan"
        >
          Frontend Mentor
        </a>
        Coded by{" "}
        <a href="https://www.twitter.com/__Folareen__" className="text-Cyan">
          Folareen
        </a>
      </div>
    </>
  );
}

export default App;
