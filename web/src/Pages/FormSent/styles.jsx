import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: #ffffffed;
  width: 900px;
  height: 78vh;
  margin: 110px auto;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin: 120px auto 20px 65px;
  color: #1b8fbd;
  letter-spacing: 0.7px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500px;
  line-height: 30px;
  letter-spacing: 0.7px;
  color: #535353;
  margin: 10px auto 50px 65px;
  width: 82%;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 250px;
  right: 90px;
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
