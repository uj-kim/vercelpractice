import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    const handleCountPlus = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log('hello useEffect');
    }, []);

    return (
        <>
            {count}
            <br />
            <button onClick={handleCountPlus}>증가</button>
            <h1>useEffect</h1>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </>
    );
}

export default App;
