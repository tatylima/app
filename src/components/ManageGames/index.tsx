import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";
import EditGame from "components/EditGame";

type ManageGamesType = HTMLAttributes<HTMLDivElement>;

type ManageGamesProps = {} & ManageGamesType;

const ManageGames = ({ ...props }: ManageGamesProps) => {
  return (
    <S.ManageGames {...props}>
      <S.ManageGamesTitle>Gerenciar Games</S.ManageGamesTitle>
      <S.ManageGamesSub>
        <b>Jogos</b>
      </S.ManageGamesSub>
      <S.ManageGamesContent>
        <S.ManageGamesContentAdd>
          <Add />
          <span>Adicionar Jogo</span>
        </S.ManageGamesContentAdd>
        <S.ManageGamesContentAdd>
          <label htmlFor="gameId">Número do Jogo</label>
          <S.EditForm id="gameId" type="number" placeholder="01" />
        </S.ManageGamesContentAdd>
        <EditGame />
      </S.ManageGamesContent>
      <S.ManageGamesActions>
        <S.ManageGamesActionsCancel>Cancelar</S.ManageGamesActionsCancel>
        <S.ManageGamesActionsSave>Salvar Mudanças</S.ManageGamesActionsSave>
      </S.ManageGamesActions>
    </S.ManageGames>
  );
};

export default ManageGames;