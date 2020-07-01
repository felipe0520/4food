import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";

export const CardMediaStyled = styled(CardMedia)`
  width: 96px;
  height: 112px;
`;
export const CardStyled = styled(Card)`
  display: flex;

  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 5px auto;
`;
export const TypographyWrapperTitle = styled(Typography)`
  width: 167px;
  height: 18px;
  color: #e8222e;
`;

export const TypographyDescription = styled(Typography)`
  width: 200px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: #b8b8b8;
`;

export const TypographyPrice = styled(Typography)`
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
`;

export const ButtonAdd = styled(Button)`
  position: absolute;
  right: 0.5vw;
  bottom: 0%;
  width: 90px;
  height: 31px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #000000;
  padding: 0;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.3px;
`;
export const ButtonRemove = styled(Button)`
  position: absolute;
  right: 0.5vw;
  bottom: 0%;
  width: 90px;
  height: 31px;
  border-radius: 8px 0 8px 0;
  border: solid 1px #e02020;
  padding: 0;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: #e02020;
`;

export const CardContentMenu = styled(CardContent)`
  position: relative;
  width: 100%;
`;
