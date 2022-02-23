import React from "react";
import Slider from "../../components/home/Slider";
// style
import { Container } from "./home.style";
// components

type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <Slider />
    </Container>
  );
};

export default Home;
