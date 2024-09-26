import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { config } from './config.js'
import notFoundHandler from './api/routes/not-found.js'
import errorHandler from './api/routes/error-handler.js'
import router from './api/routes/router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(morgan('dev'))

router(app)

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}: http://localhost:${config.PORT}`)
})
