export default function Result({result}) {
    if (result) {
        return (
            <>
                <p><b>Name: </b>{result.name}</p>
                <p><b>Username: </b>{result.login}</p>
                <p><b>Link: </b>{result.html_url}</p>
            </>
        )
    }
    return;
    
}