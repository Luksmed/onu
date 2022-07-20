import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import saude from "../../Images/SDG-3.png"
import * as S from "./Style"

export default function Three(){

    const Content = () => {
      return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="3" titulo="Saúde e Bem-Estar" objetivo="Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades" imagem={saude}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 3. Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades</S.SubTitle>
            <S.Line1><b>3.1</b> Até 2025, reformar e melhor equipar os postos de saúde já existentes no bairro, de modo que possam proporcionar um melhor atendimento aos moradores desta localidade. Alguns já apresentam problemas estruturais, como goteiras, por exemplo.</S.Line1>
            <S.Line1><b>3.2</b> Até 2024, ampliar o contingente dos profissionais da saúde no bairro já existente, para aumentar a quantidade de atendimentos de saúde, e também odontológicos.</S.Line1>
            <S.Line1><b>3.3</b> Até 2024, oferecer palestras em algumas unidades de saúde, ministrando temas como prevenção de doenças sexualmente transmissíveis, malefícios do consumo de álcool e uso de entorpecentes.</S.Line1>
          </S.Box2>            
        </S.Container>
      )
    }

    return(
      Content()
    )
}