import { Link } from "react-router-dom";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import { CartContext } from "../context/Cart"
import { useMediaQuery } from 'react-responsive'

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
    padding: 10px 10px 10px 40px;
    position: relative;
`
const Left = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
`
const Logo = styled.div`
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
    color: #1e3e59;
    text-shadow: 2px 2px 4px #d6d7d7;
`
const Center = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`
const Category = styled(Link)`
    /* flex: 2; */
    font-size: 20px;
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
    flex: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const MenuItem = styled(Link)`
    font-size: 14px;
    cursor: pointer;
    margin-left: 20px;
    color: black;
    &:hover {
        color: rgba(0,0,0,0.8);
        transform: scale(1.01);
    }
`
const BadgeContainer = styled(Link)`
    font-size: 14px;
    cursor: pointer;
    margin-left: 15px;
    &:hover {
        color: rgba(0,0,0,0.8);
        transform: scale(1.01);
    }
`
const MenuButton = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: 40px;

`
const MenuBar = styled.div`
   position: absolute;
   border: 0.5px solid;
   width: 40px;
   height: 5px;
   background-color: black;
   transition:
        transform 0.4s ease-in-out,
        top 0.4s 0.4s ease-in-out;

   &:nth-child(1) {
        top:  ${(props) => props.isActive ? '15px' : 0} ;
        transform:  ${(props) => props.isActive ? "rotate(45deg)" :"rotate(0deg)" };
   }
   &:nth-child(2) {
        top: 15px;
        opacity:${(props) => props.isActive ? 0 : 1 };
   }
   &:nth-child(3) {
        top:  ${(props) => props.isActive ? '15px' : "30px"} ;
        transform:  ${(props) => props.isActive ? "rotate(-45deg)" :"rotate(0deg)" };
   }

`
const BurgerMenu = styled.div`
    position: absolute;
    display: ${(props) => props.isActive ? "flex" :"none" };
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    width: 250px;
    background-color: #FFFF;
    right:  ${(props) => props.isActive ? "0px" :"-290px" };
    top: 60px ;
    z-index:  5;
    box-shadow: -4px 4px 4px #807b7b;
    transition: right  4s ease-in-out,
    display 5s ease-in-out;
`
const ListElement = styled(Link)`
    color: black;
    font-size: 18px;
    &:hover {
        color: #3b3939;
    }
`
const Navbar = () => {
    const {user} = useContext(UserContext)
    const {cart} = useContext(CartContext)
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    const isBigScreen = useMediaQuery({ query: '(min-width: 815px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 815px)' })
    console.log(isActive);
    if(!cart) {
        return null
    }
  return (
    <Container>
        <SubContainer>
            <Left>
                <Logo onClick={() => navigate('/')}>Sneaker Shop</Logo>
            </Left>
            {isBigScreen && 
                <>
                    <Center>
                        <Category to='/products/Man'>Homme</Category>
                        <Category to='/products/Woman'>Femme</Category>
                        {/* <Category to='/products/Kid'>Enfant</Category> */}
                    </Center>
                    <Right>
                        {!user && 
                            <>
                                <MenuItem to= "/signup">S'inscrire</MenuItem>
                                <MenuItem to= "/login">Se connecter</MenuItem>
                            </>
                        }
                        {user && <MenuItem to= "/my-account"><AccountCircleIcon/></MenuItem>}
                        <BadgeContainer to= '/basket'>
                            <Badge badgeContent={cart.products.length} color="primary">
                                <ShoppingCartIcon color="action" />
                            </Badge>
                        </BadgeContainer>
                        
                    </Right>
                </>
            }
            {isTabletOrMobile && 
                <>
                    <BadgeContainer to= '/basket'>
                        <Badge badgeContent={cart.products.length} color="primary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </BadgeContainer>
                    <MenuButton onClick={() => setIsActive(!isActive)}>
                        <MenuBar isActive = {isActive}></MenuBar>
                        <MenuBar isActive = {isActive}></MenuBar>
                        <MenuBar isActive = {isActive}></MenuBar>
                    </MenuButton>
                    <BurgerMenu isActive = {isActive}>
                        {user && <ListElement to= "/my-account"><AccountCircleIcon/></ListElement>}
                        {!user &&
                            <>
                                <ListElement to= "/signup">S'inscrire</ListElement>
                                <ListElement to= "/login">Se connecter</ListElement>
                            </>
                        }
                        <ListElement to= "/">Accueil</ListElement>
                        <ListElement to= "/products/Man">Homme</ListElement>
                        <ListElement to= "/products/Woman">Femme</ListElement>
                        <ListElement to= "/basket">Panier</ListElement>
                        {/* <ListElement to= "/">COMMANDE</ListElement> */}
                    </BurgerMenu>
                </>
            }
        </SubContainer>
    </Container>
  )
}

export default Navbar