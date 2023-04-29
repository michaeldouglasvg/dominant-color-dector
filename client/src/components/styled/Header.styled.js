import styled from 'styled-components';

export const HeaderStyled = styled.header`
 width: 100%;
 height: 50px;
 padding: 1rem .3rem;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: green;
 /* background: rgb(11, 11, 54); */
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: 1rem 7rem;
 }

 .Logo{
  width: 80px;
  height: 40px;
  border-radius: 3px;
  overflow: hidden;
  display: grid;
  place-items: center;
  color:  ${({theme}) => theme.colors.color};

  & > img {
   width: 100%;
   height: 100%;
  }

  & > p{
   font-size: 1.5rem;
   color: ${({theme}) => theme.colors.color};
   font-weight: 600;
  }
 }

 .Title{
  display: grid;
  place-items: center;

  & > p {
   font-size: 1.5rem;
   color:  ${({theme}) => theme.colors.color};
   font-weight: 600;
   &:nth-child(1) {
     display: none;
    }
    &:nth-child(2) {
     display: block;
    }

   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    &:nth-child(1) {
     display: block;
    }
    &:nth-child(2) {
     display: none;
    }
   }
  }
 }

 .Theme{
  height: 40px;
  display: grid;
  place-items: center;
  color:  ${({theme}) => theme.colors.color};
  border-radius: 3px;
  cursor: pointer;

  & > p{
   font-size: 1.5rem;
   color:  ${({theme}) => theme.colors.color};
   font-weight: 600;
  }
 }
`