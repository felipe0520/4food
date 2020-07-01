import React, {useState} from 'react';
import {connect} from "react-redux";
import {doNewAddress} from '../../actions/login'
import {DefaultWrapper, StyledTextHD, StyledText, StyledTextField, StyledButton} from '../../style/styled'
import HistoryDivider from '../../containers/HistoryDivider/HistoryDivider'


function NewAddress(props) {
const [inputRua, setInputRua] = useState("");
const [inputNum, setInputNum] = useState("");
const [inputCompl, setInputCompl] = useState("");
const [inputBairro, setInputBairro] = useState("");
const [inputCidade, setInputCidade] = useState("");
const [inputUF, setInputUF] = useState("");

const handleWhithSubmit = async (event) => {
    event.preventDefault()
    const data = {
        street: inputRua,
        number: inputNum,
        neighbourhood: inputBairro,
        city: inputCidade,
        state: inputUF,
        complement: inputCompl
    }
    await props.doNewAddress(data)
}

    return (
        <DefaultWrapper>
                <HistoryDivider showGoBack={true}/>
            <StyledText variant='subtitle1'>Meu endereço</StyledText>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Logradouro' placeholder='Rua / Av.' type='text' required onChange={(event) => {setInputRua(event.target.value)}} value={inputRua}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Número' placeholder='Número' type='text' required onChange={(event) => {setInputNum(event.target.value)}} value={inputNum}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Complemento' placeholder='Apto. / Bloco' type='text' onChange={(event) => {setInputCompl(event.target.value)}} value={inputCompl}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Bairro' placeholder='Bairro' type='text' required onChange={(event) => {setInputBairro(event.target.value)}} value={inputBairro}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Cidade' placeholder='Cidade' type='text' required onChange={(event) => {setInputCidade(event.target.value)}} value={inputCidade}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Estado' placeholder='Estado' type='text' required onChange={(event) => {setInputUF(event.target.value)}} value={inputUF}></StyledTextField>
            <StyledButton variant='contained' type='button' onClick={handleWhithSubmit}>
            <StyledTextHD>Salvar</StyledTextHD>
            </StyledButton>
        </DefaultWrapper>
    );
}

const mapDispatchToProps = (dispatch) => ({
    doNewAddress: (data) => dispatch(doNewAddress(data)),
})

export default connect(null, mapDispatchToProps)(NewAddress)