import styled from "styled-components";

export const Box1 = styled.div`
  width: 60%;   
  margin-left: 7%; 
  padding-top: 2vh;
  @media only screen and (max-width: 500px){
    width: 90%;    
  }
`
export const Title = styled.h1`
    font-size: 50px;
    @media only screen and (max-width: 500px){
    font-size: 40px;    
  }
`

export const SubTitle = styled.p`
    margin-top: 40px;
    margin-bottom: 50px;   
    font-size: 20px;
`

export const Box2 = styled.div`  
  width: 90% ;
  display: flex;
  flex-wrap: wrap;
  margin-left: 7%;
`