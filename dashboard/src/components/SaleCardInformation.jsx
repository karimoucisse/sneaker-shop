import styled from "styled-components"
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
`
const Card = styled.div`
    flex: 1;
    padding: 30px;
    margin: 0 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    &:hover {
        transform: scale(1.008);
    }
`
const Title =  styled.span`

`
const MoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
`
const Price = styled.span`
    font-size: 30px;
    font-weight: bold;
`
const Rate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`
const Compare = styled.span`
    font-size: 15px;
    color: grey;
`
const SaleCardInformation = () => {
  return (
    <Container>
        <Card>
            <Title>Revenue Total</Title>
            <MoneyContainer>
                <Price>1 000€</Price>
                <Rate>+2.5 <ArrowUpwardOutlinedIcon style= {{color: "green", marginLeft: "5px", fontSize: "14px"}}/></Rate>
            </MoneyContainer>
            <Compare>Comparé au mois passé</Compare>
        </Card>
        <Card>
            <Title>Nombre de produits vendu</Title>
            <MoneyContainer>
                <Price>700</Price>
                <Rate>-11 <ArrowDownwardOutlinedIcon style= {{color: "red", marginLeft: "5px", fontSize: "14px"}}/></Rate>
            </MoneyContainer>
            <Compare>Comparé au mois passé</Compare>
        </Card>
        <Card>
            <Title>utilisateur inscrit</Title>
            <MoneyContainer>
                <Price>30</Price>
                <Rate>+10 <ArrowUpwardOutlinedIcon style= {{color: "green", marginLeft: "5px", fontSize: "14px"}}/></Rate>
            </MoneyContainer>
            <Compare>Comparé au mois passé</Compare>
        </Card>
    </Container>
  )
}

export default SaleCardInformation