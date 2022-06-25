import { useEffect } from "react"
import styled from "styled-components"
import OrderProduct from "./OrderProduct"
import moment from "moment";

const Container = styled.div`
    width: 80%;
    background-color: #f5f5f5;
    box-shadow: 4px 4px 4px #d7d2d2;
    padding: 20px;
`

const OrderCard = ({item}) => {

  return (
    <Container>
        {item.products.map(product => (
            <OrderProduct product= {product}/>
        ))}
        <p>Adress de livraison : {item.address}</p>
        <p>Prix Total: {item.amount}€</p>
        <p>Date du commande: {moment(item.createdAt).format('LLL')}</p>
        <p>Status : {item.status === "pending" ? "en cours de livraison" : "terminer" }</p>
    </Container>
  )
}

export default OrderCard