import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./../../styles/Button.style";
import { Wrapper } from "../../styles/Wrapper.style";
import {
  Input,
  LabelForm,
  InputCity,
  FormGroup,
  FormRow,
  FormColumn,
} from "../../styles/Input.style";
import {
  CheckboxGroup,
  CheckboxLabel,
  RadioGroup,
  RadioLabel,
  SectionTitle,
  CheckboxTerm,
  CheckboxGroupTerm,
  TextArea,
  RequiredLabel,
  SubTitle,
  Title,
} from "./styles";

const FormHome = () => {
  // componente onde estará a lógica de todo o conteúdo da página
  const [showProducts, setShowProducts] = useState(true); // estado de exibição dos produtos. Controla se os produtos devem ser exibidos no formulario
  const [needsHelp, setNeedsHelp] = useState(false); // controla se o usuário precisa de ajuda
  const [formData, setFormData] = useState({
    //hook useState para criar o estado do formulário. Irá armazenar os dados inseridos pelo usuário
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    selectedProducts: [],
    needsHelp: false,
    knowsProduct: true,
    agreesPrivacyPolicy: false,
  });
  const [productsList, setProductsList] = useState([]); // estado que armazena a lista de produtos disponíveis
  const [formErrors, setFormErrors] = useState({}); // estado que armazena os erros de validação do formulário

  const navigate = useNavigate(); // hook do react-router-dom que permite navegar pelas paginas

  useEffect(() => {
    // é usado para lidar com ações secundárias após a renderização do componente, como buscar dados de uma API.

    // utilizo esse hook para buscar os produtos disponiveis quando o compoennte for montado.
    async function fetchProducts() {
      //fetch é a busca pelos produtos
      try {
        const response = await axios.get(
          //O axios faz a requisição para a API onde os produtos estão armazenados
          "http://localhost:3001/fixed-products"
        );
        setProductsList(response.data); // aqui atualizo o estado productList com os dados obtidos na resposta da requisição
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchProducts(); //aqui chamo a função
  }, []); // o array vazio como segundo argumento indica que o hook só vai executar uma vez após a montagem inicial dos componentes.

  const handleChange = (e) => {
    // função chamada sempre que um evento de mudança ocorrer
    const { name, value } = e.target; // desestruturo o objeto para extrair as propriedades: name e value
    setFormData({ ...formData, [name]: value }); // aqui atualizo o estado com novos valores no formulário, porém antes uso o spread para copiar os valores atuais do estado
    //  [name]:value que significa "atualize o campo com o nome 'name' para o novo valor 'value'"
  };

  const handleCheckboxChange = (e) => {
    // função chamada sempre que a box for clicada
    const { value, checked } = e.target; // extraio as propriedades: value e checked
    if (checked) {
      // se for marcada 'checked" é true
      setFormData({
        // atualiza o estado do formulário
        ...formData, //copia os valores atuais do formulario
        selectedProducts: [...formData.selectedProducts, value], // O ...formData.selectedProducts copia todos os produtos já selecionados, e depois adiciona o novo produto value a lista.
      });
    } else {
      setFormData({
        //atualiza o estado do formulário
        ...formData, //copia os valores atuais do formulario
        selectedProducts: formData.selectedProducts.filter(
          //metodo filter para criar uma nova lista que exclui o produto desmarcado
          (productId) => productId !== value // productId é o parametro que representa cada array percorrido. O !== verifica se o valor de productId é diferente de value, se for verdadeiro o elemento é mantido, se for falso é removido
        ),
      });
    }
  };

  const handleSelectOption = (value) => {
    // função chamada quando uma opção é selecionada no form, recebe value que é o valor da opção selecionada
    if (value === "yes") {
      // se for sim, o usuário sabe escolher o produto
      setNeedsHelp(false);
      setShowProducts(true);
    } else if (value === "no") {
      // se for não, o usuário precisa de ajuda
      setNeedsHelp(true);
      setShowProducts(false);
    }
  };

  const handleSubmit = async (e) => {
    // função chamada ao enviar o formulário
    e.preventDefault(); // impede que a página seja recarregada ao enviar um formulário.

    // Verifica se os campos obrigatórios estão preenchidos
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "O campo Nome é obrigatório";
    }
    if (!formData.lastName) {
      errors.lastName = "O campo Sobrenome é obrigatório";
    }
    if (!formData.email) {
      errors.email = "O campo E-mail é obrigatório";
    }
    if (!formData.agreesPrivacyPolicy) {
      errors.agreesPrivacyPolicy =
        "Você deve concordar com a política de privacidade";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      //verifica se o objeto error está vazio, ou seja, não tem mensagem de erro
      try {
        if (needsHelp) {
          alert("Formulário enviado com sucesso!");
          // se o usuário clicou que precisa de ajuda, ele será reedirecionado para a pagina concluido ao enviar o formulario
          navigate("/concluido");
        } else {
          const response = await axios.post(
            // se não, os dados serão enviados para a pagina 'total' através do post
            "http://localhost:3001/forms",
            formData
          );
          const formId = response.data.id; // se for bem sucedido é extraido o id do formulario
          alert("Formulário enviado com sucesso!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            selectedProducts: [],
            needsHelp: false,
            knowsProduct: true,
            agreesPrivacyPolicy: false,
          });
          navigate(`/total/${formId}`); // e o id vem para o endpoint da pagina levando apenas os produtos selecionados pelo usuário
        }
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        alert(
          "Erro ao enviar formulário. Por favor, tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <Wrapper>
      <Title>Formulário de Interesse em Produtos BASF</Title>
      <SubTitle>Dados</SubTitle>
      <form onSubmit={handleSubmit}>
        {" "}
        {/*a função será executada com o formulário for enviado */}
        <FormGroup>
          <FormRow>
            <FormColumn>
              <LabelForm htmlFor="firstName">
                Nome<RequiredLabel>*</RequiredLabel>
              </LabelForm>
              <Input
                type="text"
                name="firstName"
                value={
                  formData.firstName
                } /*o valor é controlado pelo estado formData */
                onChange={
                  handleChange
                } /* é acionado sempre que o valor é alterado */
                required
              />
              {formErrors.firstName && <span>{formErrors.firstName}</span>}
            </FormColumn>
            <FormColumn>
              <LabelForm htmlFor="lastName">
                Sobrenome<RequiredLabel>*</RequiredLabel>
              </LabelForm>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {formErrors.lastName && <span>{formErrors.lastName}</span>}
            </FormColumn>
          </FormRow>
        </FormGroup>
        <FormGroup>
          <FormRow>
            <FormColumn>
              <LabelForm htmlFor="email">
                E-mail<RequiredLabel>*</RequiredLabel>
              </LabelForm>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && <span>{formErrors.email}</span>}
            </FormColumn>
            <FormColumn>
              <LabelForm htmlFor="phone">Telefone</LabelForm>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormColumn>
          </FormRow>
        </FormGroup>
        <InputCity>
          <LabelForm htmlFor="city">Cidade</LabelForm>
          <Input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </InputCity>
        <SectionTitle>Sabe qual produto utilizar?</SectionTitle>
        <RadioGroup>
          <input
            type="radio"
            id="yes"
            name="product"
            value="yes"
            checked={!needsHelp && showProducts} // verifica se o botão está marcado ou não. Se o usuário NÃO precisa de ajuda os produtos serão mostrados
            onChange={() => handleSelectOption("yes")} // quando selecionar esse botão o sistema deve entender que os produtos devem ser mostrados
          />
          <RadioLabel htmlFor="yes">Sim, sei qual produto utilizar</RadioLabel>
        </RadioGroup>
        <RadioGroup>
          <input
            type="radio"
            id="no"
            name="product"
            value="no"
            checked={needsHelp && !showProducts} // verifica se o botão está marcado ou não. Se o usuário precisa de ajuda os produtos não serão mostrados
            onChange={() => handleSelectOption("no")} //quando o usuário selecionar este botão, o sistema deve entender que o usuário precisa de ajuda para escolher o produto.
          />
          <RadioLabel htmlFor="no">
            Não, preciso de ajuda para escolher o meu produto
          </RadioLabel>
        </RadioGroup>
        {showProducts && ( //expressão condicional verifica se a variável é verdadeira. Se for. o código aqui dentro será renderizado na tela
          <CheckboxGroup>
            <SectionTitle>Selecione seu produto</SectionTitle>
            <ul>
              {productsList.map(
                (
                  product //mapeando a lista de produtos
                ) => (
                  <li key={product.id}>
                    {" "}
                    {/* para cada produto na lista ele renderiza na tela*/}
                    <input
                      type="checkbox"
                      value={product.id}
                      onChange={handleCheckboxChange} // função chamada ao marcar e desmarcar a checkbox
                    />
                    <CheckboxLabel>{product.name}</CheckboxLabel>{" "}
                    {/* nome do produto exibido ao lado da checkbox*/}
                  </li>
                )
              )}
            </ul>
          </CheckboxGroup>
        )}
        {needsHelp && ( // expressão condicional verifica se a variável é verdadeira. Se for. o código aqui dentro será renderizado na tela
          <div>
            <SectionTitle>
              Descreva para qual finalidade está precisando
            </SectionTitle>
            <TextArea
              className="form-control"
              onChange={
                (e) => setFormData({ ...formData, needsHelp: e.target.value }) // setFormData é a função para atualizar o valor do estado do formulario. O operador spread inicia o estado com todas as propriedades do formData e substitui o valor da propriedade needsHelp pelo valor escrito
              }
            />
          </div>
        )}
        <CheckboxTerm>
          <input
            type="checkbox"
            checked={formData.agreesPrivacyPolicy} // se for verdadeiro estará marcado
            onChange={(e) =>
              setFormData({
                ...formData,
                agreesPrivacyPolicy: e.target.checked, //evento de mudança que dispara quando o usuário clica na checkbox
              })
            }
            required
          />
          <CheckboxGroupTerm>
            Estou de acordo com a política de privacidade
            <RequiredLabel>*</RequiredLabel>
          </CheckboxGroupTerm>
          {formErrors.agreesPrivacyPolicy && ( //expressão condicional que verifica se há algum erro relacionado à concordância com a política de privacidade.
            <span>{formErrors.agreesPrivacyPolicy}</span> //Se houver um erro ele renderizará um elemento <span> que exibirá a mensagem de erro.
          )}
        </CheckboxTerm>
        <Button type="submit">Continue</Button>
      </form>
    </Wrapper>
  );
};

export default FormHome;
