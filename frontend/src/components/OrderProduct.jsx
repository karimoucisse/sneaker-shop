import styled from "styled-components"

const Image = styled.img`
    height: 60px;
    margin-left: 10px;
    object-fit: cover;
`

const OrderProduct = ({product}) => {
  return (
    <Image src = {product.product[0].type.image}/>
  )
}

export default OrderProduct