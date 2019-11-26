const electron = require('electron')

const { app, BrowserWindow } = electron

app.on('ready', () => {
    var win = new BrowserWindow({ width: 600, height: 512, frame: false })
    win.loadURL("https://www.google.com")
})