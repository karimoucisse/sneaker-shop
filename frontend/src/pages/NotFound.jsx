import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 30px;
`
const Title = styled.h1`

`
const Button = styled.button`
    padding: 10px 20px;
    color: white;
    background-color: darkblue;
    border: 1px solid darkblue;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all ease-in .2s;
    &:hover {
        background-color: white;
        color: darkblue;
    }
`

const NotFound = () => {
    const navigate = useNavigate()

  return (
    <Container>
        <Title>Nous ne trouvons pas la page que vous cherchez</Title>
        <Button onClick={() => navigate('/')}>Aller à la page d'acceuil</Button>
    </Container>
  )
}

export default NotFound