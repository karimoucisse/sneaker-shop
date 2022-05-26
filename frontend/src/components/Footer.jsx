import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
    background-color: #212a2f;
    color: white;
    margin-top: 30px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px;
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
        background-color: white;
        color: #212a2f;
        transition: all ease-in 0.2s;
    }
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    list-style-type: none;
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        color: #dfd9d9;
        transition: all ease-in 0.2s;
    }
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    &:hover {
        color: #dfd9d9;
        transition: all ease-in 0.2s;
    }
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Sneaker Shop</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nam! Quia unde ut possimus ea dolores, quod qui id aperiam non. Ducimus doloribus officia, maiores in non sequi quas quam.
                Non doloribus officiis tempora pariatur explicabo
            </Desc>
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
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem> 
                <ListItem>Kids</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem><RoomIcon/>56 Rue labrouste,75015 Paris</ContactItem>
            <ContactItem><PhoneIcon/>+33 6 57 20 40 13</ContactItem>
            <ContactItem><EmailIcon/>Sneaker.Shop@gmail.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer