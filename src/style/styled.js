import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Typography, CardMedia } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Radio from "@material-ui/core/Radio";

//Radio
export const StyledRadio = styled(Radio)`
  padding: 5px;
  margin: 0;
`;

//Styled Material-ui
export const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  color: white;
  margin-right: 10px;
`;
export const StyledExpansionPanel = styled(ExpansionPanel)`
  background-color: #e8222e;
`;
export const StyledText = styled(Typography)`
  margin-top: 26px;
`;
export const StyledTextHD = styled(Typography)``;

export const StyledTextCat = styled(Typography)`
margin-right: 20px;
margin-left: 20px;
`;

export const StyledTextWhite = styled(Typography)`
  color: white;
`;
export const StyledTextField = styled(TextField)`
  width: 328px;
  height: 56px;
  border-radius: 1px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const StyledButton = styled(Button)`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #e8222e;
  font-size: 16px;
  font-family: "Roboto";
  margin-top: 16px;
  margin-bottom: 8px;
`;
export const StyledOutlinedInput = styled(OutlinedInput)`
  width: 328px;
  height: 56px;
  border-radius: 1px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
// Styled comum

// forms
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
// imgs
export const LoginImg = styled.img`
  margin: 15px 128px 0px 128px;
`;

// div
export const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
`;
export const HDWrapperCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;
export const HDWrapper = styled.div`
  width: 100vw;
`;
export const AddressWraper = styled.div`
  width: 100vw;
  background-color: lightgray;
  padding: 10px;
`;
export const HDWrapperCenter = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
`;
export const WrapperRed = styled.div`
  background-color: #e8222e;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const WrapperRedPedidos = styled.div`
  background-color: #e8222e;
  padding: 20px;
  display: flex;
  justify-content: left;
  min-height: 20vh;
  width: 100vw;
  z-index: -1;
`;
export const MPdiv = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 5px;
  width: 100%;
  justify-content: space-between;
`;
export const CardHistoryWrap = styled.div`
  margin: 5px;
  padding: 10px;
  border: 1pt gray solid;
  border-radius: 5px;
  width: 90vw;
`;
export const PedidosContWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding-left: 30px;
  width: 100%;
`;
export const RestCardSpace = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RestCard = styled.div`
  border-radius: 5px;
  width: 90%;
  margin: auto;
`;
export const StyledCardMedia = styled(CardMedia)`
  border-radius: 5px 5px 0 0;
  height: 120px;
`;
export const DivRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
export const DivLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
`;
export const DivSpaceBet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const DivRadios = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;
export const DivEmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 10vh;
`;
export const DivCartRestData = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: left;
  width: 100%;
  padding: 10px;
`;
