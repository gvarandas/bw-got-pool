import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 25%;
  border-radius: 50%;
  border: none;
  margin: 3px 10%;
  background-color: rgba(0, 0, 0, 0.75);

  :focus {
    outline: 0;
    box-shadow: 0 0 6px #ddd;
  }
`;

const Icon = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const CharButton = ({ name, label, icon, onClick }) => (
  <Button onClick={onClick} title={label}>
    <Icon>{name}</Icon>
  </Button>
);

export default CharButton;
