import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const OpenOrdersReport = () => {
  const { data } = useFetch(C.ENDPOINTS.openordersreport);

  return (
    <S.OpenOrdersReport>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Open Orders Report
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.OpenOrdersReport>
  );
};

export default OpenOrdersReport;
