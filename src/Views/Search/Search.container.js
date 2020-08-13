import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lottie from 'react-lottie'
import { withStyles, fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import StarIcon from '@material-ui/icons/StarBorder'
import {
  Grid,
  Paper,
  Button,
  AppBar,
  Toolbar,
  GridList,
  Container,
  InputBase,
  Typography,
  IconButton,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  GridListitemBar,
} from '@material-ui/core'
import _ from 'lodash'

import { Searching } from '../Animations'

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
  title: {
    display: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: 3,
    backgroundColor: fade('rgb(255, 255, 255)', 0.15),
    '&:hover': {
      backgroundColor: fade('rgb(255, 255, 255)', 0.25),
    },
    marginRight: 2,
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: 2,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grow: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingLeft: 40,
    width: '100%',
  },
  containerProduct: {
    boxSizing: 'border-box',
    paddingTop: 60,
    overflowY: 'auto',
    height: '100%',
  },
  product: {
    margin: 30,
    height: 300,
    width: 300,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}

const showData = props => {
  const {
    searching,
    classes,
    searchData,
    searchText,
  } = props

  const searchDataFiltered = searchText && searchText.length > 0
    ? _.filter(searchData, x => x.titulo.toLowerCase().includes(searchText.toLowerCase()))
    : searchData

  if (searching) {
    return (
      <div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: Searching,
          }}
          height='50%'
          width='50%'
          isClickToPauseDisabled
        />
      </div>
    )
  }

  if (!searchDataFiltered.length) {
    return (
      <Container
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Typography variant='h5' component='p'> Sin datos para mostrar </Typography>
      </Container>
    )
  }

  return (
    <GridList cellHeight={250} className={classes.gridList}>
      {searchDataFiltered.map((item, i) => (
        <GridListTile key={i.toString()}>
          <img src={item.imagen} alt={item.titulo} />
          <GridListTileBar
            title={item.titulo}
            actionIcon={
              (
                <IconButton
                  aria-label={`Información de ${item.title}`}
                  className={classes.icon}
                >
                  <StarIcon />
                </IconButton>
              )
            }
          />
        </GridListTile>
      ))}
    </GridList>
  )
}

export class Search extends Component {
  render() {
    const {
      classes,
    } = this.props

    const handleSearch = text =>
      this.props.searchingText(text)

    return (
      <div className={classes.container}>
        <Container className={classes.fullHeight} fixed>
          <AppBar position='static'>
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onChange={event => handleSearch(event.target.value)}
                  placeholder='Ingresa título a buscar...'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.grow} />
            </Toolbar>
          </AppBar>
          <br />
          {showData(this.props)}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    Search: {
      data: searchData,
      searchText,
      searching,
    },
  } = state

  return {
    searchData,
    searchText,
    searching,
  }
}
const mapDispatchToProps = dispatch => ({
  searchingText: payload => dispatch({ type: 'SEARCH_DATA', payload }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Search))
