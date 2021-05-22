import styled from 'styled-components'

export const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
   place-items: stretch;
   column-gap: 3rem;
   row-gap: 2rem;
   margin-top: 70px;
`
