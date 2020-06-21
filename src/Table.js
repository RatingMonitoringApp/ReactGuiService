import React from 'react';
import DataGridTable from './DataGridTable';
import AddColumnTable from './AddColumnTable';
import './Table.css';
class Table extends React.Component {
    //function(row, rowNumber, rows) { //element, its number, the iterable array itself
    constructor(props) {
        super(props);

        this.state = {
            groupName: "33534/4",
            columns: [
                {key: 'id', name: 'ID', width: '10%'},//, width: 50
                {key: 'nameSurname', name: 'Surname Name', editable: true, width: '20%'}//, width: '10'
            ],
            rows: [
                {id: 0, nameSurname: 'Ivanov Ivan'}/*,
                {id: 1, nameSurname: 'Petrov Petr'},
                {id: 2, nameSurname: 'Sidorov Egor'},
                {id: 3, nameSurname: 'Golikov Fedor'},
                {id: 4, nameSurname: 'Michaylov Michael'},
                {id: 5, nameSurname: 'Rodchenko Ivan'}*/
            ],
            rows2: [
                {id: 0, nameSurname: 'Gorov Dmitriy'},
                {id: 1, nameSurname: 'Kochin Vycheslav'},
                {id: 2, nameSurname: 'Kirov Vadim'},
                {id: 3, nameSurname: 'Gorniy Pavel'},
            ]
        };
        this.newColumnsCallback = this.newColumnsCallback.bind(this);
        this.rowChangedCallback = this.rowChangedCallback.bind(this);
        this.parseCSV=this.parseCSV.bind(this);
        this.onExportClick= this.onExportClick.bind(this);
        this.exportToCsv = this.exportToCsv.bind(this);
        this.parseCSV('');
        //this.onChangeInput = this.onChangeInput.bind(this); TODO: add custom event handlers
    };

    parseCSV(fileName) {
        /*var tempTable=[];
        d3.csv('33534_4.csv').then(function(text) {
            console.log(text); // Hello, world!
        });*/
}

    exportToCsv(filename, rows) {
        //TODO: popup not filled csv
    var processRow = function (row) {
        var finalVal = '';

        for (var j = 0; j < Object.values(row).length; j++) {
            var innerValue =  Object.values(row)[j].toString();
            //Object.values(row)[j] === null ? '' :
            /*if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };*/
            var result = innerValue;
            //var result = innerValue.replace(/"/g, '""');
            /*if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';*/
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    var finalVal='';
    var local =  this.state.columns;
        for (var j = 0; j < local.length; j++) {
            var innerValue = local[j].key.toString();
            if (j > 0)
                finalVal += ',';
            finalVal += innerValue;
        }
        csvFile += finalVal+ '\n';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
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

    onExportClick(){
        this.exportToCsv(this.state.groupName+".csv", this.state.rows)
    }
    //Object.values((this.state.rows[0]))[1].toString()
//this.state.groupName
    render() {
        return (
            <div className="Table">
                <label className="groupName" >{this.state.groupName}</label>
                <br/>
                <AddColumnTable newColumnsCallback={this.newColumnsCallback} />
                <DataGridTable columns={this.state.columns} rows={this.state.rows} rowsChanged = {this.rowChangedCallback}/>
                <input type="button" className="exportButton"
                       onClick={this.onExportClick} value="Export" />
            <br/><br/>
            <label className="groupName" >33534/3</label>
                <br/>
        <AddColumnTable newColumnsCallback={this.newColumnsCallback} />
        <DataGridTable columns={this.state.columns} rows={this.state.rows2} rowsChanged = {this.rowChangedCallback}/>
        <input type="button" className="exportButton"
               onClick={this.onExportClick} value="Export" />
    </div>
        );
    }
}
//
export default Table;