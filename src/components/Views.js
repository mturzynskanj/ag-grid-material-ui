import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Select, Typography, InputLabel, } from '@material-ui/core'

const styles = {
    root: {
        'minWidth': 250,
        'width': 250,
    },
    select: {
        'width': 200,
        'marginLeft': 15
    }


}

export class Views extends Component {
    state = {
        views: [
            {
                name: 'view 1'
            },
            {
                name: 'view 2'
            },
            {
                name: 'view 3'
            },
            {
                name: 'view 4'
            }
        ]
    }
    handleChange = (event, value) => {

    }
    render() {
        const { classes } = this.props
        const { views } = this.state

        let allViews = views.map(view => '<option value={view.name}>"test"</option>')
        console.log('allViews ', allViews.join(' '))

        return (
            <div className={classes.root}>
                <InputLabel htmlFor="age-native-simple">Views</InputLabel>
                <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                   allView.join(' ')
                    {/* <option value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option> */}
                </Select>

            </div>
        )
    }
}

export default withStyles(styles)(Views)
