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
        <Text size="32px" bold>
          Omer Bresinski - 305237224
        </Text>
        <Text size="32px" bold>
          Guy Sulami - 313589632
        </Text>
      </S.Content>
    </S.Home>
  );
};

export default Home;
