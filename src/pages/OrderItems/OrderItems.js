import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const OrderItems = () => {
  const { data } = useFetch(C.ENDPOINTS.orderitems);

  return (
    <S.OrderItems>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Order Items
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.OrderItems>
  );
};

export default OrderItems;
