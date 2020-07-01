import styled from 'styled-components'

import { } from '@material-ui/core'
import { HomeOutlined, ShoppingCartOutlined, PersonOutlineOutlined } from '@material-ui/icons'

export const FooterWrapper = styled.div`
width: 100%;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #ffffff;
display: flex;
align-items: center;
flex-direction: column;
position: fixed;
bottom: 0;
`

export const HomeIconStyled = styled(HomeOutlined)`
width: 27px;
height: 27px;
object-fit: contain;
`
export const ShoppingCartIconStyled = styled(ShoppingCartOutlined)`
width: 27px;
height: 27px;
object-fit: contain;
`

export const UserIconStyled = styled(PersonOutlineOutlined)`
width: 27px;
height: 27px;
object-fit: contain;
`

export const IconsWrapper = styled.div`
width: 120px;
height: 49px;
display: flex;
align-items: center;
justify-content: center;
`
export const IconsDiv = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
`