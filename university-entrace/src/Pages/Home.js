import React from "react";
import Banner from "../components/Banner";
import { Container } from "react-bootstrap";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <News />
      </Container>
    </>
  );
};

export default Home;
