import React, { useState } from "react";
import { connect } from "react-redux";
import { doLogin, sendNewOrder } from "../../actions/login";
import { routes } from "../Router/index";
import { push } from "connected-react-router";
import {
  DefaultWrapper,
  DivCartRestData,
  DivEmptyCart,
  DivRadios,
  DivRight,
  StyledRadio,
  DivSpaceBet,
  DivLeft,
  StyledTextHD,
  AddressWraper,
  StyledButton,
} from "../../style/styled";
import Footer from "../../components/Footer/index";
import HistoryDivider from "../../containers/HistoryDivider/HistoryDivider";
import Divider from "@material-ui/core/Divider";
import CardMenu from "../../components/CardMenu/CardMenu";

function Cart(props) {
  const userData = JSON.parse(localStorage.getItem("user"));

  const somaCarrinho = props.ItensCarrinho.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.price,
    props.RestDetails.shipping
  );

  const contaCarrinho = props.ItensCarrinho.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.quantity,
    0
  );

  const products = props.ItensCarrinho;

  const emptyCart = (
    <DivEmptyCart>
      <StyledTextHD>Carrinho vazio</StyledTextHD>
    </DivEmptyCart>
  );
  const cartItemsRender = (
    <>
      <DivCartRestData>
        <StyledTextHD color="primary">{props.RestDetails.name}</StyledTextHD>
        <StyledTextHD>{props.RestDetails.address}</StyledTextHD>
        <StyledTextHD>
          Entrega em aprox. {props.RestDetails.deliveryTime}min.
        </StyledTextHD>
      </DivCartRestData>
      <div>
        {props.ItensCarrinho.map((data) => {
          return (
            <CardMenu
              key={data.id}
              title={data.title}
              description={data.description}
              img={data.img}
              price={data.price}
              id={data.id}
            />
          );
        })}
      </div>
    </>
  );
  const [values, setValues] = useState({
    money: false,
    creditcard: false,
    metodoAtivo: "",
    erroMsg: "",
  });

  const handleWhitRadio = (event) => {
    if (event.target.name === "money") {
      setValues({
        ...values,
        money: true,
        creditcard: false,
        metodoAtivo: "money",
        erroMsg: "",
      });
    } else if (event.target.name === "creditcard") {
      setValues({
        ...values,
        money: false,
        creditcard: true,
        metodoAtivo: "creditcard",
        erroMsg: "",
      });
    }
  };

  const handleWhitNewOrder = () => {
    const preparaEnvio = {
      products,
      paymentMethod: values.metodoAtivo,
    };
    if (values.metodoAtivo !== "" && products) {
      props.sendNewOrder(props.RestDetails.id, preparaEnvio);
    } else {
      setValues({
        ...values,
        erroMsg:
          "Não foi possivel enviar o pedido. Certifique-se que existem produtos no carrinho e um método de pagamento selecionado.",
      });
    }
  };

  return (
    <DefaultWrapper>
      <HistoryDivider showGoBack={true} head={"Meu carrinho"} />
      <AddressWraper>
        <StyledTextHD>Endereço cadastrado:</StyledTextHD>
        <StyledTextHD>
          <strong>{userData.address}</strong>
        </StyledTextHD>
      </AddressWraper>
      <StyledTextHD color={"error"} variant={"body1"} align={"center"}>
        {values.erroMsg}
      </StyledTextHD>
      {contaCarrinho === 0 ? emptyCart : cartItemsRender}
      <DivRight>
        <StyledTextHD>
          Frete: R$
          {props.RestDetails.shipping &&
            props.RestDetails.shipping.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
        </StyledTextHD>
      </DivRight>
      <DivSpaceBet>
        <StyledTextHD>SUBTOTAL:</StyledTextHD>
        <StyledTextHD>
          R$
          {somaCarrinho &&
            somaCarrinho.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </StyledTextHD>
      </DivSpaceBet>
      <DivLeft>
        <StyledTextHD>Forma de pagamento</StyledTextHD>
        <Divider />
        <DivRadios name="money" onClick={handleWhitRadio}>
          <StyledRadio
            value="money"
            name="money"
            checked={values.money}
            onChange={handleWhitRadio}
          />
          <StyledTextHD name="money" onClick={handleWhitRadio}>
            Dinheiro
          </StyledTextHD>
        </DivRadios>
        <DivRadios name="creditcard" onClick={handleWhitRadio}>
          <StyledRadio
            value="creditcard"
            name="creditcard"
            checked={values.creditcard}
            onChange={handleWhitRadio}
          />
          <StyledTextHD name="creditcard" onClick={handleWhitRadio}>
            Cartão de crédito
          </StyledTextHD>
        </DivRadios>
      </DivLeft>
      <StyledButton>
        <StyledTextHD onClick={handleWhitNewOrder}>Confirmar</StyledTextHD>
      </StyledButton>
      <Footer />
    </DefaultWrapper>
  );
}

const mapStateToProps = (state) => ({
  RestDetails: state.SaveDetailInState,
  ItensCarrinho: state.saveAndRemoveProducts,
});

const mapDispatchToProps = (dispatch) => ({
  doLogin: (inputUser, inputPass) => dispatch(doLogin(inputUser, inputPass)),
  sendNewOrder: (idRest, arrayProd) =>
    dispatch(sendNewOrder(idRest, arrayProd)),
  doSignUp: () => dispatch(push(routes.signUp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
