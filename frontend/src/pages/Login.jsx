import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.2)),
    no-repeat url("/img_couverture.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 30%;
    background-color: white;
    padding: 40px;
`
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:15px 0 ;
    outline: none;
    padding: 10px;
    font-size: 16px;
`

const Button = styled.button`
    margin: 10px 0;
    padding: 12px 35px;
    width: 100%;
    font-weight: 600;
    border: 0.5 solid transparent;
    background-color: #212a2f;
    color:white ;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #212a2f;
        border-color: black ;
        transition: all ease-in-out 0.2s;
        /* transform: scale(1.01); */
    }
`
const Paragraph = styled.p`
    font-size: 12px;
`
const Linker = styled(Link)`
    color: black;
    margin: 5px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: #646464;
    }

`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder= "email"/>
                <Input placeholder= "mot de passe"/>
                <Button>LOGIN</Button>
                <Linker to ="/">Mot de passe oublié</Linker>
                <Paragraph>Vous n'êtes pas encore membre ?<Linker to= "/signup">Rejoignez-nous.</Linker></Paragraph>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login