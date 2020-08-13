import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/core/styles'

import { Loading } from './Animations'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },
})

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Loading,
        }}
        height='50%'
        width='50%'
        isClickToPauseDisabled
      />
    </div>
  )
}
