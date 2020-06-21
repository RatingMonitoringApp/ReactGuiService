import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// npm start
// npm run build






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};



const columns = [
    { key: 'id', name: 'ID', width: 75 },
    { key: 'title', name: '20.10.2019', width: 75},
    { key: 'title1', name: '20.10.19', width: 75 },
    { key: 'title2', name: '20.10.19', width: 75 },
    { key: 'title3', name: '20.10.19' , width: 75},
    { key: 'title4', name: '20.10.19', width: 75 },
    { key: 'title5', name: '20.10.19', width: 75 },
    { key: 'title6', name: '20.10.19', width: 75 },
    { key: 'title7', name: '20.10.19' , width: 75},
    { key: 'title8', name: '20.10.19', width: 75 },
    { key: 'count', name: 'Count', width: 75 } ];

const rows = [{id: 0, title: 'row1',title1: 'row1',title2: 'row1',title3: 'row1',title4: 'row1',title5: 'row1',title6: 'row1',title7: 'row1',title8: 'row1', count: 20},
              {id: 1, title: 'row1',title2: 'row1',title3: 'row1',title4: 'row1',title5: 'row1',title6: 'row1',title7: 'row1',title8: 'row1', count: 40},
              {id: 2, title: 'row1',title2: 'row1',title3: 'row1',title4: 'row1',title5: 'row1',title6: 'row1',title7: 'row1',title8: 'row1', count: 60}];

function HelloWorld() {
    return (<ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={3}
        minHeight={150}
        maxWidth={10}/>);
}
const element = (
    <h1>Hello, {formatName(user)}! </h1>
);
const el2 = (
    <HelloWorld/>
)

ReactDOM.render(
   element,
    document.getElementById('root')
);
 */