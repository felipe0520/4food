import React, { Component } from 'react'
import { getRestaurantDetail } from "../../actions/RestaurantDetail";
import { connect } from "react-redux";
import { routes } from "../Router/index";
import { push } from "connected-react-router";

import { CardContent } from '@material-ui/core'
import { CardWrapper, CardActionWrapper, CardMediaStyled, InfosRestaurantWrapper, RestaurantName, DeliveryTimeStyled, ShippingStyled } from './styles'


class CartRestaurant extends Component {

    render() {

        const handleWhitClick = () => {
            this.props.getRestaurantDetail(this.props.id)
            this.props.goToRestaurantDetails()
        }

        return (
            <CardWrapper>

                <CardActionWrapper onClick={handleWhitClick}>
                    <CardMediaStyled component="img" src={this.props.image} />
                    <CardContent>
                        <RestaurantName variant="subtitle1">{this.props.name}</RestaurantName>
                        <InfosRestaurantWrapper>
                            <DeliveryTimeStyled variant="subtitle2">{this.props.deliveryTime} min </DeliveryTimeStyled>
                            <ShippingStyled variant="subtitle2">Frete R${this.props.shipping.toLocaleString("pt-BR", { minimumFractionDigits: 2, })} </ShippingStyled>
                        </InfosRestaurantWrapper>
                    </CardContent>
                </CardActionWrapper>

            </CardWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantDetail: (id) => dispatch(getRestaurantDetail(id)),
        goToRestaurantDetails: () => dispatch(push(routes.RestaurantDetailPage))
    }
}

export default connect(null, mapDispatchToProps)(CartRestaurant)
