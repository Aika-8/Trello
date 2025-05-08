import React from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";

export const CardList = ({ array }) => {
  return (
    <div>
      {array?.map((item, index) => (
        <StyledLi key={index}>
          <ContainerCard>
            <IconCircle />
            <span>{item.title}</span>
          </ContainerCard>
          <IconEdit />
        </StyledLi>
      ))}
    </div>
  );
};
const IconCircle = styled(Icons.Circle)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
const IconEdit = styled(Icons.Edit)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;
const StyledLi = styled.li`
  min-height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0px 1px 1px #091e4240;
  border-radius: 8px;
  padding: 0px 8px;
  cursor: pointer;
  &:hover ${IconCircle}, &:hover ${IconEdit} {
    opacity: 1;
  }
`;
const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    color: #172b4d;
  }
`;
