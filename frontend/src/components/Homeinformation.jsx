import styled from "styled-components"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Container = styled.div`
    display: flex;
    padding: 20px 40px;
    @media (max-width: 782px) {
        flex-direction: column;
        gap: 30px;
    }
`
const Box = styled.div`
    padding: 20px;
    flex: 1;
    display: flex;
    gap: 20px;
    background-color: #F5F5F5;
    margin-left: 20px;
    @media (max-width: 782px) {
        flex-direction: column;
        align-items: center;
    }
`
const Logo = styled(LocalShippingOutlinedIcon)`

`
const Paragraph = styled.p`
    font-weight: 500;
`
const Homeinformation = () => {
  return (
    <Container>
        <Box>
            <Logo/>
            <Paragraph>Livraison offerte dès 49,99€</Paragraph>
        </Box>
        <Box>
            <Logo/>
            <Paragraph>Délais de livraison 3-4 jours</Paragraph>
        </Box>
        <Box>
            <Logo/>
            <Paragraph>Retours Gratuit</Paragraph>
        </Box>
    </Container>
  )
}

export default Homeinformation