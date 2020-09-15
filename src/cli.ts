#!/usr/bin/env node

import { app } from "./app"

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Websocket Ping Check listening on http://localhost:${port}`)
})
