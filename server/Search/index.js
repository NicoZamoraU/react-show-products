import express from 'express'

import conn from '../connection'
import {
  getAllData,
  getSpecific,
} from './middleware'

const router = express.Router()

router.post('/', getSpecific({ conn }))
router.get('/all', getAllData({ conn }))

export default router
