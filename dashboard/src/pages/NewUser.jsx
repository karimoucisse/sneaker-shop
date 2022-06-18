import styled from "styled-components"
import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"

const Page = styled.div`
    display: flex;
`
const Container = styled.div`
    flex: 4;    
    padding: 30px;
`
const Title = styled.h1`
    margin-bottom: 20px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const FormContainer = styled.div`
     display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
const Item = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #777272;
`   
const Input = styled.input`
    outline: none;
    /* height: 25px; */
    padding: 15px;
    border: 1px solid grey;
    font-size: 16px;
`
const Button = styled.button`
    width: 200px;
    padding: 15px 0;
    border: none;
    background-color: darkblue;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        transform: scale(1.003);
    }
`
const NewUser = () => {
  return (
    <>
        <Navbar/>
        <Page>
            <SideBar/>
            <Container>
                <Title>Nouvel utilisateur</Title>
                <Form>
                    <FormContainer>

                        <Item>
                            <Label>Prénom</Label>
                            <Input placeholder="john" />
                        </Item>
                        <Item>
                            <Label>Nom</Label>
                            <Input placeholder="john" />
                        </Item>
                        <Item>
                            <Label>Email</Label>
                            <Input placeholder="john@gmail.com" />
                        </Item>
                        <Item>
                            <Label>Age</Label>
                            <Input placeholder="01/04/2001" />
                        </Item>
                        <Item>
                            <Label>Télephone</Label>
                            <Input placeholder="0659354013" />
                        </Item>
                        <Item>
                            <Label>Mot de passe</Label>
                            <Input placeholder="*******" type= "password" />
                        </Item>
                        <Item>
                            <Label>Adresse</Label>
                            <Input placeholder="52 rue johnart, 75012" />
                        </Item>
                    </FormContainer>
                    <Button>Ajouter</Button>
                </Form>
            </Container>
        </Page>
    </>
  )
}

export default NewUser