import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const InventoryInsufficiency = () => {
  const { data } = useFetch(C.ENDPOINTS.inventoryinsufficiency);

  return (
    <S.InventoryInsufficiency>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Inventory Insufficiency
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.InventoryInsufficiency>
  );
};

export default InventoryInsufficiency;
