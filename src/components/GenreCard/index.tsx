import React from 'react'
import * as S from "./style";


interface cardProps { 
  genre:  { 
  id: string;
  genre: string;
  }
}

const GenreCard = ({genre}: cardProps) => {
  return (
    <S.GenreBox>
       <h1>{genre.genre}</h1>
    </S.GenreBox>
  )
}

export default GenreCard;