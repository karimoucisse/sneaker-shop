import styled from "styled-components"
import { UserContext } from "../context/User"
import { useContext } from "react"
import moment from "moment";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

const Page = styled.div`
    display: flex;
`
const Container = styled.div`
    flex: 4;
`
const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`
const Tr = styled.tr`

`
const Th = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`
const Td = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 5px;
`
const Button = styled.button`
    background-color: darkblue;
    width: 100%;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-weight: 700;
`
const Users = () => {
    const {users} = useContext(UserContext)

    if(!users) {
        return null
    }
  return (
    <>
    
        <Navbar/>
        <Page>
            <SideBar/>
            <Container>
                <Table>
                    <Tr>
                        <Th>Prénom & Nom</Th>
                        <Th>Email</Th>
                        <Th>Numero de téléphone</Th>
                        <Th>Adresse</Th>
                        <Th>Date d'inscription</Th>
                        <Th>Bouton</Th>

                    </Tr>
                    {users.map(user => (
                        <Tr>
                            <Td>{user.firstName} {user.lastName}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.phoneNumber}</Td>
                            <Td>{user.adress}</Td>
                            <Td>{moment(user.createdAt).format('L')}</Td>
                            <Td><Button>Afficher</Button></Td>
                        </Tr>
                    ))}
                </Table>
            </Container>
        </Page>
    </>
  )
}

export default Users