import React from "react";
import styled from "styled-components";
import { ColumnItem } from "./ColumnItem";

export const ColumnList = ({ array }) => {
  return (
    <WrapperCards>
      {array?.map((item, index) => (
        <ColumnItem key={index} title={item.title} columnId={item.id} />
      ))}
    </WrapperCards>
  );
};
const WrapperCards = styled.ol`
  display: flex;
  gap: 20px;
  list-style: none;
`;
