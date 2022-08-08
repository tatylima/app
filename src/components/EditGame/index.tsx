import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditGame = () => {
  return (
    <S.EditGame>
      <>
        <S.EditGameDetails>
          <S.EditGameDetailsName>Número de Jogos</S.EditGameDetailsName>
        </S.EditGameDetails>
        <S.EditGameAction>
          <Pencil /> Editar
        </S.EditGameAction>
      </>

      <>
        <label htmlFor="gameId">Número do Jogo</label>
        <S.EditForm id="gameId" type="number" placeholder="01" />
        <S.Deletar>Deletar Jogo</S.Deletar>
      </>
    </S.EditGame>
  );
};

export default EditGame;