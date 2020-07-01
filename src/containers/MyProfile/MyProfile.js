import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { routes } from "../Router/index";
import { push } from "connected-react-router";
import { DefaultWrapper, MPdiv, StyledTextHD } from '../../style/styled'
import HistoryDivider from '../HistoryDivider/HistoryDivider';
import EditIcon from '@material-ui/icons/Edit';
import { doOrdersHistory } from '../../actions/login'
import CardHistory from '../../components/CardHistory/CardHistory'
import Footer from '../../components/Footer/index'

function MyProfile(props) {
    useEffect(() => {
        props.doOrdersHistory()
    }, [])

    const userData = JSON.parse(localStorage.getItem('user'))

    return (
        <DefaultWrapper>

            <HistoryDivider showGoBack={true} showLogout={true} head={'Meu Perfil'} />
            <MPdiv>
                <div>
                    <StyledTextHD><strong>{userData.name}</strong></StyledTextHD>
                    <StyledTextHD><strong>{userData.email}</strong></StyledTextHD>
                    <StyledTextHD><strong>{userData.cpf}</strong></StyledTextHD>
                </div>
                <div onClick={props.goToEditUser}>
                    <EditIcon />
                </div>
            </MPdiv>
            <MPdiv>
                <div>
                    <StyledTextHD>Endereço cadastrado:</StyledTextHD>
                    <StyledTextHD><strong>{userData.address}</strong></StyledTextHD>
                </div>
                <div onClick={props.goToNewAdress}>
                    <EditIcon />
                </div>
            </MPdiv>
            <DefaultWrapper>
                <StyledTextHD>Histórico de pedidos:</StyledTextHD>
                <StyledTextHD variant='subtitle1' >{props.Pedidos.length === 1 ? <strong>Você ainda não tem pedidos.</strong> : ""}</StyledTextHD>
                {props.Pedidos.length > 1 && props.Pedidos.map((item) => (
                    <CardHistory
                        restaurantName={item.restaurantName}
                        createdAt={item.createdAt}
                        totalPrice={item.totalPrice}
                    />
                ))}
            </DefaultWrapper>
            <Footer />

        </DefaultWrapper>
    );
}

const mapStateToProps = state => ({
    Pedidos: state.orderHistory
});

const mapDispatchToProps = (dispatch) => ({
    goToEditUser: () => dispatch(push(routes.useredit)),
    goToNewAdress: () => dispatch(push(routes.newAddress)),
    doOrdersHistory: () => dispatch(doOrdersHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)