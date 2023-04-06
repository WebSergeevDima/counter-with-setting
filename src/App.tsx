import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";
import CounterSetting from "./components/CounterSetting/CounterSetting";

function App() {

    let baseMaxValue = !localStorage.getItem('maxValue') ? 5 : Number(localStorage.getItem('maxValue'));
    let baseStartValue = !localStorage.getItem('startValue') ? 0 : Number(localStorage.getItem('startValue'));

    let [isChange, setIsChange] = useState<boolean>(false);

    const [maxValue, setMaxValue] = useState<number>(baseMaxValue);
    const [startValue, setStartValue] = useState<number>(baseStartValue);

    const onChangeMaxValue = (value: number) => {
        setMaxValue(value);
        setIsChange(true);
    }
    const onChangeStartValue = (value: number) => {
        setStartValue(value);
        setIsChange(true);
    }

    const setSetting = () => {
        localStorage.setItem('maxValue', String(maxValue));
        localStorage.setItem('startValue', String(startValue));
        setIsChange(false);
    }

    const isActiveMaxValue = startValue <= maxValue && maxValue >= 0 ? true : false;
    const isActiveStartValue = startValue <= maxValue && startValue >= 0 ? true : false;
    const isActiveIncButton = (isActiveMaxValue && isActiveStartValue) && isChange ? true : false;


    return (
        <div className="App">
            <Counter baseMaxValue={baseMaxValue} baseStartValue={baseStartValue}/>
            <CounterSetting startValue={startValue} maxValue={maxValue} onChangeMaxValue={onChangeMaxValue}
                            onChangeStartValue={onChangeStartValue} setSetting={setSetting}
                            isActiveMaxValue={isActiveMaxValue}
                            isActiveStartValue={isActiveStartValue}
                            isActiveIncButton={isActiveIncButton}/>
        </div>
    );
}

export default App;
