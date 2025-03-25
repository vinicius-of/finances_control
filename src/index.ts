import express, { urlencoded } from "express";
import "@dotenvx/dotenvx/config"
import { TesouroDiretoRouter } from "@controllers/index"
import { notFoundResponse } from "./middlewares/NotFound";
import morgan from 'morgan'
const cors = require('cors');

const app = express()

// Middlewares
.use(morgan('dev'))
.use(urlencoded({ extended: true }))
.use(express.json())
.use(cors())

// Routers
.use(TesouroDiretoRouter.path, TesouroDiretoRouter.router);

// Health Check
app.get("/health", (_, res) => {
    res.send(true)
})

// Route not found response
app.use(notFoundResponse);

app.listen(process.env.PORT, () => {
    console.log(`Listening to ${process.env.PORT}`)
})