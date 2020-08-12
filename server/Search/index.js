import express from 'express'

import conn from '../connection'
import { getAllData } from './middleware'

const router = express.Router()

router.get('/all', getAllData({ conn }))

export default router
