import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import agua from "../../Images/SDG-6.png"
import * as S from "./Style"

export default function Six(){

    return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="6" titulo="Água potável e saneamento" objetivo="Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos" imagem={agua}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 6. Assegurar a disponibilidade e gestão sustentável da água e saneamento para todas e todos</S.SubTitle>
            <S.Line1><b>6.1</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>6.2</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>6.3</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>6.4</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>6.5</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
        </S.Box2>   
        </S.Container>
    )
}
