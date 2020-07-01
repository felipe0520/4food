import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import {Avatar} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';

export const WrapperDiv = styled.div `
display: flex;
justify-content: space-between;
padding: 10px;
`
export const StyledPaper = styled(Paper)`
margin: 10px;
padding: 10px;
display: inline-flex;
min-width: 50%;
`
export const WrapperTop = styled.div `
display: flex;
flex-direction: row;
margin-bottom: 10px;
`
export const StyledAvatar = styled(Avatar)`
width: 20px;
height: 20px;
margin-right: 5px;
`
export const StyledCommentIcon = styled(CommentIcon)`
margin-right: 5px;
font-size: 15px;
`
export const WrapperContent = styled.div `
width: 100%;
`
