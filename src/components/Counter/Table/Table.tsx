import React from "react";
import style from './Table.module.css';

type TablePropsType = {
    isActive: boolean
    count: number
    isChangeValues: boolean
    startValue: number
    maxValue: number
}

const Table: React.FC<TablePropsType> = ({isChangeValues,startValue, maxValue, isActive, count}) => {

    if(!isChangeValues) {

        if(maxValue < 0 || startValue <= 0) {
            return (
                <div className={style.count + ' ' + style.error}>
                    <div>ERROR</div>
                </div>
            )
        } else {
            return (
                <div className={style.count}>
                    <div>Set value</div>
                </div>
            )
        }



    }

    return (
        <div className={isActive ? style.isMax + ' ' + style.count : style.count}>
            <div>{count}</div>
        </div>
    );
}

export default Table