import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import igual from "../../Images/SDG-5.png"
import * as S from "./Style"

export default function Five(){

    const Content = () => {
      return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="5" titulo="Igualdade de gênero" objetivo="Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas" imagem={igual}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 5. Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas</S.SubTitle>
            <S.Line1><b>5.1</b> Ministrar aulas nos colégios sobre as temáticas de discriminação hoje existentes em nossas sociedades, e abordando temas como a violência doméstica, por exemplo, que afeta majoritariamente as mulheres; dessa forma, estabelecendo desde cedo na consciência dos jovens uma mentalida de igualdade de direitos e deveres entre homens e mulheres.</S.Line1>
            <S.Line1><b>5.2</b> Apelo às empresas/comércios locais para que instituam uma política de paridade salarial, de modo que não haja discrepâncias nos salários entre homens e mulheres.</S.Line1>            
          </S.Box2>            
        </S.Container>
      )
    }

    return(
      Content()
    )
}