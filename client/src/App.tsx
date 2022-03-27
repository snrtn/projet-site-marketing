import React from "react";
// style
import { GlobalStyle } from "./styles/global.style";
import { Container } from "./app.style";
// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      {/* text commit */}
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
