import React, { Component } from 'react'
import Blotter from './Blotter'
import BlotterDashboard from './BlotterDashboard'
import { withStyles } from '@material-ui/core/styles'


const styles = {
    test : {
        border: 1,
        borderStyle: 'solid',
        borderColor:'#cdcdcd',
        margin: 10,
        padding: 10
    }

};

export class BlotterAndDashboardWrapper extends Component {
    render() {
        const { classes } = this.props;
        console.log('what are classed ', classes)
        return (
            <div className={classes.test}>
                <BlotterDashboard />
                <Blotter />
            </div>
        )
    }
}

export default withStyles(styles)(BlotterAndDashboardWrapper)
