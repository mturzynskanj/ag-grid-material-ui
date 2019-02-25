import React, { Component, Fragment } from 'react';
import '../App.css';
import { AgGridReact } from 'ag-grid-react'

export class Blotter extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Make", field: "make"
            }, {
                headerName: "Model", field: "model"
            }, {
                headerName: "Price", field: "price"
            }],
            rowData: [{
                make: "Toyota", model: "Celica", price: 35000
            }, {
                make: "Ford", model: "Mondeo", price: 32000
            }, {
                make: "Porsche", model: "Boxter", price: 72000
            }]
        }

    }

    render() {
        return (
            <Fragment>
                <div className="ag-theme-balham" style={{ height: '500px', width: '600px' }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </Fragment>
        );
    }
}

export default Blotter