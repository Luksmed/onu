import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import cup from "../../Images/SDG-2.png"
import * as S from "./Style"

export default function Two(){

    return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="2" titulo="Fome zero e agricultura sustentável" objetivo="Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável" imagem={cup}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</S.SubTitle>
            <S.Line1><b>2.1</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>2.2</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>2.3</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>2.4</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
            <S.Line1><b>2.5</b> Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares, atualmente medida como pessoas vivendo com menos de US$ 1,90 por dia</S.Line1>
        </S.Box2>
        </S.Container>
    )
}