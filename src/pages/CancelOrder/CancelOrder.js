import React, { useState } from "react";
import axios from "axios";
import Text from "components/Text";
import Button from "components/Button";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";

const CancelOrder = () => {
  const [orderID, setOrderID] = useState("");

  const handleOrderIDChange = ({ value }) => {
    setOrderID(value);
  };

  const handleCancelOrderClick = async () => {
    try {
      await axios.post("http://localhost:4000/orders/cancel", { orderID });
    } catch (ex) {
      console.log(ex);
    } finally {
      setOrderID("");
    }
  };

  return (
    <S.CancelOrder>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Cancel Order
          </Text>
        </S.Header>
        <S.NewOrderInputs>
          <TextInput
            value={orderID}
            label="Order ID"
            type={"number"}
            onChange={handleOrderIDChange}
            size={C.SIZE.small}
          />
          <Button
            label="Cancel Order"
            disabled={!orderID}
            variant={"outlined"}
            onClick={handleCancelOrderClick}
          />
        </S.NewOrderInputs>
      </S.Content>
    </S.CancelOrder>
  );
};

export default CancelOrder;
