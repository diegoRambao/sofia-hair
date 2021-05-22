import styled from 'styled-components'

export const Container = styled.div`
   margin-top: 60px;
`

export const Image = styled.img`
   min-height: 136px;
   height: 136px;
   min-width: 136px;
   width: 136px;
   object-fit: contain;
`

export const ContainerInfo = styled.div`
   min-height: 120px;
   height: 120px;
   overflow: hidden;
`

export const Price = styled.h3`
   font-size: 1em;
   color: #332927;
   margin: 0;
   margin-top: 10px;
`

export const Title = styled.h2`
   font-size: 14px;
   color: #332927;
   margin-top: 10px;
   overflow: hidden;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   white-space: normal;
   text-overflow: ellipsis;
   -webkit-line-clamp: 3;
`

export const Button = styled.a`
   background: #0cc665;
   padding: 6px 20px;
   border-radius: 5px;
   color: white;
   text-decoration: none;
`
