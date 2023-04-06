import React, {useState} from "react";
import Table from "./Table/Table";
import BtnBlue from "../BtnBlue/BtnBlue";
import styled from "styled-components";

type CounterPropsType = {
    baseStartValue: number
    baseMaxValue: number
}

const Wrapper = styled.div`
  background: #2c2b33;
  color: #fff;
  width: 100%;
  max-width: 480px;
  padding: 40px;
  border-radius: 6px;
  margin: 40px auto;
  border: 3px #70e4fb solid;
`;

const Buttons = styled.div`
  border: 3px #6fe4fb solid;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Counter: React.FC<CounterPropsType> = ({baseStartValue, baseMaxValue}) => {

    const [count, setCount] = useState<number>(baseStartValue);

    const incCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(baseStartValue)
    }

    const isActiveIncButton = baseMaxValue !== count ? true : false;
    const isActiveResetButton = baseStartValue < count ? true : false;

    return (
        <Wrapper>
            <div>
                <Table count={count} isActive={!isActiveIncButton}/>
                <Buttons>
                    <BtnBlue title={'inc'} onClick={incCount} isActive={isActiveIncButton}/>
                    <BtnBlue title={'Reset'} onClick={resetCount} isActive={isActiveResetButton}/>
                </Buttons>
            </div>
        </Wrapper>
    );
}

export default Counter;