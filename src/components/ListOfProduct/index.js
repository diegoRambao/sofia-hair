import { useEffect, useState } from 'react'
import { Container } from './style'
import { Item } from '../Item'
import { getAll } from '../../services/product.service'

export function ListOfProduct() {
   const [products, setProducts] = useState([])
   useEffect(() => {
      getAll().then((res) => {
         setProducts(res)
      })
   }, [])

   return (
      <Container>
         {products.map((product) => (
            <Item product={product} key={product.id} />
         ))}
      </Container>
   )
}
