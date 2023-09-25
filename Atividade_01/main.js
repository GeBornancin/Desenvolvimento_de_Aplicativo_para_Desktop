const { app, BrowserWindow } = require("electron");

//JANELA PRINCIPAL
var mainWindow = null;
async function createWindow(){
   
    mainWindow = new BrowserWindow({});
        

    mainWindow.maximize()
   await mainWindow.loadFile('src/pages/portfolio/index.html');
}

//Quando estiver pronto
app.whenReady().then(createWindow);