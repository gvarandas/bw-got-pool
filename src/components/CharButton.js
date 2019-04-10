import React from "react";
import styled from "@emotion/styled";

const Icon = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const CharButton = ({ name, label, icon, onClick }) => (
  <button onClick={onClick} title={label}>
    <Icon>{name}</Icon>
  </button>
);

export default CharButton;
