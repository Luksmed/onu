import styled from "styled-components";

export const Container= styled.div`
    width: 100%;
    padding-top: 2vh;
    background-color: #f1faee;
`

export const Home = styled.p`
    margin-left: 7%;
    margin-bottom: 20px;
    font-size: 1.8vw;
    @media only screen and (max-width: 500px){
      font-size: 3.5vw;
    }
`

export const Box1 = styled.div`
    display: flex;
    width: 75%;
    height: 80vh;
    margin-left: 7%;
    background-color: rgb(221, 166, 58);
    margin-bottom: 20px;
    @media only screen and (max-width: 500px){
    width: 96%;  
    margin-left: 2% ;
    height: 60vh;
  }
`

export const Box2 = styled.div`    
    width: 60%;
    margin-left: 7%;
    padding-bottom: 40px;
    @media only screen and (max-width: 500px){
    width: 90%;  
    margin-left: 3% ;
  }
`

export const SubTitle = styled.h2`
    @media only screen and (max-width: 500px){     
    font-size: 20px ;
  }
`

export const Line1 = styled.p`
    margin-top: 15px;
    font-size: 20px;
    @media only screen and (max-width: 500px){     
    margin-top: 20px ;
  }
`