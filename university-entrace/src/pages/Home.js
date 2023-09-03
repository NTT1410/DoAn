import React from "react";
import Banner from "../components/Banner";
import News from "../components/News";
import { Container } from "react-bootstrap";


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
