import styled from "styled-components"
import LargeBlock from "./LargeBlock"
import SaleCardInformation from "./SaleCardInformation"
import SmallBlock from "./SmallBlock"

const Container = styled.div`
    flex: 4;
`  
const BottomContainer = styled.div`
  display: flex;
  margin: 40px 20px;
`
const HomeContent = () => {
  return (
    <Container>
      <SaleCardInformation/>
      <BottomContainer>
        <SmallBlock/>
        <LargeBlock/>
      </BottomContainer>
    </Container>
  )
}

export default HomeContent