import styled from "styled-components"
import { UserContext } from "../context/User";
import { useContext } from "react";

const Container = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    margin-left: 20%;
`
const Card = styled.div`
    background-color: #ffff;
    padding: 20px;
    width: 400px;
`
const Paragraph = styled.div`
  padding :20px 0;
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    color: #ffff;
    background-color: #212A2F;
    cursor: pointer;
    font-weight: 600;
    &:hover {
        transform: scale(1.003);
    }
`
const Span = styled.span`
    font-weight: 600; 
    margin-right: 10px;
`
const UserInfo = () => {
    const {user} = useContext(UserContext)

if(!user) {
    return null
}
  return (
    <Container>
        <Card>
            <Paragraph><Span>Prénom & nom: </Span> {user.firstName} {user.lastName}</Paragraph>
            <Paragraph><Span>Email: </Span> {user.email}</Paragraph>
            <Paragraph><Span>Numéro de télephone: </Span> {user.phoneNumber}</Paragraph>
            <Paragraph><Span>Adresse: </Span> {user.adress}</Paragraph>
            <Paragraph><Span>Date de naissance: </Span> {user.birthDate}</Paragraph>
            <Button>Modifier</Button>
        </Card>
    </Container>
  )
}

export default UserInfo