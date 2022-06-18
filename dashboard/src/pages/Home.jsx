import styled from "styled-components"
import HomeContent from "../components/HomeContent"
import Navbar from "../components/Navbar"
import NewProduct from "./NewProduct"
import NewUser from "./NewUser"
import Product from "./Product"
import ProductList from "./ProductList"
import SideBar from "../components/SideBar"
import User from "./User"
import Users from "./Users"

const TopContainer = styled.div`
    display: flex;
`


const Home = () => {
  return (
    <div>
      <Navbar/>
      <TopContainer>
        <SideBar/>
        <HomeContent/>
      </TopContainer>
    </div>
  )
}

export default Home