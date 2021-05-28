import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   place-items: stretch;
   column-gap: 2rem;
   row-gap: 3rem;
   margin-top: 70px;

   @media (max-width: 650px) {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      row-gap: 1rem;
      margin-top: 50px;
   }
`
