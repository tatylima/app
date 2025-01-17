import ButtonLarge from "components/ButtonLarge";
import ButtonToggle from "components/ButtonToggle";
import OrderItem from "components/OrderItem";
import OrderItemList from "components/OrderItemList";
import { HTMLAttributes, useEffect, useState } from "react";
import { OrderItemType } from "types/OrderItemType";
import { OrderType } from "types/orderType";
import * as S from "./style";

type OrderDetailsType = HTMLAttributes<HTMLDivElement>;

type OrderDetailsProps = {
  orders: OrderItemType[];
  selectedGame?: number | string;
  onProceedToPayment: () => void;
  onOrdersChange: (orders: OrderItemType[]) => void;
  onChangeActiveOrderType: (data: OrderType) => void;
  onRemoveItem: (id: string) => void;
  activeOrderType: OrderType;
} & OrderDetailsType;

const OrderDetails = ({
  orders,
  onProceedToPayment,
  onOrdersChange,
  onChangeActiveOrderType,
  onRemoveItem,
  activeOrderType,
  selectedGame,
}: OrderDetailsProps) => {
  const price = orders
    .map((i) => i.product.price * i.quantity)
    .reduce((a, b) => a + b, 0);

  const [priceState, setPriceState] = useState(price);

  const disabledButton =
    !Boolean(orders.length) ||
    !Boolean(selectedGame) ||
    selectedGame === "default";

  const handleChange = (data: OrderItemType) => {
    const list = orders.map((item) =>
      item.product.id === data.product.id ? data : item
    );

    onOrdersChange(list);
  };

  useEffect(() => {
    setPriceState(price);
  }, [orders, price]);

  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.COMPRAR)}
          active={activeOrderType === OrderType.COMPRAR}
          value="Comprar"
        />
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.FAVORITOS)}
          active={activeOrderType === OrderType.FAVORITOS}
          value="Favoritos"
        />
      </S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <OrderItemList
          header={
            <S.OrderDetailsListTitle>
              <h4>Item</h4>
              <h4>Qtd</h4>
              <h4>Preço</h4>
            </S.OrderDetailsListTitle>
          }
          list={
            Boolean(orders.length) ? (
              orders.map((item, index) => (
                <OrderItem
                  onItemChange={handleChange}
                  onRemoveItem={() => onRemoveItem(item.product.id)}
                  product={item.product}
                  quantity={item.quantity}
                  observation={item.observation}
                  key={`OrderDetails-${index}`}
                />
              ))
            ) : (
              <S.OrderDetailsListGap />
            )
          }
          footer={
            <S.OrderDetailsListFooter>
              <S.OrderDetailsListFooterRow>
                <span>Subtotal</span>
                <span>R$ {priceState.toFixed(2)}</span>
              </S.OrderDetailsListFooterRow>
              {(!Boolean(selectedGame) || selectedGame === "default") && (
                <S.OrderDetailsListFooterWarning>
                Escolha o jogo 
              </S.OrderDetailsListFooterWarning>
            )}
              <ButtonLarge
                onClick={onProceedToPayment}
                disabled={disabledButton}
                value="Continue para o pagamento"
              />
            </S.OrderDetailsListFooter>
          }
        />
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
};

export default OrderDetails;