import React from 'react';
import DataGridTable from './DataGridTable';
import AddColumnTable from './AddColumnTable';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {key: 'id', name: 'ID', width: '10%'},//, width: 50
                {key: 'nameSurname', name: 'Name Surname', editable: true, width: '20%'}//, width: '10'
            ],
            rows: [
                {id: 0, nameSurname: 'Ivan Ivanov'}
            ],
            num: 0
        };
        this.newColumnsCallback = this.newColumnsCallback.bind(this);
        //this.onChangeInput = this.onChangeInput.bind(this); TODO: add custom event handlers
    };

    newColumnsCallback(newColumn) {
        var tempColumns  = this.state.columns.slice();
        tempColumns.push(newColumn);
        var tempRows = this.state.rows.slice();
        /*tempRows.forEach(function(item, i, arr) {
            item[newColumn.key] = "7";
        });*/
        this.setState({columns: tempColumns, rows: tempRows});
    };


    render() {
        return (
            <div className="Table">
                <AddColumnTable newColumns={this.newColumnsCallback} />
                <DataGridTable columns={this.state.columns} rows={this.state.rows} />
                <p>{this.state.columns.length}</p>
            </div>
        );
    }
}
//
export default Table;