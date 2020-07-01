import React from "react";
import {
  StyledTextHD,
  RestCardSpace,
  StyledCardMedia,
  RestCard,
} from "../../style/styled";
import "moment/locale/pt-br";

function CardRestaurante(props) {
  return (
    <RestCard>
      <StyledCardMedia component="img" src={props.logoUrl} />{" "}
      <div>
        <StyledTextHD color="primary" variant="subtitle1">
          {props.name}
        </StyledTextHD>
        <StyledTextHD color="secondary" variant="subtitle2">
          {props.category}
        </StyledTextHD>
        <RestCardSpace>
          <StyledTextHD color="secondary" variant="subtitle2">
            Entrega: {props.deliveryTime}min. aprox.
          </StyledTextHD>
          <StyledTextHD color="secondary" variant="subtitle2">
            Frete: {props.shipping ? `R$ ${props.shipping},00` : "Grátis"}
          </StyledTextHD>
        </RestCardSpace>
        <StyledTextHD color="secondary" variant="subtitle2">
          {props.address}
        </StyledTextHD>
      </div>
    </RestCard>
  );
}

export default CardRestaurante;
