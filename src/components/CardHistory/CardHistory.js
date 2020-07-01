import React from 'react';
import {StyledTextHD, CardHistoryWrap} from '../../style/styled'
import * as moment from 'moment';
import 'moment/locale/pt-br';

function CardHistory(props) {
    return (
        <CardHistoryWrap>
            <StyledTextHD color={'primary'}>{props.restaurantName}</StyledTextHD>
            <StyledTextHD>{moment(props.createdAt).format('DD MMMM YYYY')}</StyledTextHD>
            <StyledTextHD><strong>SUBTOTAL R${props.totalPrice.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</strong></StyledTextHD>
        </CardHistoryWrap>
    );
}

export default CardHistory

