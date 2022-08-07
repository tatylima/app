import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";

const OrderDetails = () => {
  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle active={true} value="Entrega" />
      </S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <p>Itens do pedido</p>
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
};

export default OrderDetails;
