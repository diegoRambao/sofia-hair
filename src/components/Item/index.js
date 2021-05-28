import { Container, Image, Price, Title, Button, Description } from './style'

export function Item({ product }) {
   const { imgUrl, name, price, description } = product
   return (
      <Container>
         <Image src={imgUrl} alt={name} />
         <Title>{name}</Title>
         <Price>$ {price}</Price>
         <Description> {description} </Description>
         <Button
            href={`https://api.whatsapp.com/send?phone=573246067896&text=Hola Sofia Hair, me intereza cotizar el producto:  ${name}`}
            target="_blank"
         >
            Cotizar
         </Button>
      </Container>
   )
}
