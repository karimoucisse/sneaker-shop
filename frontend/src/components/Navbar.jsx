import { Link } from "react-router-dom";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/User";
import { useContext } from "react";

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
    padding: 10px 20px 10px 40px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Logo = styled.div`
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Category = styled(Link)`
    flex: 1;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: black;
    &:hover {
        color: #444040;
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
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
  return (
    <Container>
        <SubContainer>
            <Left>
                <Logo onClick={() => navigate('/')}>Sneaker Shop</Logo>
            </Left>
            <Center>
                <Category to='/products/Man'>Homme</Category>
                <Category to='/products/Woman'>Femme</Category>
                <Category to='/products/Kid'>Enfant</Category>
            </Center>
            <Right>
                {!user && 
                    <>
                        <MenuItem to= "/signup">SIGN IN</MenuItem>
                        <MenuItem to= "/login">LOGIN</MenuItem>
                    </>
                }
                {user && 
                    <>
                        <MenuItem to= "/"><AccountCircleIcon/></MenuItem>
                        <BadgeContainer>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartIcon color="action" />
                            </Badge>
                        </BadgeContainer>
                    </>
                } 
            </Right>
        </SubContainer>
    </Container>
  )
}

export default Navbar