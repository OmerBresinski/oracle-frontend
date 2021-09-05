import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const Transactions = () => {
  const { data } = useFetch(C.ENDPOINTS.transactions);

  return (
    <S.Transactions>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Transactions
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.Transactions>
  );
};

export default Transactions;
