import React from "react"
import Box from "../../Components/Box/Box"
import { Link } from "react-router-dom"
import xic from "../../Images/xic.svg"
import errad from "../../Images/errad.svg"
import saude from "../../Images/saude.svg"
import educ from "../../Images/educ.svg"
import igual from "../../Images/igual.svg"
import agua from "../../Images/agua.svg"
import * as S from "./Style"

export default function Home(){

    return(
        <>
        <S.Box1>
          <S.Title>Os Objetivos do Desenvolvimento Sustentável na Brasilândia</S.Title>      
          <S.SubTitle>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</S.SubTitle>
        </S.Box1>
        <S.Box2>         
          <Link to ='/One'><Box imagem={errad}/></Link>
          <Link to ='/Two'><Box imagem={xic}/></Link>
          <Link to ='/Three'><Box imagem={saude}/></Link>
          <Link to ='/Four'><Box imagem={educ}/></Link>
          <Link to ='/Five'><Box imagem={igual}/></Link>
          <Link to ='/Six'><Box imagem={agua}/></Link>
        </S.Box2>
        </>
    )
}