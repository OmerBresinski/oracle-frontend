import React, { useState } from "react";
import axios from "axios";
import Text from "components/Text";
import Button from "components/Button";
import TextInput from "components/TextInput";
import * as C from "constant";
import * as S from "./style";

const CancelReceipt = () => {
  const [receiptID, setReceiptID] = useState("");

  const handleReceiptIDChange = ({ value }) => {
    setReceiptID(value);
  };

  const handleCancelReceiptClick = async () => {
    try {
      await axios.post("http://localhost:4000/receipts/cancel", { receiptID });
    } catch (ex) {
      console.log(ex);
    } finally {
      setReceiptID("");
    }
  };

  return (
    <S.CancelReceipt>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Cancel Receipt
          </Text>
        </S.Header>
        <S.NewOrderInputs>
          <TextInput
            value={receiptID}
            label="Receipt ID"
            type={"number"}
            onChange={handleReceiptIDChange}
            size={C.SIZE.small}
          />
          <Button
            label="Cancel Receipt"
            disabled={!receiptID}
            variant={"outlined"}
            onClick={handleCancelReceiptClick}
          />
        </S.NewOrderInputs>
      </S.Content>
    </S.CancelReceipt>
  );
};

export default CancelReceipt;
