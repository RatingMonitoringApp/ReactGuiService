import React from 'react';
import './AddColumnTable.css';
import ReactDataGrid from 'react-data-grid';
class AddColumnTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newColumn: {},
            isAutomaticallyCompleted: false,
            isOnceInFortnight: true,
            endDate: ''
        };

        //TODO: add odd and even weeks
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onAutoCompleteEnable = this.onAutoCompleteEnable.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeInput(event) {
        const name = event.target.name;
        var partialState = {};
        partialState[name] = event.target.value;
        this.setState(partialState);
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.newColumns({key: this.state.newColumn, name: this.state.newColumn, editable: true});
        //TODO: return more complex json with other input parameters
        document.getElementById('newColumnForm').reset();
    }
    onAutoCompleteEnable(event){
        var partialState = {};
        partialState[event.target.name] = true;
        this.setState(partialState);
    }
    render() {
        return (
            <div>
                <br/>
            <form onSubmit={this.onSubmit} id="newColumnForm">
                <br/>
                <label className="formQuestion" >Add column: <input name="newColumn"  type="text"
                      placeholder="Use format MM.DD.YYYY" onChange={this.onChangeInput}/></label>
                <label className="formQuestion"> Auto Complete the table? <input  name="isAutomaticallyCompleted"
                      type="radio" onChange={this.onAutoCompleteEnable}/>Yes </label>
                <label className="formQuestion"> Once in fortnight: <input name="isOnceInFortnight"  type="radio"
                      value={this.state.isOnceInFortnight} onChange={this.onChangeInput}/>Yes</label>
                {this.state.isAutomaticallyCompleted
                    ?  <label className="formQuestion"> Autocomplete till:  <input name="endDate"  type="text"
                            placeholder="Use format MM.DD.YYYY" onChange={this.onChangeInput}/> </label>
                    : null
                }
                <input type="submit" value="+"/>
                <br/>
                <p>

                </p>
                <br/>
            </form>

            </div>

        );
    }
}/*
{this.data.columns.length};
 {this.data.newColumns.length};
 {this.props.columns.length}*/
export default AddColumnTable;
