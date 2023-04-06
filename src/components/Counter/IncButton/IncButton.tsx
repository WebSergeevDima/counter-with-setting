import React from "react";
import style from './IncButton.module.css';

type IncButtonPropsType = {
    isActive: boolean
    incCount: () => void
}

const IncButton: React.FC<IncButtonPropsType> = (props) => {

    return (
        <button className={style.button} onClick={props.incCount} disabled={!props.isActive}>inc</button>
    );
}

export default IncButton