const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1000,
      height: 700,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        webviewTag: true,
        nodeIntegrationInWorker: true,
        nodeIntegrationInSubFrames: true
    }
    });
    win.setMenu(null)
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
  })