import express, { Express } from 'express'
import mongoose from 'mongoose'

const app = express()

app.get('/', (req, res) => {
  req.foo = { bar: 'baz' }
  res.send(`Hello, world! ${req.foo.bar}`)
})

;(async () => {
  try {
    // Connect to the database
    await mongoose
      .connect(`${import.meta.env.VITE_MONGO_URI}`, {
        dbName: import.meta.env.VITE_MONGO_DB_NAME
      })
      .then(() => console.log('Connected to the database'))

    // Handle errors
    app.on('error', (error) => {
      console.log(`Express server error: ${error}`)
    })

    // Start the server
    app.listen(import.meta.env.VITE_PORT, () => {
      console.log(`Server is running on http://localhost:${import.meta.env.VITE_PORT}`)
    })
  } catch (error) {
    // If the database connection fails, log the error and exit the process
    console.error(`Database connection failed: ${error}`)
    process.exit(1)
  }
})()

export const viteNodeApp: Express = app
