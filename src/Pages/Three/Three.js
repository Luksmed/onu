import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import saude from "../../Images/SDG-3.png"
import * as S from "./Style"

export default function Three(){

    return(
        <S.Container>
            <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="3" titulo="Saúde e Bem-Estar" objetivo="Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades" imagem={saude}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 3. Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades</S.SubTitle>
            <S.Line1><b>3.1</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>3.2</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>3.3</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>3.4</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>3.5</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
        </S.Box2>            
        </S.Container>
    )
}