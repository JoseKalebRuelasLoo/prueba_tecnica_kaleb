import React from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function ProductsPerPageSelector({ value, onChange }: Props) {
  return (
    <div>
      <label htmlFor="productsPerPage" className="mr-2 font-medium">
        Productos por página:
      </label>
      <select
        id="productsPerPage"
        className="border rounded px-2 py-1 navbar"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {[5, 10, 15, 20].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
