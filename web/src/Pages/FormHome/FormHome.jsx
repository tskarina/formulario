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
  const [showProducts, setShowProducts] = useState(true);
  const [needsHelp, setNeedsHelp] = useState(false);
  const [formData, setFormData] = useState({
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
  const [productsList, setProductsList] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "http://localhost:3001/fixed-products"
        );
        setProductsList(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        selectedProducts: [...formData.selectedProducts, value],
      });
    } else {
      setFormData({
        ...formData,
        selectedProducts: formData.selectedProducts.filter(
          (productId) => productId !== value
        ),
      });
    }
  };

  const handleSelectOption = (value) => {
    if (value === "yes") {
      setNeedsHelp(false);
      setShowProducts(true);
    } else if (value === "no") {
      setNeedsHelp(true);
      setShowProducts(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      try {
        if (needsHelp) {
          navigate("/concluido");
        } else {
          const response = await axios.post(
            "http://localhost:3001/forms",
            formData
          );
          const formId = response.data.id;
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
          navigate(`/total/${formId}`);
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
        <FormGroup>
          <FormRow>
            <FormColumn>
              <LabelForm htmlFor="firstName">
                Nome<RequiredLabel>*</RequiredLabel>
              </LabelForm>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
            checked={!needsHelp && showProducts}
            onChange={() => handleSelectOption("yes")}
          />
          <RadioLabel htmlFor="yes">Sim, sei qual produto utilizar</RadioLabel>
        </RadioGroup>
        <RadioGroup>
          <input
            type="radio"
            id="no"
            name="product"
            value="no"
            checked={needsHelp && !showProducts}
            onChange={() => handleSelectOption("no")}
          />
          <RadioLabel htmlFor="no">
            Não, preciso de ajuda para escolher o meu produto
          </RadioLabel>
        </RadioGroup>

        {showProducts && (
          <CheckboxGroup>
            <SectionTitle>Selecione seu produto</SectionTitle>
            <ul>
              {productsList.map((product) => (
                <li key={product.id}>
                  <input
                    type="checkbox"
                    value={product.id}
                    onChange={handleCheckboxChange}
                  />
                  <CheckboxLabel>{product.name}</CheckboxLabel>
                </li>
              ))}
            </ul>
          </CheckboxGroup>
        )}

        {needsHelp && (
          <div>
            <SectionTitle>
              Descreva para qual finalidade está precisando
            </SectionTitle>
            <TextArea
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, needsHelp: e.target.value })
              }
            />
          </div>
        )}

        <CheckboxTerm>
          <input
            type="checkbox"
            checked={formData.agreesPrivacyPolicy}
            onChange={(e) =>
              setFormData({
                ...formData,
                agreesPrivacyPolicy: e.target.checked,
              })
            }
            required
          />
          <CheckboxGroupTerm>
            Estou de acordo com a política de privacidade
            <RequiredLabel>*</RequiredLabel>
          </CheckboxGroupTerm>
          {formErrors.agreesPrivacyPolicy && (
            <span>{formErrors.agreesPrivacyPolicy}</span>
          )}
        </CheckboxTerm>

        <Button type="submit">Continue</Button>
      </form>
    </Wrapper>
  );
};

export default FormHome;
