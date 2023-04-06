import React from "react";
import styled from "styled-components";

type IncButtonPropsType = {
    title: string
    isActive: boolean
    onClick: () => void
}

const Button = styled.button`
  background: #6fe4fb;
  color: #2d2b31;
  border: 0;
  border-radius: 6px;
  font-size: 40px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
  width: 160px;
  &[disabled] {
    background-color: #477586;
    cursor: context-menu;
  }
`;

const BtnBlue: React.FC<IncButtonPropsType> = ({onClick, isActive,title}) => {
    return <Button className={Button} onClick={onClick} disabled={!isActive}>{title}</Button>;
}

export default BtnBlue;