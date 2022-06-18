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

const NewProduct = () => {
  return (
    <>
        <Navbar/>
        <Page>
            <SideBar/>
            <Container>
                <Title>Nouvel categorie</Title>
                <Form>
                    <FormContainer>

                        <Item>
                            <Label>nom</Label>
                            <Input placeholder="Air force 1" />
                        </Item>
                        <Item>
                            <Label>Prix</Label>
                            <Input placeholder="179€" />
                        </Item>
                        <Item>
                            <Label>Marque</Label>
                            <Input placeholder="Nike" />
                        </Item>
                        <Item>
                            <Label>Couleur</Label>
                            <Input placeholder="white, red" />
                        </Item>
                        <Item>
                            <Label>Télephone</Label>
                            <Input placeholder="0659354013" />
                        </Item>
                        <Item>
                            <Label>Image</Label>
                            <Input placeholder="http://dzdzdzdzdzdzdzdzzzaerfrgre" />
                        </Item>
                        <Item>
                            <Label>description</Label>
                            <Input placeholder="52 rue johnart, 75012" />
                        </Item>
                        <Item>
                            <Label>En stock</Label>
                            <Input placeholder="20" type= "number" />
                        </Item>
                        <Item>
                            <Label>Categorie</Label>
                            <Input placeholder="Man, Nike" />
                        </Item>
                    </FormContainer>
                    <Button>Ajouter</Button>
                </Form>
            </Container>
        </Page>
    </>
  )
}

export default NewProduct