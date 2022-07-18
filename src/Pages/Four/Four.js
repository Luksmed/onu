import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import educ from "../../Images/SDG-4.png"
import * as S from "./Style"

export default function Four(){

    return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="4" titulo="Educação de qualidade" objetivo="Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos" imagem={educ}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</S.SubTitle>
            <S.Line1><b>4.1</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>4.2</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>4.3</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>4.4</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>4.5</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
        </S.Box2>          
        </S.Container>
    )
}