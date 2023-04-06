import React, {ChangeEvent, EventHandler} from "react";
import styled from "styled-components";

type ImportNumberPropsType = {
    number: number
    onChangeInputNumber: (value: number) => void
    isActive: boolean
}


const ImportNumber: React.FC<ImportNumberPropsType> = ({number, onChangeInputNumber, isActive}) => {

    const Input = styled.input`
      border: 3px solid rgb(111, 228, 251);
      border-radius: 6px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 10px;
      width: 100%;
      text-align: center;
      background-color: ${isActive ? 'white' : '#f559a1'};
    `;


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInputNumber(Number(e.currentTarget.value));
    }

    return (
        <Input type="number" onChange={(e) => onChangeHandler(e)} value={number}/>
    )
}

export default ImportNumber