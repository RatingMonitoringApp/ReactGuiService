import React from 'react';
import ReactDataGrid from 'react-data-grid';
import PopUpMessage from './PopUpMessage';
const col = [
    {key: 'id', name: 'ID'},
    {key: 'nameSurname', name: 'Name Surname', editable: true}
    ];

class DataGridTable extends React.Component {
    constructor(props) {
        super(props);
        this.togglePopup = this.togglePopup.bind(this);
        this.state = {showPopup: false};

        //this.onChangeInput = this.onChangeInput.bind(this); TODO: add custom event handlers
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        const localRows = this.props.rows.slice();
        var corruptedKey;
        for (const [key, value] of Object.entries(updated)) {
            if (key != 'id' && key != 'nameSurname') {
                if (value > 100 || value < 0) {
                    corruptedKey = key;
                    this.setState({showPopup: true});
                }
            }
        }
        updated[corruptedKey] = "";

        for (let i = fromRow; i <= toRow; i++) {
            localRows[i] = {...localRows[i], ...updated};
        }
        //this.setState({rows: localRows});
        this.props.rowsChanged(localRows);
    };

    render() {
        return (
            <div>
                <ReactDataGrid
                    columns={/*this.state.columns*/this.props.columns}
                    rowGetter={i =>/*this.state.rows[i]*/ this.props.rows[i]}
                    rowsCount={/*this.state.rows.length*/this.props.rows.length}
                    /*minHeight={170}*/
                    maxWidth={10}
                    onGridRowsUpdated={this.onGridRowsUpdated}
                    enableCellSelect={true}
                />
                {this.state.showPopup ?
                    <PopUpMessage
                        text="Inserted value must be in range [0,100]"
                        closePopup={this.togglePopup}
                    />
                    : null
                }
            </div>

        );
    }

}

export default DataGridTable;