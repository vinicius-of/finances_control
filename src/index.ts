import express, { urlencoded } from "express";
import "@dotenvx/dotenvx/config"
import { TesouroDiretoRouter } from "@controllers/index"
import morgan from 'morgan'
import { ErrorHandler } from "./middlewares/ErrorHandler";
import NotFoundError from "./errors/NotFoundError";
const cors = require('cors');

const app = express()

// Middlewares
.use(morgan('dev'))
.use(urlencoded({ extended: true }))
.use(express.json())
.use(cors())

// Health Check
app.get("/health", (_, res) => {
    res.json(true)
})

// Tesouro Direto
.use(TesouroDiretoRouter.path, TesouroDiretoRouter.router)

// 404 Handler
app.use(() => {
    throw new NotFoundError();
})

// Error Handlers
app.use(ErrorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Listening to ${process.env.PORT}`)
})