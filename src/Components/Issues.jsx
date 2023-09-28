import { useState } from 'react';
import IssuesList from './IssuesList';

export default function Issues() {
    const [issues, setIssues] = useState();
    

    function handleSubmit(e) {
        e.preventDefault();
        getInfo();
    }

    async function getInfo() {
        const url = "https://api.github.com/repos/facebook/create-react-app/issues";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setIssues(data);
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit">Generate create-react-app issues list</button>
            </form>
            <div>
                <IssuesList issues={issues} />
            </div>
            
        </>
    )
}