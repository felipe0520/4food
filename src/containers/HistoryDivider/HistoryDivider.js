import React from 'react';
import {connect} from "react-redux";
import {doLogin, doLogout} from '../../actions/login'
import {goBack} from "connected-react-router";
import {routes} from "../Router/index";
import {push} from "connected-react-router";
import backImg from '../../img/back.svg'
import {HDWrapper, StyledTextHD, HDWrapperCont, HDWrapperCenter} from '../../style/styled'
import Divider from '@material-ui/core/Divider';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

function HistoryDivider(props) {
    return (
        <HDWrapper>
            <HDWrapperCont>
                <div>{props.showGoBack ? <img src={backImg} onClick={props.goBack}/> : ""}</div>
                <HDWrapperCenter>
                    <StyledTextHD variant='subtitle2'>{props.head}</StyledTextHD>
                </HDWrapperCenter>
                <div>{props.showLogout ? <ExitToAppOutlinedIcon onClick={() => {props.doLogout()}}/> : ""}</div>
            </HDWrapperCont>
            <Divider />
        </HDWrapper>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    doLogin: (inputUser, inputPass) => dispatch(doLogin(inputUser, inputPass)),
    doLogout: () => dispatch(doLogout()),
    doSignUp: () => dispatch(push(routes.signUp)),
    goBack: () => dispatch(goBack())
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDivider)