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


  return (
    <div className="App">
        <Counter baseStartValue={baseStartValue} baseMaxValue={baseMaxValue} maxValue={maxValue} startValue={startValue} isChange={isChange} />
        <CounterSetting startValue={startValue} maxValue={maxValue} onChangeMaxValue={onChangeMaxValue} onChangeStartValue={onChangeStartValue} setSetting={setSetting} isChange={isChange} />
    </div>
  );
}

export default App;
