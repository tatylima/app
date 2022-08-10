import * as S from "./style";

interface ProductItemListProps {
  onSelectGame: (data: number) => void;
  children: React.ReactNode;
}

const ProductItemList = ({ children, onSelectGame }: ProductItemListProps) => {
  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Escolha seus Jogos
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect
          onChange={({ target }) => onSelectGame(Number(target.value))}
          name="game"
          id="game"
        >
          <option value="default">Selecione um jogo</option>
          <option value="01">Jogo 01</option>
          <option value="02">Jogo 02</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>{children}</S.ProductItemList>
    </section>
  );
};

export default ProductItemList;
