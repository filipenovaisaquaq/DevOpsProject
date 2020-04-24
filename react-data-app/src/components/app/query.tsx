import * as React from 'react';
import Axios from 'axios';

export default class Query extends React.Component {
    state = { response: '' }

    componentDidMount() {
        const headers = {
            'Accept': '*/*',
            'Authorization': 'Basic dXNlcjpwYXNz'
        };

        const data = {
            'query': "select from table", 
            'response':true, 
            'type':'sync'
        };

        Axios.post('https://localhost:8080/executeQuery', data, {headers:headers})
        .then(resp => {
            console.log(resp.data.result[0].a);
            const response = resp.data.result[0].a;
            this.setState({response})}
        )
    }

    render() {
        return (
            <div className="page-header">
                <h1>{this.state.response}</h1>
            </div>
        )
    }
}