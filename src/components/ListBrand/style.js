import styled from 'styled-components'

export const List = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 50px;
`
export const Image = styled.img`
   max-width: 100px;
   @media (max-width: 650px) {
      max-width: 50px;
   }
`
