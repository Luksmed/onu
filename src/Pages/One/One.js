import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Inner from "../../Components/Inner/Inner"
import family from "../../Images/SDG-1.png"
import * as S from "./Style"

export default function One(){

    return(
        <S.Container>            
            <S.Home><Link to ='/'>Início</Link></S.Home> 
            <S.Box1>
              <Inner numero="1" titulo="Erradicação da pobreza" objetivo="Erradicar a pobreza em todas as formas e em todos os lugares" imagem={family}/>
            </S.Box1>
            <S.Box2>
              <S.SubTitle>Objetivo 1. Acabar com a pobreza em todas as suas formas, em todos os lugares</S.SubTitle>
              <S.Line1><b>1.1</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
              <S.Line1><b>1.2</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
              <S.Line1><b>1.3</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
              <S.Line1><b>1.4</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
              <S.Line1><b>1.5</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            </S.Box2>          

            
        </S.Container>
    )
}
