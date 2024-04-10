import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const InputCity = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 62px;
`;

export const Input = styled.input`
  background-color: transparent !important;
  border: 1px solid #c4c4c5;
  border-radius: 10px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "350px")};
  height: 50px;
  font-size: 18px;
  letter-spacing: 0.7px;
  color: #5a5a5a;
  padding: 10px;

  &:focus {
    border-color: #19a3da;
    outline: none;
    box-shadow: 0 0 5px 1px #bedee9;
  }
`;

export const LabelForm = styled.label`
  color: #5a5a5a;
  font-size: 14px;
  letter-spacing: 0.7px;
  margin-bottom: 10px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 35px;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
