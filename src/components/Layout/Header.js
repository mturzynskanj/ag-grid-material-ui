import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

export class Header extends Component {
    render() {
        const { classes } = this.props
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Photos
                        </Typography>
                        <div>
                            <AccountCircle />
                        </div>
                    </Toolbar>
                </AppBar>

            </div>
        )
    }
}

export default withStyles(styles)(Header)
