import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import family from "../../Images/SDG-1.png"
import * as S from "./Style"

export default function One(){

    const Content = () => {
      return(
        <S.Container>            
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="1" titulo="Erradicação da pobreza" objetivo="Erradicar a pobreza em todas as formas e em todos os lugares" imagem={family}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 1. Acabar com a pobreza em todas as suas formas, em todos os lugares</S.SubTitle>
            <S.Line1><b>1.1</b> Até 2025, acabar com a situação de pobreza extrema em que os moradores de rua do bairro se encontram, de maneira que possuam recursos suficientes para, pelo menos, se alimentarem adequadamente durante o mês.</S.Line1>
            <S.Line1><b>1.2</b> Organizar uma equipe de voluntários para que se possa avaliar, de maneira mais precisa, a real situação das pessoas em estado de pobreza extrema que residem no bairro e, dessa forma, facilitar a esquematização de um plano de ação, que vise melhorar, de forma geral, a situação de tais indivíduos.</S.Line1>
            <S.Line1><b>1.3</b> Aumentar o investimento municipal no desenvolvimento das regiões mais empobrecidas do bairro.</S.Line1>           
          </S.Box2>                    
        </S.Container>
      )
    }

    return(
      Content()
    )
}
