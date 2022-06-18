import styled from "styled-components"

const Container = styled.div`
  flex: 2;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 20px;
`
const Title = styled.span`
    font-size: 22px;
    font-weight: bold;
`
const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`
const Tr = styled.tr`

`
const Th = styled.th`
  text-align: left;
`
const TdUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 10px;
`
const TdDate = styled.td`
  font-weight: 300;
`
const TdAmount = styled.td`
  font-weight: 300;
`
const TdStatus = styled.td`

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
const Paragraph = styled.span`

`
const LargeBlock = () => {
  return (
    <Container>
      <Title>Achat recent</Title>
      <Table>
        <Tr>
          <Th>Client</Th>
          <Th>Date</Th>
          <Th>Quantité</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <TdUser>
            <Circle>kC</Circle>
            <Paragraph>Karimou cisse</Paragraph>
          </TdUser>
          <TdDate>15 juin 2022</TdDate>
          <TdAmount>148€</TdAmount>
          <TdStatus>En cours</TdStatus>
        </Tr>
        <Tr>
          <TdUser>
            <Circle>kC</Circle>
            <Paragraph>Karimou cisse</Paragraph>
          </TdUser>
          <TdDate>15 juin 2022</TdDate>
          <TdAmount>148€</TdAmount>
          <TdStatus>En cours</TdStatus>
        </Tr>
        <Tr>
          <TdUser>
            <Circle>kC</Circle>
            <Paragraph>Karimou cisse</Paragraph>
          </TdUser>
          <TdDate>15 juin 2022</TdDate>
          <TdAmount>148€</TdAmount>
          <TdStatus>En cours</TdStatus>
        </Tr>
        <Tr>
          <TdUser>
            <Circle>kC</Circle>
            <Paragraph>Karimou cisse</Paragraph>
          </TdUser>
          <TdDate>15 juin 2022</TdDate>
          <TdAmount>148€</TdAmount>
          <TdStatus>En cours</TdStatus>
        </Tr>
      </Table>
    </Container>
  )
}

export default LargeBlock