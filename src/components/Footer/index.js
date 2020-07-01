import React, { useEffect } from 'react'
import { push } from 'connected-react-router'
import {routes} from '../../containers/Router/index'
import {getActiveOrders} from '../../actions/login'
import { connect } from 'react-redux'
import { FooterWrapper, IconsDiv, IconsWrapper} from './styles'
import PedidosAbertos from '../PedidosAbertos/PedidosAbertos'
import Badge from '@material-ui/core/Badge';


function Footer(props) {
    useEffect(() => {
        props.getActiveOrders()
    }, [])

    let valorInicial = 0;
    const itensCarrinho = props.ItensCarrinho.reduce(
        (acumulador , valorAtual) => acumulador + valorAtual.quantity
        ,valorInicial 
    );

        return (
            <FooterWrapper>
                <div>
                    {props.ActiveOrders === null ? "" :
                        <PedidosAbertos
                            restaurantName={props.ActiveOrders.restaurantName}
                            totalPrice={props.ActiveOrders.totalPrice}
                            createdAt={props.ActiveOrders.createdAt}
                            expiresAt={props.ActiveOrders.expiresAt}
                        />
                    }
                </div>
                <IconsDiv>
                <IconsWrapper 
                onClick={props.goToHome}
                >
                <img src={require("./Images/homepage.png")} type="icon" alt="ícone clicável home"></img>
                </IconsWrapper>

                <IconsWrapper 
                onClick={props.goToCart}
                >
                    <Badge badgeContent={itensCarrinho} color="secondary">
                        <img src={require("./Images/shopping-cart.png")} type="icon" alt="ícone clicável carrinho de pedidos"></img>
                    </Badge>
                </IconsWrapper>

                <IconsWrapper 
                onClick={props.goToUserProfile} 
                >
                <img src={require("./Images/avatar.png")} type="icon" alt="ícone clicável meu perfil"></img>
                </IconsWrapper>
                </IconsDiv>

            </FooterWrapper>
        )
}
const mapStateToProps = state => ({
    ActiveOrders: state.activeorders, ItensCarrinho: state.saveAndRemoveProducts
});
const mapDispatchToProps = (dispatch) => ({
    // goToShoppingCart: () => dispatch (push(routes.shoppingCart)),
    goToUserProfile: () => dispatch (push(routes.myprofile)),
    goToHome: () => dispatch (push(routes.feed)),
    goToCart: () => dispatch (push(routes.cart)),
    getActiveOrders: () => dispatch(getActiveOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)