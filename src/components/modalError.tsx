import React from "react";

interface ModalErrorProps {
  error: string | null;
  onClose: () => void;
}

// Componente modal para mostrar errores
const ModalError: React.FC<ModalErrorProps> = ({ error, onClose }) => {
  if (!error) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-bold text-red-600 mb-2">
          Ha ocurrido un error
        </h2>
        <p className="text-gray-800 dark:text-gray-100 mb-4">{error}</p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalError;
