import express from "express"
import ws from "express-ws"
import path from "path"

export const { app } = ws(express())

// Websocket that simply responds with the current server time
app.ws("/", ws => {
  ws.on("message", () => {
    ws.send(Date.now())
  })
})

// Serve up our static HTML page
app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../static/index.html"))
})
