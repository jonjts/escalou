"use client";
import { Container } from "@chakra-ui/react";

import Home from "./Home";

const EntryPoint = () => {
  return (
    <Container className="mt-8 md:p-14 lg:p-20 xl:p-20" fluid>
      <Home />
    </Container>
  );
};

export default EntryPoint;
