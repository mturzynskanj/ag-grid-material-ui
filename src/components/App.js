import React, { Component, Fragment } from 'react';
import Header from './Layout/Header'
import BlotterAndDashboardWrapper from './BlotterAndDashboardWrapper'
import '../App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
   
    render() {
        return (
            <Fragment>
                <Header />
                <BlotterAndDashboardWrapper /> 
            </Fragment>
        );
    }
}

export default App;
