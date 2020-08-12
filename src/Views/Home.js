import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles, createStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
  Button,
  Container,
  Typography,
} from '@material-ui/core'

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: 60,
    overflowY: 'auto',
  },
  fullHeight: {
    height: '90%',
  },
  button: {
    margin: 20,
    padding: 0,
    display: 'flex',
  },
  paper: {
    maxWidth: 400,
    minWidth: 400,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}

export class Home extends Component {
  render() {
    const { classes, history } = this.props

    const goTo = route => history.push(route)

    return (
      <div className={classes.container}>
        <Container className={classes.fullHeight} fixed>
          <Grid container justify='center' className={classes.fullHeight}>
            <Grid item xs={12} className={classes.fullHeight}>
              <Grid container justify='center' alignItems='center' direction='column' className={classes.fullHeight}>
                <Grid item>
                  <Button className={classes.button} onClick={() => goTo('/search')}>
                    <Paper className={classes.paper}>
                      <Typography align='center' variant='h5' component='p'>
                        Buscador
                      </Typography>
                    </Paper>
                  </Button>
                  <Button className={classes.button} onClick={() => goTo('/stadistics')}>
                    <Paper className={classes.paper}>
                      <Typography align='center' variant='h5' component='p'>
                        Estadísticas
                      </Typography>
                    </Paper>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
