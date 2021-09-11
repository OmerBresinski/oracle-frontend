import React, { useState } from "react";
import { useFetch } from "hooks";
import axios from "axios";
import Text from "components/Text";
import Card from "components/Card";
import Button from "components/Button";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";

const NewOrder = () => {
  const { data } = useFetch(C.ENDPOINTS.items);
  const [order, setOrder] = useState({}); //{[itemId]: amount}
  const [customerID, setCustomerID] = useState("");
  const canCreateOrder = Object.keys(order)?.length;

  const handleAddClick = (id, amount) => {
    setOrder((prevOrder) => {
      return { ...prevOrder, [id]: (prevOrder[id] || 0) + amount };
    });
  };

  const handleCreateOrderClick = async () => {
    try {
      await axios.post("http://localhost:4000/orders", {
        customerID,
        itemIDs: Object.entries(order),
      });
    } catch (ex) {
      console.log(ex);
    } finally {
      setOrder({});
    }
  };

  const handleCustomerIDChange = ({ value }) => {
    setCustomerID(value);
  };

  return (
    <S.NewOrder>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            New Order
          </Text>
        </S.Header>
        <S.NewOrderInputs>
          <TextInput
            value={customerID}
            label="Customer ID"
            onChange={handleCustomerIDChange}
            size={C.SIZE.small}
          />
          <Button
            label="Create Order"
            disabled={!canCreateOrder || !customerID}
            variant={"outlined"}
            onClick={handleCreateOrderClick}
          />
        </S.NewOrderInputs>
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
