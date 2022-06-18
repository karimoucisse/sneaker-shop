import styled from "styled-components"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Container = styled.div`
    flex: 1;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 20px;
    margin-right: 20px;
`
const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
`
const List = styled.ul`
    list-style-type: none;
`
const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`
const Circle = styled.span`
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
`
const UserContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Paragraph = styled.span`
    font-weight: 600;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: darkblue;
    color: white;
    cursor: pointer;
    gap: 5px;
`
const SmallBlock = () => {
  return (
    <Container>
        <Title>Nouvel Utilisateurs</Title>
        <List>
            <Item>
                <Circle>KC</Circle>
                <UserContent>
                    <Paragraph>Karimou</Paragraph>
                    <Paragraph>Cisse</Paragraph>
                </UserContent>
                <Button>
                    <VisibilityOutlinedIcon/>
                    Afficher
                </Button>
            </Item>
            <Item>
                <Circle>KC</Circle>
                <UserContent>
                    <Paragraph>Karimou</Paragraph>
                    <Paragraph>Cisse</Paragraph>
                </UserContent>
                <Button>
                    <VisibilityOutlinedIcon/>
                    Afficher
                </Button>
            </Item>
            <Item>
                <Circle>KC</Circle>
                <UserContent>
                    <Paragraph>Karimou</Paragraph>
                    <Paragraph>Cisse</Paragraph>
                </UserContent>
                <Button>
                    <VisibilityOutlinedIcon/>
                    Afficher
                </Button>
            </Item>
            <Item>
                <Circle>KC</Circle>
                <UserContent>
                    <Paragraph>Karimou</Paragraph>
                    <Paragraph>Cisse</Paragraph>
                </UserContent>
                <Button>
                    <VisibilityOutlinedIcon/>
                    Afficher
                </Button>
            </Item>
            <Item>
                <Circle>KC</Circle>
                <UserContent>
                    <Paragraph>Karimou</Paragraph>
                    <Paragraph>Cisse</Paragraph>
                </UserContent>
                <Button>
                    <VisibilityOutlinedIcon/>
                    Afficher
                </Button>
            </Item>
        </List>
    </Container>
  )
}

export default SmallBlock