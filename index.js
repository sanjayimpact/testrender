const express = require('express');
const WebSocket = require("ws");
const app  = express();
const port = 3000;

const ws = new WebSocket("wss://brd-customer-hl_b0a0de5f-zone-scraping_browser1:zuh9bm3r1npt@brd.superproxy.io:9222");

ws.on("open", () => console.log("✅ Opened"));
ws.on("error", (err) => console.log("❌ Error", err.message));

app.listen(port,(err)=>{
    if(err)throw err;
    console.log("hey bro is connected with ")
})