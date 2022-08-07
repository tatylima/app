import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import * as S from "./style";
 
interface cardProps { 
  game:  {
    id: string;
    title: string;
    description: string;
    price: number;
    year: number;
    image: string;
    TrailerYouTubeUrl: string;
    GameplayYouTubeUrl: string;
    genreName: string;
    ImdbScore: number;
  }
}

const GameCard = ({game}: cardProps) => {
  let Navigate = useNavigate();
  function goToGameDetails() {
    Navigate("/game-details");
  }
  return (
    <S.GameBox>
      <img src={game.image} alt="game-image" onClick={goToGameDetails}/>
      <h1>{game.title}</h1>
    </S.GameBox>
  )
}

export default GameCard;