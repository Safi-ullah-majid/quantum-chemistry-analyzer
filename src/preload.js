const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  onFilesSelected: (callback) => {
    ipcRenderer.on('files-selected', (event, filePaths) => {
      callback(filePaths);
    });
  }
});
