import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const ReceiptItems = () => {
  const { data } = useFetch(C.ENDPOINTS.receiptitems);

  return (
    <S.ReceiptItems>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Receipt Items
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.ReceiptItems>
  );
};

export default ReceiptItems;
