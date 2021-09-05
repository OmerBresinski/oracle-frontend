import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const Inventory = () => {
  const { data } = useFetch(C.ENDPOINTS.inventory);

  return (
    <S.Inventory>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Inventory
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.Inventory>
  );
};

export default Inventory;
