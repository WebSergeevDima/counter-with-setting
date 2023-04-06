import React from "react";
import style from './ResetButton.module.css';

type ResetButtonPropsType = {
    isActive: boolean
    resetCount: () => void
}

const ResetButton: React.FC<ResetButtonPropsType> = (props) => {

    return (
        <button onClick={props.resetCount} className={style.button} disabled={!props.isActive}>Reset</button>
    );
}

export default ResetButton