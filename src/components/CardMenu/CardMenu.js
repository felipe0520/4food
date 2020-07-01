import React from "react";
import {
  CardMediaStyled,
  CardStyled,
  CardContentMenu,
} from "./CardMenuStyles";
import { CardActions } from "@material-ui/core";
import SelectFoodToCart from "../../containers/SelectFoodToCart/SelectFoodToCart";
import {StyledTextHD} from '../../style/styled'


function CardMenu(props) {
  return (
    <CardStyled>
      <div>
        <CardMediaStyled component="img" src={props.img} />
      </div>
      <CardContentMenu>
        <StyledTextHD color={'primary'}>{props.title}</StyledTextHD>
        <StyledTextHD color={'secondary'} variant={'subtitle2'}>{props.description}</StyledTextHD>
        <StyledTextHD>R${props.price.toLocaleString("pt-BR", {minimumFractionDigits: 2,})}</StyledTextHD>
        <CardActions>
          <SelectFoodToCart
            id={props.id}
            price={props.price}
            title={props.title}
            description={props.description}
            img={props.img}
          />
        </CardActions>
      </CardContentMenu>
    </CardStyled>
  );
}

export default CardMenu;
