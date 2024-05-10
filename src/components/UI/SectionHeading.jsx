import React from "react";
import { Wrapper, Title, RedBorder } from "./styles/headingStyle";

const SectionHeading = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <RedBorder></RedBorder>
    </Wrapper>
  );
};

export default SectionHeading;
