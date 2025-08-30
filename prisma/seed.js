const { PrismaClient } = require("@prisma/client");
const productos = require("../src/Data.json");

const prisma = new PrismaClient();


async function main() {
  for (const producto of productos) {
    await prisma.producto.create({
      data: {
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        categoria: producto.categoria,
        imagen_principal: producto.imagen_principal,
        calificacion: producto.calificacion,
        stock: producto.stock,
        oferta: producto.oferta,
        descuento: producto.descuento,
        sku: producto.sku,
        fecha_creacion: new Date(producto.fecha_creacion),
        activo: producto.activo,
        imagenes: {
          create: producto.imagenes.map((img) => ({
            url: img.url,
            orden: img.orden,
          })),
        },
      },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });