import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import "./index.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const attributionVariants = {
    hidden: { translateY: "100%", opacity: 0 },
    visible: { translateY: 0, opacity: 1, transition: { duration: 2 } },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Main />
      <Cta />
      <Footer />
      <motion.div
        className="text-Gray flex flex-col py-2 items-center bg-VeryDarkViolet"
        ref={ref}
        initial="hidden"
        animate={control}
        variants={attributionVariants}
      >
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
      </motion.div>
    </div>
  );
}

export default App;
