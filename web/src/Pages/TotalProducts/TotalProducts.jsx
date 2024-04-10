import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Wrapper,
  Itens,
  List,
  SubTitle,
  Title,
  ButtonMais,
  ButtonMenos,
  ContainerTotal,
  Text,
  Button,
} from "./styles";

const TotalProducts = () => {
  let { formId } = useParams();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelectedProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/forms/${formId}/selected-products`
        );
        const selected = response.data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setSelectedProducts(selected);
        const total = selected.reduce((acc, curr) => acc + curr.quantity, 0);
        setTotalProducts(total);
      } catch (error) {
        console.error("Erro ao buscar produtos selecionados:", error);
      }
    };

    fetchSelectedProducts();
  }, [formId]);

  const incrementQuantity = (index) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].quantity = updatedProducts[index].quantity + 1;
    setSelectedProducts(updatedProducts);
    updateTotalProducts(updatedProducts);
  };

  const decrementQuantity = (index) => {
    const updatedProducts = [...selectedProducts];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity = updatedProducts[index].quantity - 1;
      setSelectedProducts(updatedProducts);
      updateTotalProducts(updatedProducts);
    }
  };

  const updateTotalProducts = (products) => {
    const total = products.reduce((acc, curr) => acc + curr.quantity, 0);
    setTotalProducts(total);
  };

  const handleContinue = () => {
    navigate("/concluido");
  };

  return (
    <Wrapper>
      <Title>Produtos Selecionados</Title>
      <SubTitle>Seus Produtos</SubTitle>

      <List>
        {selectedProducts.map((produto, index) => (
          <Itens key={produto.product.name}>
            {produto.product.name}
            <ButtonMenos onClick={() => decrementQuantity(index)}></ButtonMenos>
            <span> {produto.quantity} </span>
            <ButtonMais onClick={() => incrementQuantity(index)}></ButtonMais>
          </Itens>
        ))}
      </List>

      <Text>Volume Total</Text>
      <ContainerTotal>
        <p>{totalProducts}</p>
      </ContainerTotal>
      <Button onClick={handleContinue}>Continuar</Button>
    </Wrapper>
  );
};

export default TotalProducts;
