import React from "react";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import FlexContent from "./components/FlexContent";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <main className="flex flex-col  gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales
          endpoint={popularsales}
          ifExists
        />
        <FlexContent
          endpoint={highlight}
          ifExists
        />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
