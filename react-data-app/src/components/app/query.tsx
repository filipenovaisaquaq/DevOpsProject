import * as React from 'react';
import Axios from 'axios';

class Query extends React.Component {
    state = {response: '' }

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
            const response = resp.data.result[0].a;
            this.setState({response})}
        )
    }

    render() {
        return (
            <div><h1>{this.state.response}</h1></div>
        )
    }
}

export default Query;