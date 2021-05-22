import { Container, Image, Price, Title, Button, ContainerInfo } from './style'

export function Item({ product }) {
   const { imgUrl, name, price } = product
   return (
      <Container>
         <Image src={imgUrl} alt={name} />
         <ContainerInfo>
            <Price>$ {price}</Price>
            <Title>{name}</Title>
         </ContainerInfo>
         <Button
            href={`https://api.whatsapp.com/send?phone=3246067896&text=Hola Sofia Hair, me intereza cotizar el producto:  ${name}`}
            target="_blank"
         >
            Cotizar
         </Button>
      </Container>
   )
}
