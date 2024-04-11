import { useNavigate } from "react-router-dom";
import { Text, Title, Wrapper, Button } from "./styles";
import airplaneImage from "./../../images/aviao.png";

const FormSent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Title>Formulário enviado!</Title>
      <Text>
        Agora só aguardar o retorno da nossa equipe através do e-mail cadastrado
        para mais informações. O prazo é de até 48 horas.
      </Text>

      <img src={airplaneImage} alt="Avião" />
      <Button onClick={handleButtonClick}>Ok, entendi</Button>
    </Wrapper>
  );
};

export default FormSent;
