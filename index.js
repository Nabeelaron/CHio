const electron = require('electron')

const { app, BrowserWindow, Menu, ipcMain } = electron

// Menu.setApplicationMenu(null)

app.on('ready', () => {
    var win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: false
        },
        width: 1200,
        height: 700,
        frame: true
    })
    win.loadFile("index.html")
        // win.loadURL("https://app.clubhouse.io/")
})

ipcMain.on('check', (event, text) => {

})