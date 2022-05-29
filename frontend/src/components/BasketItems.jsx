import styled from "styled-components"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Container = styled.div`
    max-width: 500px;
    height: 180px;
    /* border: 2px solid; */
    display: flex;
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
    margin-bottom: 20px;
    border-radius: 5px;
`
const Left = styled.div`
    flex: 1;
    width: 200px;
    height: 100%;
`
const Image = styled.img`
    height: inherit;
`
const Right = styled.div`
    flex: 3;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5px 0 14px;
`
const DeleteContainer = styled(DeleteOutlineOutlinedIcon)`
    /* color: red; */
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        color: #2f2525;
    }
`
const Title = styled.h3`
    margin-bottom: 10px;
    font-weight: 500;
`
const Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 5px;
`
const Bottom = styled.div`

`
const Select = styled.select`
    padding: 5px 20px;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    border: 0.5px solid ;
`
const Option = styled.option`
    font-size: 18px;
`
const BasketItems = () => {
  return (
    <Container>
        <Left>
            <Image src= "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6b75de7-5bdd-424c-8c9a-8718ac131dee/chaussure-air-jordan-1-mid-QJTvQh.png"/>
        </Left>
        <Right>
            <Top>
                <div>
                    <Title>jordan 1</Title>
                    <Paragraph>Prix: 149€</Paragraph>
                    <Paragraph>Couleur: black</Paragraph>
                    <Paragraph>Taille: 40cm</Paragraph>
                </div>
                <DeleteContainer/>
            </Top>
            <Bottom>
                <Select>
                    <Option>40</Option>
                    <Option>41</Option>
                    <Option>42</Option>
                    <Option>43</Option>
                    <Option>44</Option>
                    <Option>45</Option>
                    <Option>46</Option>
                </Select>
            </Bottom>
        </Right>
    </Container>
  )
}

export default BasketItems