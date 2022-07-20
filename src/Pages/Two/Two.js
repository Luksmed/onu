import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import cup from "../../Images/SDG-2.png"
import * as S from "./Style"

export default function Two(){

    const Content = () => {
      return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="2" titulo="Fome zero e agricultura sustentável" objetivo="Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável" imagem={cup}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável</S.SubTitle>
            <S.Line1><b>2.1</b> Até 2024, organizar distribuições mensais de alimentos aos mais necessitados, especialmente aos moradores de rua e pessoas em situações de vulnerabilidade.</S.Line1>
            <S.Line1><b>2.2</b> Até 2024, mapear locais propícios ao cultivo de hortas comunitárias, e iniciar o plantio de maneira a garantir a nutrição de todos, mas especialmente dos mais necessitados.</S.Line1>
            <S.Line1><b>2.3</b> Aos indivíduos em situação de extrema pobreza, devidamente constatada, garantir o acesso à um crédito que possibilite uma alimentação minimamente digna, com a prefeitura municipal ressarcindo os mercados e estabelecimentos envolvidos.</S.Line1>
          </S.Box2>
        </S.Container>
      )
    }

    return(
      Content()
    )
}