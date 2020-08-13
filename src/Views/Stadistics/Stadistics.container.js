import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Chip,
  GridList,
  Container,
  Typography,
  IconButton,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core'
import StarIcon from '@material-ui/icons/StarBorder'
import DoneIcon from '@material-ui/icons/Done'
import _ from 'lodash'

const showPorducts = props => {
  const { classes, data } = props

  const products = _.flattenDeep(_.compact(data.map(item => item.products)))

  return (
    <GridList cellHeight={250} className={classes.gridList}>
      {products.map((item, i) => (
        <GridListTile key={i.toString()}>
          <img src={item.imagen} alt={item.titulo} />
          <GridListTileBar
            title={item.titulo}
            subtitle={item.tags}
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

export class StadisticsContainer extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <Container className={classes.container}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='stretch'
        >
          <Grid
            container
            direction='column'
            justify='flex-start'
            alignItems='stretch'
            style={{ paddingTop: 40 }}
          >
            <Typography
              variant='h3'
              align='center'
              style={{ padding: '30px 5px' }}
            >
              Palabras más buscadas
            </Typography>
            <Grid container className={classes.justify}>
              <Grid
                item
                className={classes.containerTags}
              >
                {data.map((x, i) => (
                  <Chip
                    key={i.toString()}
                    color='primary'
                    label={x.tag}
                    deleteIcon={<DoneIcon />}
                    onDelete={() => {}}
                    className={classes.tag}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography
              variant='h3'
              align='center'
              style={{ padding: '30px 5px' }}
            >
              Productos más buscados
            </Typography>
            <Grid
              container
              alignItems='center'
              style={{ display: 'flex' }}
            >
              {showPorducts(this.props)}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const {
    Stadistics: {
      data,
    },
  } = state

  const dataSliced = _.slice(data, 0, 20)

  return {
    data: dataSliced,
  }
}
const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  containerTags: {
    display: 'contents',
  },
  justify: {
    justifyContent: 'center',
  },
  tag: {
    margin: '5px 10px',
    padding: 5,
  },
})(StadisticsContainer))
