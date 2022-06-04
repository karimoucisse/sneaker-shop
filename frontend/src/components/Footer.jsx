import styled from "styled-components"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useMediaQuery } from 'react-responsive'

const Container = styled.div`
    display: flex;
    background-color: #212a2f;
    color: white;
    margin-top: 30px;
    padding: 20px;
    @media (max-width: 748px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 20px; */
`
const Logo = styled.h1`
    
`

const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    /* background-color: white; */
    color: white;
    cursor: pointer;
    &:hover {
        color: #b0b3b6;
        transition: all ease-in 0.2s;
    }
`

const Center = styled.div`
    flex: 1;
    @media (max-width: 748px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    /* padding: 20px; */
`
const Title = styled.h2`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    flex-wrap: wrap;
`
const ListItem = styled((Link))`
    color: #ffff;
    width: 50%;
    margin-bottom: 20px;
    cursor: pointer;
    @media (max-width: 748px) {
        text-align: center;
    }
    &:hover {
        color: #dfd9d9;
        transition: all ease-in 0.2s;
    }
`
const Right = styled.div`
    flex: 1;
    @media (max-width: 748px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    /* align-items: center; */
    cursor: pointer;
    gap: 10px;
    transition: all ease-in 0.2s;
    &:hover {
        color: #dfd9d9;
    }
`

const Footer = () => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 748px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 748px)' })

  return (
    <Container>
        <Left>
            <Logo>Sneaker Shop</Logo>
            {isBigScreen && 
                <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedInIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <GitHubIcon/>
                    </SocialIcon>
                </SocialContainer>
            }
        </Left>
        <Center>
            <Title>Liens</Title>
            <List>
                <ListItem to= "/">Accueil</ListItem>
                <ListItem to= "/basket">Panier</ListItem>
                <ListItem to= "/products/Man">Homme</ListItem>
                <ListItem to= "/products/Woman">Femme</ListItem> 
                <ListItem to= "/my-account">Mon compte</ListItem>
                <ListItem to= "/">Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem><RoomIcon/>56 Rue labrouste,75015 Paris</ContactItem>
            <ContactItem><PhoneIcon/>+33 6 57 20 40 13</ContactItem>
            <ContactItem><EmailIcon/>Sneaker.Shop@gmail.com</ContactItem>
        </Right>
        {isTabletOrMobile && 
            <SocialContainer>
                <SocialIcon>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon>
                    <LinkedInIcon/>
                </SocialIcon>
                <SocialIcon>
                    <GitHubIcon/>
                </SocialIcon>
            </SocialContainer>
        }
    </Container>
  )
}

export default Footer