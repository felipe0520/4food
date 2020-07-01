import React, { useState } from 'react';
import { connect } from "react-redux";
import { doSignUp } from '../../actions/login'
import logoimg from '../../img/logo-future-eats-invert.svg'
import HistoryDivider from '../HistoryDivider/HistoryDivider'
import { StyledOutlinedInput, StyledForm, DefaultWrapper, LoginImg, StyledText, StyledTextField, StyledButton, StyledTextHD } from '../../style/styled'
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function SignUp(props) {
    const [values, setValues] = React.useState({
        passc: "",
        pass: "",
        nome: "",
        email: "",
        cpf: "",
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
        if (values.pass != values.passc) {
            setValues({ ...values, passcError: true });
        } else {
            await props.doSignUp(values.nome, values.email, values.cpf, values.pass)
        }
    }
    return (
        <DefaultWrapper>

            <HistoryDivider />
            <LoginImg src={logoimg} class="Logo FourFoodA" />
            <StyledText variant='subtitle1'>Cadastrar</StyledText>
            <StyledText color='error' variant='subtitle1'>{props.ErroMsg}</StyledText>
            <StyledForm onSubmit={handleWhithSubmit}>
                <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Nome' placeholder='Nome e sobrenome' type='text' required onChange={handleChange("nome")} value={values.nome}></StyledTextField>
                <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='E-mail' placeholder='email@email.com' type='email' required onChange={handleChange("email")} value={values.email}></StyledTextField>
                <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='CPF' placeholder='000.000.000-00' type='number' required onChange={handleChange("cpf")} value={values.cpf}></StyledTextField>

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
                <FormControl variant="outlined">
                    <InputLabel htmlFor="senha2">Confirmação senha</InputLabel>
                    <StyledOutlinedInput
                        id="senha2"
                        required={true}
                        error={values.passcError}
                        type={values.showPassword ? "text" : "password"}
                        value={values.passc}
                        onChange={handleChange("passc")}
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
                        labelWidth={150}
                    />
                </FormControl>
                <StyledButton variant='contained' type='submit' >
                    <StyledTextHD>Criar</StyledTextHD>
                </StyledButton>
            </StyledForm>

        </DefaultWrapper>
    );
}

const mapStateToProps = state => ({ ErroMsg: state.Error });

const mapDispatchToProps = (dispatch) => ({
    doSignUp: (inputNome, inputEmail, inputCpf, inputPass) => dispatch(doSignUp(inputNome, inputEmail, inputCpf, inputPass)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)