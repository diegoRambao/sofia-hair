import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
   place-items: stretch;
   column-gap: 3rem;
   row-gap: 2rem;
   margin-top: 70px;

   @media (max-width: 650px) {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      margin-top: 50px;
   }
`
