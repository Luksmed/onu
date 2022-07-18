import React from "react"
import * as S from "./Style"

const Inner = ({numero, titulo, objetivo, imagem}) => {

    return (      
      <S.Container>
        <S.Box1>
            <S.Line1>Objetivo de Desenvolvimento Sustentável</S.Line1>
            <S.Line2>{numero}</S.Line2>
            <S.Title>{titulo}</S.Title>
            <S.Line3>{objetivo}</S.Line3>            
        </S.Box1>
        <S.Box2>
          <S.Img src={imagem} />
        </S.Box2>
      </S.Container>        
    )
}

export default Inner