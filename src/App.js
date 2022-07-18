import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import Home from "./Components/Home/Home"
import One from "./Pages/One/One"
import Two from "./Pages/Two/Two"
import Three from "./Pages/Three/Three"
import Four from "./Pages/Four/Four"
import Five from "./Pages/Five/Five"
import Six from "./Pages/Six/Six";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
`

const Container = styled.section`
  width: 100%;
  background-color: #f1faee;
  height: 100vh;
`



export default function App(){

  return(
    <Router>
       <GlobalStyle/>
       <Container>     
               
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/One" element={<One/>} />
          <Route path="/Two" element={<Two/>} />  
          <Route path="/Three" element={<Three/>} />  
          <Route path="/Four" element={<Four/>} />                      
          <Route path="/Five" element={<Five/>} />  
          <Route path="/Six" element={<Six/>} />
      </Routes>
      
      </Container>
    </Router>
  )
}