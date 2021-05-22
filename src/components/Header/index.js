import { Container, ContainerText, Title, Paragraph, Button, Image } from './style'
import homeImg from '../../assets/images/home.svg'

export function Header() {
   return (
      <Container>
         <ContainerText>
            <Title>Sofia Hair</Title>
            <Paragraph>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever.
            </Paragraph>
            <Button>Ver catalogo</Button>
         </ContainerText>
         <Image src={homeImg} alt="Home" />
      </Container>
   )
}
