import styled from "styled-components";

export const Container= styled.div`
    display: flex;
    width: 100%;
    height: 80vh;    
    @media only screen and (max-width: 500px){
       height: 60vh;
  }  
`

export const Box1 = styled.div` 
  width: 50%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  @media only screen and (max-width: 500px){
    width: 75%;      
  }  
`

export const Line1 = styled.p`
  font-size: 17px;
  margin-left: 15px;
`

export const Line2 = styled.p`
  font-size: 80px;
  margin-left: 15px;
`

export const Title = styled.h1`
  margin-left: 15px;
  font-size: 35px;
  margin-bottom: 5px;
  @media only screen and (max-width: 500px){
   font-size: 25px;
  }
`

export const Line3 = styled.p`
  margin-left: 15px;
  font-size: 19px;
`

export const Box2 = styled.div` 
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px){
    width: 25%;
    justify-content: flex-start;
  }
`

export const Img = styled.img`
  width: 80%;
  @media only screen and (max-width: 500px){
    width: 80%;
  }
`