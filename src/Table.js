import React from 'react';
import DataGridTable from './DataGridTable';
import AddColumnTable from './AddColumnTable';

class Table extends React.Component {
    //function(row, rowNumber, rows) { //element, its number, the iterable array itself
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {key: 'id', name: 'ID', width: '10%'},//, width: 50
                {key: 'nameSurname', name: 'Name Surname', editable: true, width: '20%'}//, width: '10'
            ],
            rows: [
                {id: 0, nameSurname: 'Ivan Ivanov'},
                {id: 1, nameSurname: 'Ivan Ivanov'},
                {id: 2, nameSurname: 'Ivan Ivanov'},
                {id: 3, nameSurname: 'Ivan Ivanov'},
                {id: 4, nameSurname: 'Ivan Ivanov'},
                {id: 5, nameSurname: 'Ivan Ivanov'}
            ]
        };
        this.newColumnsCallback = this.newColumnsCallback.bind(this);
        this.rowChangedCallback = this.rowChangedCallback.bind(this);

        //this.onChangeInput = this.onChangeInput.bind(this); TODO: add custom event handlers
    };

    newColumnsCallback(newColumn) {
        var tempColumns  = this.state.columns.slice();
        tempColumns.push(newColumn);
        var tempRows = this.state.rows.slice();
        this.setState({columns: tempColumns, rows: tempRows});
    };

    rowChangedCallback(newRows) {
        var tempRows = newRows.slice();
        this.setState({rows: tempRows});
    };



    render() {
        return (
            <div className="Table">
                <AddColumnTable newColumns={this.newColumnsCallback} />
                <DataGridTable columns={this.state.columns} rows={this.state.rows} rowsChanged = {this.rowChangedCallback}/>
            </div>
        );
    }
}
//
export default Table;