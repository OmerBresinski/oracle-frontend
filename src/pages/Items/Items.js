import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const Items = () => {
  const { data } = useFetch(C.ENDPOINTS.items);

  return (
    <S.Items>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Items
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.Items>
  );
};

export default Items;
