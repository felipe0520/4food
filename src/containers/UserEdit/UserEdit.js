import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { doDatarefresh } from '../../actions/login'
import logoimg from '../../img/logo-future-eats-invert.svg'
import HistoryDivider from '../HistoryDivider/HistoryDivider'
import { StyledForm, DefaultWrapper, LoginImg, StyledText, StyledTextField, StyledButton, StyledTextHD } from '../../style/styled'

function UserEdit(props) {
    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = () => {
        const userData = JSON.parse(localStorage.getItem('user'))
        setValues({ ...values, nome: userData.name, email: userData.email, cpf: userData.cpf });
    };

    const [values, setValues] = React.useState({
        nome: "",
        email: "",
        cpf: ""
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleWhithSubmit = (event) => {
        event.preventDefault()
        props.doDatarefresh(values.nome, values.email, values.cpf)
    }
    return (
        <DefaultWrapper>

            <HistoryDivider />
            <LoginImg src={logoimg} class="Logo FourFoodA" />
            <StyledText variant='subtitle1'>Modificar dados</StyledText>
            <StyledText color='error' variant='subtitle1'>{props.ErroMsg}</StyledText>
            <StyledForm onSubmit={handleWhithSubmit}>
                <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Nome' placeholder='Nome e sobrenome' type='text' required onChange={handleChange("nome")} value={values.nome}></StyledTextField>
                <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='E-mail' placeholder='email@email.com' type='email' required onChange={handleChange("email")} value={values.email}></StyledTextField>
                <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='CPF' placeholder='000.000.000-00' type='number' required onChange={handleChange("cpf")} value={values.cpf}></StyledTextField>
                <StyledButton variant='contained' type='submit' >
                    <StyledTextHD>Salvar</StyledTextHD>
                </StyledButton>
            </StyledForm>

        </DefaultWrapper>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    doDatarefresh: (inputNome, inputEmail, inputCpf) => dispatch(doDatarefresh(inputNome, inputEmail, inputCpf)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)