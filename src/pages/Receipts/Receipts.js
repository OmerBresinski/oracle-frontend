import React from "react";
import { useFetch } from "hooks";
import Text from "components/Text";
import Table from "components/Table";
import * as C from "constant";
import * as S from "./style";

const Receipts = () => {
  const { data } = useFetch(C.ENDPOINTS.receipts);

  return (
    <S.Receipts>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Receipts
          </Text>
        </S.Header>
        {data && <Table cols={data.metaData} rows={data.rows} />}
      </S.Content>
    </S.Receipts>
  );
};

export default Receipts;
