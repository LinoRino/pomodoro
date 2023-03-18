global.require = require;
global.__dirname = __dirname;
const { exec } = require("child_process");
const { app, BrowserWindow } = require("electron");

// import("./dist/server.js");

app.on("ready", async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 450,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      enableRemoteModule: true,
      enableRemoteFonts: true,
      enableRemoteAutofill: true,
      enableRemoteFileSystem: true,
      enablePrefetchFonts: true,
      enableLazy: true,
      enableLazyCompilation: true,
      enableLazyEagerCompilation: true,
    },
  });
  mainWindow.loadURL(`http://localhost:3000`);
});
