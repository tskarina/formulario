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
  let { formId } = useParams(); // hook para extrair o parâmetro 'formId' da URL
  const [selectedProducts, setSelectedProducts] = useState([]); // armazena os produtos selecionados pelo usuário
  const [totalProducts, setTotalProducts] = useState(0); // armazena o total de produtos selecionados

  const navigate = useNavigate(); //navega pelas rotas

  useEffect(() => {
    // usando o hook para buscar os produtos selecionados sempre que o formId mudar
    const fetchSelectedProducts = async () => {
      //busca os produtos selecionados
      try {
        const response = await axios.get(
          `http://localhost:3001/forms/${formId}/selected-products` //faz o get por id do backend
        );
        const selected = response.data.map((item) => ({
          // mapeia os dados da resposta e adiciona uma quantidade que se inicia com 1
          ...item,
          quantity: 1,
        }));
        setSelectedProducts(selected); // atualiza o estado com a lista de produtos selecionados obtido na requisição
        const total = selected.reduce((acc, curr) => acc + curr.quantity, 0); // aqui calcula o valor total de produtos selecionados somando as quantidades de cada produto na lista ( acc 'acumulator' está acumulando o total de quantidades dos produtos selecionados, enquanto curr 'current' representa cada produto individualmente durante a iteração.)
        setTotalProducts(total); //atualiza o valor total de produtos com o valor calculado
      } catch (error) {
        console.error("Erro ao buscar produtos selecionados:", error);
      }
    };

    fetchSelectedProducts();
  }, [formId]); // parametro

  const incrementQuantity = (index) => {
    const updatedProducts = [...selectedProducts]; // primeiro cria uma copia do array com o spread, garantindo a modificação direto do estaod original
    updatedProducts[index].quantity = updatedProducts[index].quantity + 1; // em seguida atualizo a quantidade do produto na posição index do array (+ 1 mostra que quero aumentar em uma unidade)
    setSelectedProducts(updatedProducts); //atualizo o estado com um novo array
    updateTotalProducts(updatedProducts); // e chamo a função para recalcular o total de produtos
  };

  const decrementQuantity = (index) => {
    const updatedProducts = [...selectedProducts]; // primeiro cria uma copia do array com o spread, garantindo a modificação direto do estado original
    if (updatedProducts[index].quantity > 0) {
      // verifica se a quantidade do produto selecionado é maior que zero. Garante que se for 0 não dê para decrementar pq não faz sentido ter negativo
      updatedProducts[index].quantity = updatedProducts[index].quantity - 1; // decremento o index em uma unidade
      setSelectedProducts(updatedProducts); //atualizo o estado com um novo array
      updateTotalProducts(updatedProducts); // e chamo a função para recalcular o total de produtos
    }
  };

  // metodo reduce ele reduz um array a um unico valor
  const updateTotalProducts = (products) => {
    // lista de produtos que deve ser calculada o total
    const total = products.reduce((acc, curr) => acc + curr.quantity, 0); //soma todas as quantidades dos produtos presentes no array products, e o resultado final é armazenado na variável total.
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
        {selectedProducts.map(
          (
            produto,
            index // utilizando a função map para percorrer todos os elementos do array e tornar um componente para cada um deles, produto representa o elemento atual do array e index a posição do elemento
          ) => (
            <Itens key={produto.product.name}>
              {produto.product.name} {/* renderiza o componente na tela */}
              <ButtonMenos
                onClick={() => decrementQuantity(index)}
              ></ButtonMenos>{" "}
              {/* botão para diminuir*/}
              <span> {produto.quantity} </span>
              <ButtonMais
                onClick={() => incrementQuantity(index)}
              ></ButtonMais>{" "}
              {/* botão para aumentar*/}
            </Itens>
          )
        )}
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
