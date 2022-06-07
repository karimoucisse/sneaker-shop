import styled from "styled-components"
import { UserContext } from "../context/User";
import { useContext, useState } from "react";
import moment from "moment";
// moment().format();

const Container = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    margin-left: 20%;
    @media (max-width: 645px) {
       margin: 0;
       justify-content: center;
       margin-top: 40px;
    }
`
const Card = styled.div`
    background-color: #ffff;
    padding: 20px;
    width: 400px;
`
const Input = styled.input`
    width: 100%;
    padding: 10px ;
    margin-bottom: 20px;
`
const Paragraph = styled.div`
  padding :20px 0;
`

const Span = styled.span`
    font-weight: 600; 
    margin-right: 10px;
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    color: #ffff;
    background-color: #212A2F;
    cursor: pointer;
    font-weight: 600;
    margin-top: 10px;
    &:hover {
        transform: scale(1.003);
    }
`
const UserInfo = () => {
    const {user} = useContext(UserContext)
    const [modification, setModification] = useState(false)

    const inputValue = (e) => {
        console.log(e.target);
    }

if(!user) {
    return null
}
  return (
    <Container>
        <Card>
            {modification &&
                <>
                    <Input onChange={inputValue} defaultValue= {user.firstName}/>
                    <Input defaultValue= {user.lastName}/>
                    <Input defaultValue= {user.email} />
                    <Input defaultValue= {user.password} type= "password"/>
                    <Input defaultValue= {user.phoneNumber}/>
                    <Input defaultValue= {user.adress}/>
                    <Input defaultValue= {moment(user.birthDate).format('L')}/>
                </>
            }
            {!modification && 
                <>
                    <Paragraph><Span>Prénom & nom: </Span> {user.firstName} {user.lastName}</Paragraph>
                    <Paragraph><Span>Email: </Span> {user.email}</Paragraph>
                    <Paragraph><Span>Numéro de télephone: </Span> {user.phoneNumber}</Paragraph>
                    <Paragraph><Span>Adresse: </Span> {user.adress}</Paragraph>
                    <Paragraph><Span>Date de naissance: </Span> {moment(user.birthDate).format('L')}</Paragraph>
                </>
            }
            <Button onClick={() => setModification(!modification)}>
                {modification ? "appliquer" : "Modifier"}
            </Button>
        </Card>
    </Container>
  )
}

export default UserInfo