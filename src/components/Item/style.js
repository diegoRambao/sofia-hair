import styled from 'styled-components'

export const Container = styled.div`
   padding: 16px;
   border-radius: 10px;
   border: 1px solid #f1f1f1;
   box-shadow: 0px 8px 22px 4px rgba(0, 0, 0, 0.1);
`

export const Image = styled.img`
   width: 100%;
   height: 200px;
   min-height: 200px;
   object-fit: contain;
`

export const Title = styled.h2`
   font-size: 0.9em;
   font-weight: 500;
   color: #414141;
   margin: 0;
   text-align: left;
`

export const Price = styled.h3`
   font-size: 0.9em;
   font-weight: 600;
   color: #414141;
   margin: 0;
   margin-top: 10px;
   text-align: left;
`

export const Description = styled.p`
   overflow: hidden;
   font-size: 13px;
   color: #000;
   margin-top: 10px;
   text-align: left;
   font-weight: 300;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   white-space: normal;
   text-overflow: ellipsis;
   -webkit-line-clamp: 3;
`

export const Button = styled.a`
   display: inline-block;
   background: #0cc665;
   padding: 8px 0;
   border-radius: 5px;
   width: 100%;
   color: white;
   text-decoration: none;
   margin-top: 10px;
`
