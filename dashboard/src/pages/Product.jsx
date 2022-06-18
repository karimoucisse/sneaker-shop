import { useEffect, useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"

const Page = styled.div`
    display: flex;
`
const Container = styled.div`
    flex: 4;
    padding: 20px;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1`

`
const AddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    border: none;
    &:hover {
        transform: scale(1.001);
    }
`
const UserContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`
const UserDisplay = styled.div`
    flex: 1;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Circle = styled.span`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    box-shadow: 4px 4px 4px rgba(162, 159, 159, 0.7);
`
const DisplayTitle = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
`
const Paragraph = styled.span`

`
const Bottom = styled.div`
    margin-top: 20px;
`
const UseTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #9e9999;
`
const UserInfo = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
    color: #444;
    gap: 10px; 
`
const Name = styled.span`
    font-weight: 600;
`
const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const UserUpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`
const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Left = styled.div`
    
`
const UpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px;
`
const Label = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`
const Input = styled.input`
    width: 250px;
    border: none;
    border-bottom: 1px solid grey;
    outline: none;
`
const Right= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Square = styled.span`
    width: 160px;
    height: 160px;
    padding: 5px;
    font-size: 22px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 4px 4px 4px rgba(162, 159, 159, 0.7);
`
const Button = styled.button`
    background-color: darkblue;
    color: white;
    padding: 7px 35px;
    cursor: pointer;
    border: none;
    font-size: 14px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.001);
    }
`

const Product = () => {
    const [product, setProduct] = useState()
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await fetch(`http://localhost:5000/products/628d14930f5b506ff929e4a0`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        setProduct(data)
    }

    if(!product) {
        return null
    }

  return (
    <>
        <Navbar/>
        <Page>
            <SideBar/>
            <Container>
                <TitleContainer>
                    <Title>Modifier un produit</Title>
                    <AddButton>Créer</AddButton>
                </TitleContainer>
                <UserContainer>
                    <UserDisplay>
                        <Top>
                            <Circle><Img src= {product.types[0].image} /></Circle>
                            <DisplayTitle>
                                <Paragraph> {product.name} </Paragraph>
                            </DisplayTitle>
                        </Top>
                        <Bottom>
                            <UseTitle>Details du compte</UseTitle>
                            <UserInfo>
                                <Name>Marque: </Name>
                                <Paragraph> {product.brand} </Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <Name>Couleur: </Name>
                                <Paragraph>white</Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <Name>Description: </Name>
                                <Paragraph> {product.description} </Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <Name>Categories: </Name>
                                <Paragraph>Man, Nike</Paragraph>
                            </UserInfo>
                        </Bottom>
                    </UserDisplay>
                    <UserUpdate>
                        <UserUpdateTitle>Modifier</UserUpdateTitle>
                        <UpdateForm>
                            <Left>

                                <UpdateItem>
                                    <Label>Nom</Label>
                                    <Input placeholder="Air force 1"/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Image</Label>
                                    <Input placeholder= {product.types[0].image}/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Marque</Label>
                                    <Input placeholder="Nike"/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Couleur</Label>
                                    <Input placeholder="white"/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>description</Label>
                                    <Input placeholder={product.description}/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Categories</Label>
                                    <Input placeholder="Man, Nike"/>
                                </UpdateItem>
                            </Left>
                            <Right>
                                <Square>
                                    <Img src= {product.types[0].image} />
                                </Square>
                                <Button>Modifier</Button>
                            </Right>
                        </UpdateForm>

                    </UserUpdate>
                </UserContainer>
            </Container>
        </Page>
    </>
  )
}

export default Product