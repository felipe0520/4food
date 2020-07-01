import React from 'react';
import { connect } from "react-redux";
import { routes } from "../Router/index";
import { push } from "connected-react-router";
import logoimg from '../../img/logo-future-eats.svg'
import { WrapperRed, LoginImg } from '../../style/styled'
import Fade from '@material-ui/core/Fade';

function SplashScreen(props) {
    const handleWhithClick = (event) => {
        event.preventDefault()
        const token = localStorage.getItem('token')
        if (token === null) {
            props.goLogin()
        } else {
            props.goHome()
        }
    }
    return (
        <div>
            <Fade in={true} timeout={2000}>
                <WrapperRed onClick={handleWhithClick}>
                    <LoginImg src={logoimg} class="Logo FourFoodA" />
                </WrapperRed>
            </Fade>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    goLogin: () => dispatch(push(routes.login)),
    goHome: () => dispatch(push(routes.feed))
})

export default connect(null, mapDispatchToProps)(SplashScreen)