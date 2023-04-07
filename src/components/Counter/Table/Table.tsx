import React from "react";
import style from './Table.module.css';

type TablePropsType = {
    isActive: boolean
    count: number
    isSetError: boolean
    isChange: boolean
}

const Table: React.FC<TablePropsType> = ({isActive, count, isSetError, isChange}) => {

    if (isSetError && isChange) {
        return (
            <div className={style.correctValue + ' ' + style.count}>
                <div>Enter values and press 'set'</div>
            </div>
        );
    }

    if (!isSetError && isChange) {
        return (
            <div className={style.incorrectValue + ' ' + style.count}>
                <div>Incorrect value!</div>
            </div>
        );
    }


    return (
        <div className={isActive ? style.isMax + ' ' + style.count : style.count}>
            <div>{count}</div>
        </div>
    );
}

export default Table