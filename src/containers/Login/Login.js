import React, { useState } from 'react';
import { connect } from "react-redux";
import { doLogin } from '../../actions/login'
import { routes } from "../Router/index";
import { push } from "connected-react-router";
import logoimg from '../../img/logo-future-eats-invert.svg'
import { StyledForm, StyledOutlinedInput, DefaultWrapper, LoginImg, StyledText, StyledTextField, StyledButton, StyledTextHD } from '../../style/styled'
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import CardRestaurante from '../../components/CardRestaurante/CardRestaurante'

function Login(props) {
    const [values, setValues] = React.useState({
        user: "astrodev@future4.com",
        pass: "123456",
        passcError: false,
        showPassword: false
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const handleWhithSubmit = async (event) => {
        event.preventDefault()
        await props.doLogin(values.user, values.pass)
    }

    return (
        <DefaultWrapper>

            <LoginImg src={logoimg} class="Logo FourFoodA" />
            <StyledText variant='subtitle1'>Entrar</StyledText>
            <StyledForm onSubmit={handleWhithSubmit}>
                <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='E-mail' placeholder='email@email.com' type='email' required onChange={handleChange("user")} value={values.user}></StyledTextField>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="senha">Senha</InputLabel>
                    <StyledOutlinedInput
                        id="senha"
                        required={true}
                        type={values.showPassword ? "text" : "password"}
                        value={values.pass}
                        onChange={handleChange("pass")}
                        placeholder='mínimo 6 caracteres'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>

                <StyledButton variant='contained' type='submit'>
                    <StyledTextHD>Entrar</StyledTextHD>
                </StyledButton>
            </StyledForm>
            <StyledText variant='subtitle1' onClick={props.doSignUp}>Não possui cadastro? Clique aqui.</StyledText>

        </DefaultWrapper>
    );
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: (inputUser, inputPass) => dispatch(doLogin(inputUser, inputPass)),
    doSignUp: () => dispatch(push(routes.signUp))
})

export default connect(null, mapDispatchToProps)(Login)