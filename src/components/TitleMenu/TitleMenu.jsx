// para que funcione, é necessário instalar a api -> npm install @tauri-apps/api
import { appWindow } from '@tauri-apps/api/window';
import React from 'react';

export default function TitleMenu() {
  const handleMinimize = () => {
    appWindow.minimize();
  };

  const handleMaximize = () => {
    appWindow.isMaximized().then((isMaximized) => {
      if (isMaximized) {
        appWindow.unmaximize();
      } else {
        appWindow.maximize();
      }
    });
  };

  async function handleDragWindow() {
    // Apenas iniciar o arrasto se for o botão esquerdo do mouse
    if (e.button === 0) {
      appWindow.startDragging();
    }
  }

  return (
    <div onMouseDown={handleDragWindow}
      className="bg-gray-800 text-white flex justify-end px-4 py-2">
      <button
        onClick={handleMinimize}
        className="bg-gray-600 hover:bg-gray-700 rounded-full p-1 mx-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={handleMaximize}
        className="bg-gray-600 hover:bg-gray-700 rounded-full p-1 mx-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};