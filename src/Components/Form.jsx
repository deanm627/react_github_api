import { useState, useEffect } from 'react';
import Result from './Result';

export default function Form() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState();

    async function getInfo() {
        const url = `https://api.github.com/users/${value}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setResult(data);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getInfo();
        setValue("");
    }

    function handleChange(e) {
        const newValue = e.target.value;
        console.log(newValue);
        setValue(newValue);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label>Type GitHub username here:</label>
                <input type="text" value={value} onChange={handleChange} placeholder="userID" />
                <button type="submit">Submit</button>
            </form>
            <div>
                <Result result={result} />
            </div>
            
        </>
    )
}