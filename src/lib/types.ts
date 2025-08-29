export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen_principal: string;
  imagenes: Array<{
    id: number;
    url: string;
    orden: number;
  }>;
  calificacion: number;
  stock: number;
  oferta: boolean;
  descuento: number;
  sku: string;
  fecha_creacion: Date;
  activo: boolean;
}
