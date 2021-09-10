import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const TransactionsReport = () => {
  const { data } = useFetch(C.ENDPOINTS.transactionsreport);

  return (
    <S.TransactionsReport>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Transactions Report
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.TransactionsReport>
  );
};

export default TransactionsReport;
