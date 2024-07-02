import { appWindow } from '@tauri-apps/api/window'; // para que funcione, é necessário instalar a api -> npm install @tauri-apps/api

import { Minus, Square, X } from "@phosphor-icons/react";

export default function TitleMenu() {
  const handleDragWindow = () => {
    appWindow.startDragging();
  };

  const handleMinimize = () => {
    appWindow.minimize();
  };

  const handleMaximize = async () => {
    await appWindow.toggleMaximize();

  };

  const handleClose = () => {
    appWindow.close();
  };

  const buttonClass = "hover:bg-gray-700 text-gray-400 hover:text-white py-2 px-3 transition-colors duration-200";

  return (
    <div
      className="bg-slate-600 flex justify-end">

      <div
        className="flex w-full"
        onMouseDown={handleDragWindow}
      >
        <h1 className='flex select-none items-center ps-3'>Tauri Study</h1>
      </div>
      <button
        onClick={handleMinimize}
        className={buttonClass}
      >
        <Minus size={12} />
      </button>
      <button
        onClick={handleMaximize}
        className={buttonClass}
      >
        <Square />
      </button>
      <button
        onClick={handleClose}
        className="hover:bg-red-600 text-gray-400 hover:text-white py-2 px-3 transition-colors duration-200"
      >
        <X />
      </button>
    </div>
  );
};