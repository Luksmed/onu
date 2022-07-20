import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import agua from "../../Images/SDG-6.png"
import * as S from "./Style"

export default function Six(){

    const Content = () => {
      return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="6" titulo="Água potável e saneamento" objetivo="Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos" imagem={agua}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 6. Assegurar a disponibilidade e gestão sustentável da água e saneamento para todas e todos</S.SubTitle>
            <S.Line1><b>6.1</b> Até 2023, aumentar o efetivo responsável pela limpeza do Rio Imboaçu, de maneira a aumentar a captação de recursos hídricos em prol da população local.</S.Line1>
            <S.Line1><b>6.2</b> Conscientizar a população local sobre a importância de não contaminar os ecossistemas relacionados com a água, através de palestras em unidades de saúde/escolas, pois através do lixo nas águas, há o risco de disseminação de doenças, que podem ser até fatais, em alguns casos.</S.Line1>
            <S.Line1><b>6.3</b> Nas escolas, ministrar periodicamente palestras sobre gestão de consumo da água, para implementar nos jovens, desde cedo, a mentalidade sobre o não-desperdício de água, destacando os graves problemas que poderemos ter no futuro, se não economizarmos atualmente.</S.Line1>
          </S.Box2>   
        </S.Container>
      )
    }

    return(
      Content()
    )
}
