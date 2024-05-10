import React from "react";
import { Wrapper, Title } from "./styles/headingStyle";

const SectionHeading = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default SectionHeading;
