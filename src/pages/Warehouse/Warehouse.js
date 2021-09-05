import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const Warehouse = () => {
  const { data } = useFetch(C.ENDPOINTS.warehouse);

  return (
    <S.Warehouse>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Warehouse
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.Warehouse>
  );
};

export default Warehouse;
