import styled from "styled-components";
import mais from "../../images/mais.png";
import menos from "../../images/menos.png";

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
  font-size: 30px;
  margin: 80px auto 50px 65px;
  color: #1b8fbd;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  color: #616161;
  margin: 0px 0px 20px 65px;
  text-align: left;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 30px;
  margin-left: 5px;
`;

export const Itens = styled.li`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #535353;
  border-radius: 20px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    margin-right: 0px;
    font-size: 16px;
    color: #2e87c2;
    font-weight: bold;
  }
`;

export const ButtonMais = styled.button`
  background-image: url(${mais});
  margin-bottom: 8px;
  background-color: transparent;
  border-style: none;
  width: 15px;
  height: 15px;
  position: relative;
  top: 4px;
  margin-left: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonMenos = styled.button`
  background-image: url(${menos});
  margin-bottom: 8px;
  background-color: transparent;
  border-style: none;
  width: 15px;
  height: 12px;
  margin-left: 15px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0px 0px 5px 65px;
  text-align: left;
  color: #535353;
`;

export const ContainerTotal = styled.div`
  background-color: #ffffff;
  border: solid 1px #1b8fbd;
  width: 120px;
  padding: 5px;
  margin: 0px 0px 0px 65px;
  border-radius: 10px;

  p {
    margin: 0px 0px 0px 0px;
    text-align: center;
    color: #1b8fbd;
    font-size: 16px;
    font-weight: 500;
  }
`;

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
  cursor: pointer;

  &:active {
    background-color: #0f6292;
  }
`;
