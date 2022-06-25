import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Cercle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-top: 3px solid darkblue;
    animation:  linear 1s infinite  loading;

    @keyframes loading {
        0% { transform: rotate(0deg) }
        100%   { transform: rotate(360deg) }
    }
`

const Loading = () => {
  return (
    <Container>
        <Cercle></Cercle>
    </Container>
  )
}

export default Loading