import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import igual from "../../Images/SDG-5.png"
import * as S from "./Style"

export default function Five(){

    return(
        <S.Container>
           <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="5" titulo="Igualdade de gênero" objetivo="Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas" imagem={igual}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 5. Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas</S.SubTitle>
            <S.Line1><b>5.1</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>5.2</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>5.3</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>5.4</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>5.5</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
        </S.Box2>            
        </S.Container>
    )
}