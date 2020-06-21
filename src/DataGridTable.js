import React from 'react';
import ReactDataGrid from 'react-data-grid';
//import PopUpMessage from './PopUpMessage';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

const col = [
    {key: 'id', name: 'ID'},
    {key: 'nameSurname', name: 'Name Surname', editable: true}
    ];

class DataGridTable extends React.Component {
    constructor(props) {
        super(props);
        this.togglePopup = this.togglePopup.bind(this);
        this.state = {showPopup: false};
        this.openPopupbox = this.openPopupbox.bind(this);
        //this.onChangeInput = this.onChangeInput.bind(this); TODO: add custom event handlers
        //this.openPopupbox();
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        const localRows = this.props.rows.slice();
        var cellInputRestrictionRegex = /^([0-9][0-9]?|100)$|^(([0-9][0-9]?|100)\/([0-9][0-9]?|100))$/;
        var corruptedKey;
        for (const [key, value] of Object.entries(updated)) {
            if (key != 'id' && key != 'nameSurname') {
                if (!value.match(cellInputRestrictionRegex)) {
                    corruptedKey = key;
                    this.togglePopup();
                    //this.setState({showPopup: true});

                } else {
                    this.setState({showPopup: false});
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

    openPopupbox() {
        const content = (
            <div>
                <p className="quotes">Inserted value must be in range [0,100]</p>
            </div>
        );
        PopupboxManager.open({ content })
    }



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
                {
                    (this.state.showPopup) ? this.openPopupbox() : null
                }
                <PopupboxContainer />
            </div>

        );
    }

}

export default DataGridTable;