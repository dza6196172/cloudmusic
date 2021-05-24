'use strict'

import { app, protocol, BrowserWindow,shell,Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
const { ipcMain } = require("electron");
const Store = require('electron-store');
const store = new Store();
let win;
let loginwin;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createLoginWindow() {
  // Create the browser window.
  loginwin = new BrowserWindow({
    width: 350,
    height: 530,
    frame: false,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await loginwin.loadURL(process.env.WEBPACK_DEV_SERVER_URL+'#/login')
    // loginwin.webContents.openDevTools({mode:'right'})
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    loginwin.loadURL('app://./index.html'+'#/login')
  }
}

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 670,
    frame: false,
    webPreferences: {
      
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })
  // const finalwin = new BrowserWindow({
  //   width: 800,
  //   height: 600,
  //   frame: false,
  //   webPreferences: {
      
  //     // Use pluginOptions.nodeIntegration, leave this alone
  //     // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
  //     nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
  //     contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
  //   }
  // })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools({mode:'bottom'})
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  Menu.setApplicationMenu(null);
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

ipcMain.on('login', (e, param) => {
  createLoginWindow()
})

ipcMain.on('outurl', (e, url) => {
    shell.openExternal(url);
});

ipcMain.on('closelogin' ,() => {
  loginwin.close()
});

ipcMain.on('loginsuccess',() => {
  win.webContents.send('loginsuccess')
})

 