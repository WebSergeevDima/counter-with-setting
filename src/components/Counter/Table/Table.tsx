import React from "react";
import style from './Table.module.css';

type TablePropsType = {
    isActive: boolean
    count: number
}

const Table: React.FC<TablePropsType> = (props) => {

    return (
        <div className={props.isActive ? style.isMax + ' ' + style.count : style.count}>
            <div>{props.count}</div>
        </div>
    );
}

export default Table