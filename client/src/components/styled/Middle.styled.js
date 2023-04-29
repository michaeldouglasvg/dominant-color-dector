import styled from 'styled-components';

export const MiddleStyled = styled.section`
 width: 100%;
 height: 40px;
 padding: 1rem .4rem;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 display: flex;
 align-items: center;
 justify-content: space-between;
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: 1rem 7rem;
 }

 & > div {
  &:nth-child(2) {
   justify-content: flex-end;
  }
 }
`