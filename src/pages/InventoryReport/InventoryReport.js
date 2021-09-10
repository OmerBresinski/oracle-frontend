import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const InventoryReport = () => {
  const { data } = useFetch(C.ENDPOINTS.inventoryreport);

  return (
    <S.InventoryReport>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Inventory Report
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.InventoryReport>
  );
};

export default InventoryReport;
