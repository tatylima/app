import Menu from "components/Menu";
import * as S from "./style"; //importando as configuraçoes, apelidando com "S",informando que esta no arquivo Syle.ts//
import { ReactComponent as Search } from "assets/icons/search.svg";

const Home = () => {
  return (
    <S.Home>
      <Menu />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Xbox Live</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                Aqui ficará a data
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo jogo" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Jogos</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <p>Lista de produtos aqui</p>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default Home;
