import * as S from "./style";

const ProductItemList = () => {
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
    </section>
  );
};

export default ProductItemList;
