import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const Orders = () => {
  const { data } = useFetch(C.ENDPOINTS.orders);

  return (
    <S.Orders>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Orders
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.Orders>
  );
};

export default Orders;
