import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const Customers = () => {
  const { data } = useFetch(C.ENDPOINTS.customers);

  return (
    <S.Customers>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Customers
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.Customers>
  );
};

export default Customers;
