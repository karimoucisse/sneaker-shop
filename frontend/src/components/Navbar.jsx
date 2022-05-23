import { Link } from "react-router-dom";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`
    height: 60px;
    display: flex;
    background-color: #ffff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    width: 100%;
`
const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px 20px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Logo = styled.div`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Category = styled.div`
    flex: 1;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: rgba(0,0,0,0.7);
        /* transform: scale(1.007); */
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItem = styled(Link)`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: black;
    &:hover {
        color: rgba(0,0,0,0.8);
        transform: scale(1.01);
    }
`
const BadgeContainer = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    &:hover {
        color: rgba(0,0,0,0.8);
        transform: scale(1.01);
    }
`
const Navbar = () => {
  return (
    <Container>
        <SubContainer>
            <Left>
                <Logo>Sneaker Shop</Logo>
            </Left>
            <Center>
                <Category>Homme</Category>
                <Category>Femme</Category>
                <Category>Enfant</Category>
            </Center>
            <Right>
                <MenuItem to= "/signup">SIGN IN</MenuItem>
                <MenuItem to= "/login">LOGIN</MenuItem>
                <BadgeContainer>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartIcon color="action" />
                    </Badge>
                </BadgeContainer>
            </Right>
        </SubContainer>
    </Container>
  )
}

export default Navbar