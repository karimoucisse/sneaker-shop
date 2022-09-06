import styled from "styled-components"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 60px);
    position: sticky;
    top: 60px;
    padding: 20px;
    color: #555;
    background-color: rgb(254, 254, 255);
    box-shadow: 4px 0 4px rgba(202, 202, 206, 0.4);
`
const Menu = styled.div`
    margin-bottom: 10px;
`
const Title = styled.h3`
    font-size: 14px;
    /* text-align: center; */
    color: #a09b9b;
`
const List = styled.ul`
    list-style: none;
    padding: 5px;
`
const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 20px ;
    margin-bottom: 15px;
    &:hover{
        background-color: rgb(228, 228, 250);
    }
    &:nth-child(${props => props.itemNumber}) {
        background-color: rgb(228, 228, 250);
    }
`
const SideBar = () => {
     const {itemNumber, setItemNumber } = useContext(UserContext)
    const navigate = useNavigate()

    const onItemClick = (number) => {
        setItemNumber(number)
        switch (number) {
        case 1:
            navigate('/')
            break;
        case 2:
            navigate('/users')
            break;
        case 3:
            navigate('/products')
            break;
        case 4:
            navigate('/orders')
            break;
        case 5:
            navigate('/table')
            break;
        default:
            console.log(`error`);
    }}
  return (
    <Container>
        <Menu>
            <Title>Tableau de bord</Title>
            <List>
                <Item onClick={()=> onItemClick(1)} itemNumber= {itemNumber}>
                    <HomeOutlinedIcon style={{fontSize: "20px"}}/>
                    Acceuil
                </Item>
                <Item onClick={()=> onItemClick(2)} itemNumber= {itemNumber}>
                    <AccountCircleOutlinedIcon style={{fontSize: "20px"}}/>
                    Utilisateurs
                </Item>
                <Item onClick={()=> onItemClick(3)} itemNumber= {itemNumber}>
                    <StorefrontOutlinedIcon style={{fontSize: "20px"}}/>
                    Produits
                </Item>
                <Item onClick={()=> onItemClick(4)} itemNumber= {itemNumber}>
                    <AttachMoneyOutlinedIcon style={{fontSize: "20px"}}/>
                    Commandes
                </Item>
                <Item onClick={()=> onItemClick(5)} itemNumber= {itemNumber}>
                    <TrendingUpOutlinedIcon style={{fontSize: "20px"}}/>
                    Table
                </Item>
                
            </List>
        </Menu>
    </Container>
  )
}
export default SideBar
