import React from "react";
import { Container } from "react-bootstrap";

const ContainerFluid = ({ children }) => {
  return (
    <div className="page__wrapper">
      <Container fluid>
        {children}
      </Container>
    </div>
  );
};

export default ContainerFluid;
