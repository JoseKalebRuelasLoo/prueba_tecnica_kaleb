-- CreateTable
CREATE TABLE "Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "imagen_principal" TEXT NOT NULL,
    "calificacion" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "oferta" BOOLEAN NOT NULL,
    "descuento" REAL NOT NULL,
    "sku" TEXT NOT NULL,
    "fecha_creacion" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Imagen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "productoId" INTEGER NOT NULL,
    CONSTRAINT "Imagen_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Producto_sku_key" ON "Producto"("sku");
