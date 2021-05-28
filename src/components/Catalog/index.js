import { Container, Title, Paragraph } from './style'
import { ListOfProduct } from '../ListOfProduct'

export function Catalog() {
   return (
      <Container id="catalog">
         <Title>Catálogo</Title>
         <Paragraph>Nuestros productos de mejor calidad</Paragraph>
         <ListOfProduct />
      </Container>
   )
}
