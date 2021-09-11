import styled from "styled-components";

export const CancelReceipt = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-block-start: 100px;
  gap: 20px;
`;

export const NewOrderInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 280px;
`;

export const ItemsWrapper = styled.div`
  height: 70vh;
  padding: 10px;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const Items = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`;

export const Header = styled.div`
  display: flex;
`;
