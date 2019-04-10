import React from "react";
import styled from "@emotion/styled";

const TitleContainer = styled.header`
  margin: 0;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Header = () => (
  <TitleContainer>
    <Title>Borrowell GoT Pool</Title>
  </TitleContainer>
);

export default Header;
