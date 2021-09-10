import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const SalesReport = () => {
  const { data } = useFetch(C.ENDPOINTS.salesreport);

  return (
    <S.SalesReport>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Sales Report
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.SalesReport>
  );
};

export default SalesReport;
