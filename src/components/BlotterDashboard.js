import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Tabs, Tab, Typography } from '@material-ui/core'
import TabContainer from './TabContainer'


const styles = theme => ({
    root: {
        flexGrow: 1,   
    },
    paper: {
        boxShadow:'none'
    },
    tabs: {
        boxShadow:'none',
        backgroundColor:'rgba(0,0,0,.15)' 
    },
    'button:selected':{
        backgroundColor:'#fff'
    }
    

});

// function TabContainer(props) {
//     return (
//         <Typography component="div" style={{ padding: 8 * 3 }}>
//             {props.children}
//         </Typography>
//     );
// }


export class BlotterDashboard extends Component {
    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }
    render() {
        const { classes } = this.props
        const { value } = this.state
        
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Tabs value={value} className={classes.tabs} onChange={this.handleChange}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </Paper>
                <TabContainer />
            </div>
        )
    }
}

export default withStyles(styles)(BlotterDashboard)
