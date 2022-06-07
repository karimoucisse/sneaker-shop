import { useContext } from "react"
import styled from "styled-components"
import { OrderContext } from "../context/Order";
import OrderCard from "./OrderCard"

const Container = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 25px;
    @media (max-width: 770px) {
        margin-top: 40px;
    }
`
const Paragraph = styled.p`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
`
const Order = () => {
    const {order} = useContext(OrderContext)

    if(!order) {
        return null
    }
  return (
    <Container>
        {order.length > 0 && 
            order.map(item => (
                <OrderCard item= {item}/>
            ))
        }
       {order.length === 0 && <Paragraph>Vous n'avez passer aucune commande</Paragraph>}
    </Container>
  )
}

export default Order