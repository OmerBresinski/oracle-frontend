import React from "react";
import Text from "components/Text";
import * as S from "./style";

const Home = () => {
  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Oracle
          </Text>
        </S.Header>
      </S.Content>
    </S.Home>
  );
};

export default Home;
