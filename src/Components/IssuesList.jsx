import { Fragment } from 'react';

export default function IssuesList({issues}) {
    if (!issues) {
        return;
    }

    return (
       issues.map((issue, index) => (
            <Fragment key={issue.id}>
                <p>{issue.title}</p>
                <p>{issue.body}</p>
            </Fragment>
       ))
    )
}