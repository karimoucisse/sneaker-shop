import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/Cart"
import { UserContext } from "../context/User";
import { OrderContext } from "../context/Order";
import { useNavigate } from "react-router-dom"
import StripeCheckout from "react-stripe-checkout";

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    @media (max-width: 870px) {
        margin-top: 40px;
    }
`
const Card = styled.div`
    background-color: #ffff;
    padding: 30px;
    max-height: 400px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
    min-width: 370px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 870px) {
        min-width: 250px;
    }
`
const Title = styled.h2`
    text-align: center;
    letter-spacing: 0.5px;
    color: #1e3e59;
    text-shadow: 2px 2px 4px #d6d7d7;
`
const SubTitle = styled.p`
    margin-bottom: 15px;
    text-align: center;
    cursor: pointer;
    color: black;
    &:hover {
        color: #4d4a4a;
    }
`
const IdentificationBtn = styled.button`
    background-color: #ffff;
    width: 100%;
    padding: 10px 0;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 20px;
    &:hover {
        transform: scale(1.002);
    }
`
const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`
const Paragraph = styled.div`
    color: rgb(145, 145, 145);
`
const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ;
    padding-top: 20px;
`
const TotalParagraph = styled.p`
    font-weight: 600;
`
const ValidationBtn = styled.button`
    margin-top: 40px;
    width: 100%;
    padding: 10px 0;
    font-size: 18px;
    cursor: pointer;
    background-color: rgb(33,42,47);
    color: #ffff;
    &:hover {
        transform: scale(1.002);
    }
`

const TotalCard = () => {
    const {cart, modifyCart} = useContext(CartContext)
    const {user} = useContext(UserContext)
    const {createOrder} = useContext(OrderContext)
    const navigate = useNavigate()
    const [totalPrice, setTotalPrice] = useState(0)
    const finalTotal = totalPrice +4
    const stripeTotal = finalTotal * 100
    const stripePubliKey = "pk_test_51KuOfTD02MbHzUJv4QbJeezaYjUtN63wqsEq4rYz2ix8T0xQR4tVmqB0KCc0SyqaFrJlMAxrwZdPHWmY3hDjiTnP00hlEWdkpl"
    const [stripeToken, setStripeToken] = useState() 

    const newOrder = {
        userId: user ? user._id : null,
        products: cart.products,
        amount: finalTotal,
        address: user ? user.adress : null,
    }
    useEffect(() => {
        let total = 0
        for (let i = 0; i < cart.products.length ; i++) {
            total += cart.products[i].product[0].price
        }
        setTotalPrice(total)
    }, [cart])

    
    const onToken = (token) => {
        setStripeToken(token)
    }
    
    useEffect(() => {
        const stripeRequest = async () => {
            const response = await fetch ('http://localhost:5000/payment', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    tokenId: stripeToken.id,
                    amount: stripeTotal,
                })
            })
            if(response.status >= 400) {
                createOrder(newOrder)
            } else {
                console.log('response: ' + response);
            }
        }
        if(stripeToken) {
            stripeRequest()
            modifyCart(cart._id, [])
            navigate('/')
        }
    }, [stripeToken])

    if(!cart) {
        return null
    }
    if(!user) {
        return null
    }
  return (
    <Container>
        <Card>
            {user && <Title>Sneaker Shop</Title>}
            {!user && 
                <>
                    <SubTitle>Connectez-vous pour poursuivre votre achat !</SubTitle>
                    <IdentificationBtn onClick={() => navigate('/login')}>Identification</IdentificationBtn>
                </>
            }
            <PriceContainer>
                <Paragraph>Montant de la commande</Paragraph>
                <Paragraph>{totalPrice}€</Paragraph>
            </PriceContainer>
            <PriceContainer>
                <Paragraph>Livraison</Paragraph>
                <Paragraph>4€</Paragraph>
            </PriceContainer>
            <TotalContainer>
                <TotalParagraph>Total:</TotalParagraph>
                <TotalParagraph>{finalTotal}€</TotalParagraph>
            </TotalContainer>
            <StripeCheckout
                name= "Sneaker Shop"
                image= "https://cdn.shopify.com/s/files/1/2358/2817/products/air-max-90-off-white-desert-ore-672202.png?v=1638813390"
                description={`Votre Total est de ` + finalTotal + "€" }
                amount= {stripeTotal}
                token = {onToken}
                stripeKey= {stripePubliKey}
                currency="EUR"
            >
                <ValidationBtn onClick={() => createOrder(newOrder)}>Finaliser la commande</ValidationBtn>
            </StripeCheckout>
        </Card>
    </Container>
  )
}

export default TotalCard