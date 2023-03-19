import { app, BrowserWindow } from "electron";

function mainWin() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 450,
    minWidth: 400,
    minHeight: 450,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(`http://localhost:3000`);
}

app.whenReady().then(async () => {
  mainWin();
});

app.on("window-all-closed", () => {
  return;
});

app.on("activate", () => {
  mainWin();
});
