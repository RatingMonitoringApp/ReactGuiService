import React from 'react';
import './AddColumnTable.css';
import ReactDataGrid from 'react-data-grid';
class AddColumnTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assessmentDate: {},
            isAutomaticallyCompleted: false,
            isOnceInFortnight: false,
            endDate: ''
        };

        //TODO: add odd and even weeks
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onAutoCompleteClick = this.onAutoCompleteClick.bind(this);
        this.onIsOnceInFortnightClick = this.onIsOnceInFortnightClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeInput(event) {
        const name = event.target.name;
        var partialState = {};
        partialState[name] = event.target.value;
        this.setState(partialState);
    }
    onSubmit(event) { //event
        event.preventDefault();
        //callback function from parent
        //this.props.newColumnsCallback({key: this.state.assessmentDate, name: this.state.assessmentDate, editable: true});
        this.props.addDateCallback(this.state.assessmentDate);
        //TODO: return more complex json with other input parameters
        //document.getElementById('newColumnForm').reset();
    }
    onIsOnceInFortnightClick(){
        //const name = event.target.name;
        //var partialState = {};
        //partialState[name] = !this.name.event.target.value;
        var partialState = {};
        partialState["isOnceInFortnight"] = !this.state.isOnceInFortnight;
        this.setState(partialState);
        if (partialState["isOnceInFortnight"] == true) {
            this.onceInFortnightBtn.classList.add('autoCompleteButtonPressed');//backgroundColor = "#4095c6";
        } else {
            this.onceInFortnightBtn.classList.remove('autoCompleteButtonPressed');//.backgroundColor = "#4eb5f1";
        }
    }

    onAutoCompleteClick(){
        //const name = event.target.name;
        //var partialState = {};
        //partialState[name] = !this.name.event.target.value;
        var partialState = {};
        partialState["isAutomaticallyCompleted"] = !this.state.isAutomaticallyCompleted;
        this.setState(partialState);
        if (partialState["isAutomaticallyCompleted"] == true) {
            //this.onceInFortnightBtn.style.backgroundColor = "#4095c6";
            this.autoCompleteBtn.classList.add('autoCompleteButtonPressed');
        } else {
            this.autoCompleteBtn.classList.remove('autoCompleteButtonPressed');
            //this.onceInFortnightBtn.style.backgroundColor = "#4eb5f1";
        }

    }
//<label className="formQuestion">  <input  name="isAutomaticallyCompleted"
//type="radio" onChange={this.onAutoCompleteEnable}/>Yes </label>
    //ref={autoCompleteBtn => { this.autoCompleteBtn = autoCompleteBtn; }} onClick={this.onAutoCompleteClick} className="btn btn-primary"
    //  className="btn btn-default"
    //background-color:#4eb5f1;
    //<button className="autoCompleteButton" >bb</button>
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} id="newColumnForm">
                    <br/>
                    <label className="formQuestion" >Дата аттестации: <input name="assessmentDate"  type="text"
                                                                        placeholder="ДД.ММ.ГГГГ" onChange={this.onChangeInput}/></label>

                    {/*<input type="button" name="isAutomaticallyCompleted" className="autoCompleteButton"*/}
                           {/*ref={autoCompleteBtn => { this.autoCompleteBtn = autoCompleteBtn; }} onClick={this.onAutoCompleteClick} value="Auto Complete the table?" />*/}
                    {/*<input type="button" name="isOnceInFortnight" className="autoCompleteButton" ref={onceInFortnightBtn => { this.onceInFortnightBtn = onceInFortnightBtn; }}*/}
                           {/*onClick={this.onIsOnceInFortnightClick} value="Once in fortnight?" />*/}

                    {/*{this.state.isAutomaticallyCompleted*/}
                        {/*?  <label className="formQuestion"> Autocomplete till:  <input name="endDate"  type="text"*/}
                                                                                       {/*placeholder="Use format MM.DD.YYYY" onChange={this.onChangeInput}/> </label>*/}
                        {/*: null*/}
                    {/*}*/}
                    <input type="submit" value="Подтвердить дату"/>
                    <br/>
                    <br/>
                </form>
            </div>

        );
    }
}

/*


 <form onSubmit={this.onSubmit} id="newColumnForm">
 <br/>
 <label className="formQuestion" >Add column: <input name="newColumn"  type="text"
 placeholder="Use format MM.DD.YYYY" onChange={this.onChangeInput}/></label>

 <button   ref={autoCompleteBtn => { this.autoCompleteBtn = autoCompleteBtn; }} onClick={this.onAutoCompleteClick} className="btn btn-default" >
 Auto Complete the table?</button>
 <label className="formQuestion"> Once in fortnight: <input name="isOnceInFortnight"  type="radio"
 value={this.state.isOnceInFortnight} onChange={this.onChangeInput}/>Yes</label>

 {this.state.isAutomaticallyCompleted
 ?  <label className="formQuestion"> Autocomplete till:  <input name="endDate"  type="text"
 placeholder="Use format MM.DD.YYYY" onChange={this.onChangeInput}/> </label>
 : null
 }
 <input type="submit" value="+"/>
 <br/>
 <br/>
 </form>
 */


/*

 return (
 <div>
 <br/>
 <br/>
 <label className="formQuestion" >Add column: <input name="newColumn"  type="text" id="newColumnName"
 placeholder="Use format MM.DD.YYYY" onChange={this.onChangeInput}/></label>

 <button   ref={autoCompleteBtn => { this.autoCompleteBtn = autoCompleteBtn; }} onClick={this.onAutoCompleteClick} className="btn btn-default" >
 Auto Complete the table?</button>
 <label className="formQuestion"> Once in fortnight: <input name="isOnceInFortnight"  type="radio"
 value={this.state.isOnceInFortnight} onChange={this.onChangeInput}/>Yes</label>

 {this.state.isAutomaticallyCompleted
 ?  <label className="formQuestion"> Autocomplete till:  <input name="endDate"  type="text"
 placeholder="Use format MM.DD.YYYY" onChange={this.onChangeInput}/> </label>
 : null
 }
 <button   ref={autoCompleteBtn => { this.autoCompleteBtn = autoCompleteBtn; }} onClick={this.onSubmit()} className="btn btn-default" >
 Auto Complete the table?</button>
 </div>

 );
 */
export default AddColumnTable;
