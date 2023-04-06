import React, {useState} from "react";
import styled from "styled-components";
import BtnBlue from "../BtnBlue/BtnBlue";
import InputNumber from "../InputNumber/InputNumber";

type CounterPropsType = {
    startValue: number
    maxValue: number
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    setSetting: () => void
    isActiveMaxValue: boolean
    isActiveStartValue: boolean
    isActiveIncButton: boolean
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
  justify-content: center;
  padding: 20px;
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;

  div {
    margin: 0 10px;
    width: calc(100% - 20px);
  }
`;

const TableRowTitle = styled.div`
  color: #6fe4fb;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

const CounterSetting: React.FC<CounterPropsType> = ({
                                                        startValue,
                                                        maxValue,
                                                        onChangeMaxValue,
                                                        onChangeStartValue,
                                                        setSetting,
                                                        isActiveMaxValue,
                                                        isActiveStartValue,
                                                        isActiveIncButton

                                                    }) => {

    return (
        <Wrapper>
            <div>
                <div>
                    <TableRow>
                        <TableRowTitle>max value:</TableRowTitle>
                        <div><InputNumber onChangeInputNumber={onChangeMaxValue} number={maxValue}
                                          isActive={isActiveMaxValue}/></div>
                    </TableRow>
                    <TableRow>
                        <TableRowTitle>start value:</TableRowTitle>
                        <div><InputNumber onChangeInputNumber={onChangeStartValue} number={startValue}
                                          isActive={isActiveStartValue}/></div>
                    </TableRow>
                </div>
                <Buttons>
                    <BtnBlue title={'set'} onClick={setSetting} isActive={isActiveIncButton}/>
                </Buttons>
            </div>
        </Wrapper>
    );

}

export default CounterSetting;