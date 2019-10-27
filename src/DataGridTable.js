import React from 'react';
import ReactDataGrid from 'react-data-grid';

const col = [
    {key: 'id', name: 'ID'},
    {key: 'nameSurname', name: 'Name Surname', editable: true}
    ]
class DataGridTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {columns: this.props.columns, rows: this.props.rows};

        //this.onChangeInput = this.onChangeInput.bind(this); TODO: add custom event handlers
    }
    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        const localRows = this.state.rows.slice();
        for (let i = fromRow; i <= toRow; i++) {
            localRows[i] = {...localRows[i], ...updated};
        }
        this.setState({rows: localRows});
    };

    render() {
        return (
                <ReactDataGrid
                    columns={/*this.state.columns*/this.props.columns}//this.state.columns
                    rowGetter={i =>/*this.state.rows[i]*/ this.props.rows[i]}//this.state.rows
                    rowsCount={/*this.state.rows.length*/this.props.rows.length}//this.state.rows.length
                    minHeight={170}
                    maxWidth={10}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                    enableCellSelect={true}
                />
        );
    }

}

export default DataGridTable;