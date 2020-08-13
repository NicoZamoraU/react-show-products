import express from 'express'

import conn from '../connection'
import {
  getStadistics,
} from './middleware'

const router = express.Router()

router.get('/', getStadistics({ conn }))

export default router
