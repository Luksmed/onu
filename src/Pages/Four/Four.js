import React from "react"
import { Link } from "react-router-dom"
import Inner from "../../Components/Inner/Inner"
import educ from "../../Images/SDG-4.png"
import * as S from "./Style"

export default function Four(){

    const Content = () => {
      return(
        <S.Container>
          <S.Home><Link to ='/'>Início</Link></S.Home> 
          <S.Box1>
            <Inner numero="4" titulo="Educação de qualidade" objetivo="Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos" imagem={educ}/>
          </S.Box1>
          <S.Box2>
            <S.SubTitle>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</S.SubTitle>
            <S.Line1><b>4.1</b> Até 2023, reforçar o policiamento noturno próximo ao C.E. Padre Manoel da Nóbrega, de maneira que as aulas no turno da noite possam retornar com segurança para os estudantes que só podem ir ao colégio neste período noturno.</S.Line1>
            <S.Line1><b>4.2</b> Até 2024, retornar os cursos técnicos de administração e enfermagem que ocorriam nos colégios Estaduais do bairro, nos anos pré-covid. </S.Line1>
            <S.Line1><b>4.3</b> Até 2024, melhorar a adaptalibilidade das escolas visando, principalmente, as crianças e adolescentes portadoras de alguma necessidade especial, proporcionando assim um ambiente inclusivo para estes.</S.Line1>
            <S.Line1><b>4.4</b> Até 2023, colocar um semáforo de trânsito em frente ao C.E. Padre Manoel da Nóbrega, pois se trata de uma área escolar, e somente as faixas na rua não proporcionam o nível de segurança recomendado para tal localidade.</S.Line1>
          </S.Box2>          
        </S.Container>
      )
    }

    return(
       Content()
    )
}