import { useState } from 'react';
import generateRandomNum from '../utils/GenerateRandom';

export default function RandomNum () {
    const [num, setNum] = useState(generateRandomNum(1, 100));
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => setNum(generateRandomNum(1, 100))}>Generate random number</button>
        </div>
    )
}