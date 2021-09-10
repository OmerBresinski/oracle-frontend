import React, { useState } from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Card from "components/Card";
import * as C from "constant";
import * as S from "./style";
import Button from "components/Button";

const NewOrder = () => {
  const { data } = useFetch(C.ENDPOINTS.items);
  const [order, setOrder] = useState({}); //{[itemId]: amount}
  const canCreateOrder = Object.keys(order)?.length;

  const handleAddClick = (id, amount) => {
    setOrder((prevOrder) => {
      return { ...prevOrder, [id]: (prevOrder[id] || 0) + amount };
    });
  };

  const handleCreateOrderClick = () => {
    //post(order)
    setOrder({});
  };

  return (
    <S.NewOrder>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            New Order
          </Text>
        </S.Header>
        <Button
          label="Create Order"
          disabled={!canCreateOrder}
          variant={"outlined"}
          onClick={handleCreateOrderClick}
        />
        <S.ItemsWrapper>
          <S.Items>
            {data &&
              data.rows.map((row) => {
                return (
                  <Card
                    key={row[0]}
                    id={row[0]}
                    header={row[1]}
                    body={row[2]}
                    onAddClick={handleAddClick}
                  />
                );
              })}
          </S.Items>
        </S.ItemsWrapper>
      </S.Content>
    </S.NewOrder>
  );
};

export default NewOrder;
