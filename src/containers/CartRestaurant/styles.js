import styled from 'styled-components'
import { CardActionArea, CardMedia, Typography } from '@material-ui/core'

export const CardWrapper = styled.div`
  background-color: none;
  width: 360px;
  height: 196px;
  display: flex;
  align-items:center;
  justify-content: center;
`

export const CardActionWrapper = styled(CardActionArea)`
  width: 328px;
  height: 188px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

export const CardMediaStyled = styled(CardMedia)`
  width: 100%;
  height: 120px;
  border-radius: 5px 5px 0px 0px;
  
`
export const InfosRestaurantWrapper = styled.div`
display: flex;
flex-direction: row;
`

export const RestaurantName = styled(Typography)`
  width: 296px;
  height: 18px;
  color: #e8222e;
  margin-bottom: 2vw;
`

export const DeliveryTimeStyled = styled(Typography)`
  width: 148px;
  height: 18px;
  text-align: left;
  color: #b8b8b8;
`

export const ShippingStyled = styled(Typography)`
  width: 140px;
  height: 18px;
  text-align: right;
  color: #b8b8b8;
`