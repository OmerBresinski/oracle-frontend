import React, { useState } from "react";
import axios from "axios";
import Text from "components/Text";
import Button from "components/Button";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";

const NewReceipt = () => {
  const [orderID, setOrderID] = useState("");

  const handleOrderIDChange = ({ value }) => {
    setOrderID(value);
  };

  const handleNewReceiptClick = async () => {
    try {
      await axios.post("http://localhost:4000/receipts", { orderID });
    } catch (ex) {
      console.log(ex);
    } finally {
      setOrderID("");
    }
  };

  return (
    <S.NewReceipt>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            New Receipt
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
            label="New Receipt"
            disabled={!orderID}
            variant={"outlined"}
            onClick={handleNewReceiptClick}
          />
        </S.NewOrderInputs>
      </S.Content>
    </S.NewReceipt>
  );
};

export default NewReceipt;
