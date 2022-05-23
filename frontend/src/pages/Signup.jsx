import styled from "styled-components"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
    width: 40%;
    background-color: white;
    padding: 20px;
`
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    outline: none;
    padding: 10px;
    font-size: 16px;
`
const PasswordInput = styled.input`
    width: 100%;
    outline: none;
    font-size: 16px;
    padding: 10px;
`
const PasswordContainer = styled.div`
    position: relative;
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    
`
const EyeIcon = styled(VisibilityOffIcon) `
    color: grey;
    position: absolute;
    right: 10px;
    top: 0px;
    bottom: 0;
    margin: auto 0;
    cursor: pointer;
    &:hover {
        color: #979494;
    }
`
const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    margin-top: 10px;
    padding: 15px 40px;
    width: 40%;
    font-weight: 600;
    border: 0.5 solid transparent;
    background-color: #212a2f;
    color:white ;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #212a2f;
        border-color: black ;
        transition: all ease-in 0.2s;
        /* transform: scale(1.01); */
    }
`

const Signup = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder= "nom"/>
                <Input placeholder= "prénom"/>
                <Input placeholder= "email"/>
                <Input placeholder= "age" type= "number"/>
                <Input placeholder= "numero"/>
                <Input placeholder= "adresse"/>
                <PasswordContainer>
                    <PasswordInput placeholder= "mot de passe" type= "password"/>
                    <EyeIcon/>
                </PasswordContainer>
                <PasswordContainer>
                    <PasswordInput placeholder= "confirme mot de passe" type= "password"/>
                    {/* <EyeIcon/> */}
                </PasswordContainer>
                <Agreement>
                    By creating an account, I consent to the processing of my
                    personnal data in accordance with the <b>PRIVACY POLICY</b> 
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Signup