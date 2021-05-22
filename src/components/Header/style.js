import styled from 'styled-components'

export const Container = styled.header`
   margin-top: 100px;
   display: flex;

   @media (max-width: 650px) {
      flex-direction: column;
      margin-top: 50px;
   }
`

export const ContainerText = styled.div`
   @media (max-width: 650px) {
      text-align: center;
   }
`
export const Title = styled.h1`
   font-weight: 900;
   font-size: 3.4rem;
   color: #414141;
   margin-bottom: 0;
`

export const Paragraph = styled.p`
   color: #414141;
`

export const Button = styled.button`
   padding: 14px 30px;
   border: none;
   outline: none;
   border-radius: 5px;
   font-size: 1em;
   font-weight: 500;
   background: #ffd5b1;
   margin-top: 10px;
   &:hover {
      cursor: pointer;
   }
`

export const Image = styled.img`
   width: 60%;

   @media (max-width: 650px) {
      width: 90%;
   }
`
