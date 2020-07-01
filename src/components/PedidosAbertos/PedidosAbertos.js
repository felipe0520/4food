import React from "react";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {StyledTextHD, StyledTextWhite, StyledAccessTimeIcon, StyledExpansionPanel} from '../../style/styled'

function PedidosAbertos(props) {
return (
    <div>
    <StyledExpansionPanel square={true}>
        <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <StyledAccessTimeIcon />
        <StyledTextWhite variant='subtitle1' >Pedido em andamento ({props.restaurantName})</StyledTextWhite>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
                <div>
                    <StyledTextHD variant='subtitle1' >SUBTOTAL <strong>R${props.totalPrice ? (props.totalPrice.toLocaleString("pt-BR", {minimumFractionDigits: 2})) : ""}</strong></StyledTextHD>
                </div>
                <div>
                    <StyledTextHD variant='subtitle1' >Pedido realizado em: <strong>{moment(props.createdAt).format('LT')}</strong></StyledTextHD>
                    <StyledTextHD variant='subtitle1' >Previsão de entrega: <strong>{moment(props.expiresAt).format('LT')}</strong></StyledTextHD>
                </div>
        </ExpansionPanelDetails>
    </StyledExpansionPanel>
    </div>
);
}
export default PedidosAbertos
