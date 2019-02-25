import React, { Component, Fragment } from 'react'
import Views from './Views'
import { withStyles } from '@material-ui/core/styles'

const styles ={
    root: {
        'minHeight': 250,
        'paddingTop':20
    },
    
}

export class TabContainer extends Component {
    render(props) {
        const {classes} = this.props
        return (
            <div className={classes.root} >
                <Views />
            </div>
        )
    }
}

export default withStyles(styles)(TabContainer)
