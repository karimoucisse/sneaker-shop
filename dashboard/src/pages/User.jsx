import styled from "styled-components"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useEffect, useState } from "react";
import moment from "moment";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

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
const Circle = styled.span`
    width: 40px;
    height: 40px;
    padding: 5px;
    font-weight: 600;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
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
    align-items: center;
    margin: 20px 0;
    color: #444;
    gap: 10px; 
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
    width: 95px;
    height: 95px;
    padding: 5px;
    font-size: 22px;
    font-weight: 600;
    border-radius: 10px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c7e2ec;
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
const User = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        getUser()
    }, [])
    const getUser = async () => {
        const response = await fetch(`http://localhost:5000/user/628aa55a4757957d40abf138`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        if(!data.error) {
            setUser(data)
        }
    }

    if(!user) {
        return null
    }
  return (
    <>
    <Navbar/>

        <Page>
            <SideBar/>
            <Container>
                <TitleContainer>
                    <Title>Modifier un utlisateur</Title>
                    <AddButton>Créer</AddButton>
                </TitleContainer>
                <UserContainer>
                    <UserDisplay>
                        <Top>
                            <Circle>{user.firstName[0].toUpperCase()}{user.lastName[0].toUpperCase()}</Circle>
                            <DisplayTitle>
                                <Paragraph>{user.firstName} </Paragraph>
                                <Paragraph> {user.lastName} </Paragraph>
                            </DisplayTitle>
                        </Top>
                        <Bottom>
                            <UseTitle>Details du compte</UseTitle>
                            <UserInfo>
                                <AccountCircleOutlinedIcon/>
                                <Paragraph>{user.firstName}</Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <AccountCircleOutlinedIcon/>
                                <Paragraph>{user.lastName}</Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <EmailOutlinedIcon/>
                                <Paragraph>{user.email}</Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <LocalPhoneOutlinedIcon/>
                                <Paragraph>{user.phoneNumber}</Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <CalendarMonthOutlinedIcon/>
                                <Paragraph>{moment(user.birthDate).format('L')}</Paragraph>
                            </UserInfo>
                            <UserInfo>
                                <LocationOnOutlinedIcon/>
                                <Paragraph>7{user.adress}</Paragraph>
                            </UserInfo>
                        </Bottom>
                    </UserDisplay>
                    <UserUpdate>
                        <UserUpdateTitle>Modifier</UserUpdateTitle>
                        <UpdateForm>
                            <Left>

                                <UpdateItem>
                                    <Label>Prénom</Label>
                                    <Input placeholder= {user.firstName}/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Nom</Label>
                                    <Input placeholder= {user.lastName}/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Mail</Label>
                                    <Input placeholder= {user.email}/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Telephone</Label>
                                    <Input placeholder= {user.phoneNumber}/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Date d'anniversaire</Label>
                                    <Input placeholder= {moment(user.birthDate).format('L')}/>
                                </UpdateItem>
                                <UpdateItem>
                                    <Label>Adress</Label>
                                    <Input placeholder= {user.adress}/>
                                </UpdateItem>
                            </Left>
                            <Right>
                                <Square>{user.firstName[0].toUpperCase()}{user.lastName[0].toUpperCase()}</Square>
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

export default User