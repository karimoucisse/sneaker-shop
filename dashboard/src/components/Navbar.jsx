import styled from "styled-components"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    align-items: center;
    padding: 0 30px;
    position: sticky;
    top: 0;
    z-index: 1000;
`
const Left = styled.div`
`
const Right = styled.div`
    display: flex;
`
const Logo = styled.h2`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
`
const AccountContainer = styled.div`
    display: flex;
    color: darkblue;
    gap: 10px;
    font-size: 20px;
    align-items: center;
    cursor: pointer;
    &:hover {
        color: #2f2fb7;
    }
`
const Paragraph = styled.p`
    font-weight: 500;
`
const Navbar = () => {
    const navigate = useNavigate()
  return (
    <Container>
        <Left>
            <Logo onClick={() => navigate('/')}>Sneaker Shop Admin</Logo>
        </Left>
        <Right>
            <AccountContainer>
                <AccountCircleOutlinedIcon/>
                <Paragraph>Mon compte</Paragraph>
            </AccountContainer>
        </Right>
    </Container>
  )
}

export default Navbar