import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #2e87c2;
  width: 200px;
  padding: 18px;
  border-style: none;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.7px;
  cursor: pointer;

  &:active {
    background-color: #0f6292;
  }
`;
