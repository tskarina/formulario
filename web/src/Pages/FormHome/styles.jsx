import styled from "styled-components";

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  margin: 90px 0 20px 0px;
  color: #1b8fbd;
  text-align: center;
  letter-spacing: 0.7px;
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin: 70px 0 40px 65px;
  color: #5a5a5a;
  letter-spacing: 0.7px;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 60px 0 20px 65px;
  color: #5a5a5a;
  letter-spacing: 0.7px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 65px;
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  margin-left: 5px;
  letter-spacing: 0.7px;
  color: #5a5a5a;
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 20px;
`;

export const CheckboxGroupTerm = styled.div`
  align-items: center;
  margin-left: 5px;
`;
export const CheckboxTerm = styled.label`
  margin-left: 65px;
  display: flex;
`;

export const CheckboxLabel = styled.label`
  font-size: 16px;
  color: #616161;
  letter-spacing: 0.7px;
  margin-left: 5px;
`;

export const TextArea = styled.textarea`
  width: 88%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  letter-spacing: 0.7px;
  margin-left: 65px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: transparent !important;
  border: 1px solid #c4c4c5;
  resize: none;
  color: #5a5a5a;

  &:focus {
    border-color: #19a3da;
    outline: none;
    box-shadow: 0 0 5px 1px #bedee9;
  }
`;

export const RequiredLabel = styled.span`
  color: #ff0606;
  margin-left: 5px;
`;
