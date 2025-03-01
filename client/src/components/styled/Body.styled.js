import styled from 'styled-components';

export const MainBodyDisplay = styled.div`
 width: 100%;
 background: ${({theme}) => theme.colors.body};
 color:  ${({theme}) => theme.colors.color};

 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 88%;
  margin: 1rem auto;
  padding: 1rem .6rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
 }
`

export const LeftSection = styled.div`
 width: 100%;
 height: 70vh;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 border-radius: 3px;
 padding: .6rem .6rem;
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 45%;
 }

 .Title {
  width: 100%;
  padding: .8rem .1rem;
  border-bottom: 1px solid rgb(187, 187, 190);
  & > p{
   font-size: 1.5rem;
   color: grey;
  }
 }

 .Formcontainer{
  width: 100%;

  & > form {
   margin-top: 2rem;
   width: 100%;
   height: 40vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);

   & > input {
    width: 90%;
    height: 40px;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
   }
  }
 }

 .Copyright {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem .2rem;
 }
`

export const RightSection = styled.div`
 width: 100%;
 box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
 border-radius: 3px;
 padding: .6rem .6rem;
 overflow-y: scroll;
 &::-webkit-scrollbar{
  display: none;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 45%;
 }

 .Title {
  width: 100%;
  padding: .8rem .1rem;
  border-bottom: 1px solid rgb(187, 187, 190);
  & > p{
   font-size: 1.5rem;
   color: grey;
  }
 }

 .ImagePreview{
  width: 98%;
  height: 70%;
  background: grey;
  border-radius: 3px;
  display: grid;
  place-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
 }

 .Colorsegmentation{
  width: 100%;
  
  & > .Colordiv {
   position: relative;
   width: 100%;
   height: 80px;
   border-radius: 3px;
   background: grey;
   margin: 1rem auto;
  }

  .RGD{
   position: absolute;
   top: 0;
   left: 0;
   background: rgba(255, 255, 255, .8);
   padding: .6rem .8rem;
   border-radius: 0 3px 0 3px;
  }

  .PER{
   position: absolute;
   bottom: 0;
   right: 0;
   background: rgba(255, 255, 255, .8);
   padding: .6rem .8rem;
   border-radius: 3px 0 3px 0 ;
  }
 }
`