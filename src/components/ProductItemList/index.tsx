import * as S from "./style";

interface ProductItemListProps {
  children: React.ReactNode;
}

const ProductItemList = ({ children }: ProductItemListProps) => {
  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Escolha seus Jogos
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect>
          <option value="default">Selecione um Jogo</option>
          <option value="">Jogo</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>{children}</S.ProductItemList>
    </section>
  );
};

export default ProductItemList;
