import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-8">
      <button
        className="px-4 py-2 mx-1 boton text rounded disabled:opacity-50 border"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span className="px-4 py-2 mx-1">Página {currentPage}</span>
      <button
        className="px-4 py-2 mx-1 boton text rounded disabled:opacity-50 border"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
}
