# Sistema de Catálogo de Productos

Este proyecto es una aplicación web desarrollada con [Next.js](https://nextjs.org), diseñada para gestionar y visualizar un catálogo de productos.

> **Despliegue:**  
> El sistema está desplegado y disponible en:  
> [https://prueba-tecnica-kaleb.vercel.app/](https://prueba-tecnica-kaleb.vercel.app/)

## Tecnologías utilizadas

- **Next.js**: Framework de React que permite renderizado híbrido (SSR/SSG), rutas automáticas y optimización de recursos.
- **React**: Biblioteca principal para construir interfaces de usuario reactivas y componibles.
- **TypeScript**: Añade tipado estático a JavaScript, mejorando la mantenibilidad y robustez del código.
- **Tailwind CSS**: Framework de utilidades CSS para un diseño rápido y responsivo.
- **Zustand**: Manejo de estado global simple y eficiente.
- **next-themes**: Permite alternar entre temas claro/oscuro fácilmente.
- **PostCSS**: Procesador de CSS para transformar estilos con plugins modernos.

Estas tecnologías fueron elegidas por su integración con Next.js, facilidad de uso, comunidad activa y soporte para buenas prácticas de desarrollo.

## Instrucciones de instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/JoseKalebRuelasLoo/prueba_tecnica_kaleb
   cd prueba_tecnica_kaleb
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Aplica las migraciones y ejecuta el seed de sqlite
   Esto creará la base de datos, aplicará el esquema y poblará los datos de ejemplo:

   ```sh
   npx prisma migrate reset
   ```

   - Responde `y` cuando pregunte si quieres resetear la base de datos.
   - Este comando también ejecuta el seed automáticamente.

4. Verifica los datos con Prisma Studio (opcional)
   ```sh
   npx prisma studio
   ```
   - Esto abrirá una interfaz web para visualizar los datos cargados.

---

### ⚠️ Notas importantes

- **El archivo de seed está en JavaScript (`prisma/seed.js`) y usa sintaxis CommonJS (`require`)** para asegurar compatibilidad con Prisma y evitar problemas de ejecución con módulos ESM/TypeScript.
- Si modificas el modelo en `schema.prisma`, recuerda correr:
  ```sh
  npx prisma migrate dev --name <nombre_migracion>
  ```
- Si tienes errores con el cliente Prisma, ejecuta:
  ```sh
  npx prisma generate
  ```
- El seed toma los datos de `src/Data.json`. Si cambias la estructura, ajusta también el seed.

## Variables de entorno necesarias

```
DATABASE_URL="file:./dev.db"
```

## Comandos para ejecutar el proyecto

- **Desarrollo**:
  ```sh
  npm run dev
  ```
- **Build (producción)**:
  ```sh
  npm run build
  ```
- **Iniciar en producción**:
  ```sh
  npm start
  ```
- **Linting**:
  ```sh
  npm run lint
  ```

## Estructura del proyecto explicada

```
├── public/                # Archivos estáticos (imágenes, SVGs, etc.)
├── src/
│   ├── app/               # Rutas y páginas principales de la app (Next.js App Router)
│   │   ├── api/           # Endpoints del backend (API Routes de Next.js)
│   │   │   ├── categories/route.ts
│   │   │   │   # GET /api/categories
│   │   │   │   # Devuelve todas las categorías únicas de productos.
│   │   │   ├── products/route.ts
│   │   │   │   # GET /api/products
│   │   │   │   # Devuelve todos los productos paginados (parámetros: page, limit).
│   │   │   ├── products/[id]/route.ts
│   │   │   │   # GET /api/products/[id]
│   │   │   │   # Devuelve el detalle de un producto por su id.
│   │   │   ├── products/categories/[categorie]/route.ts
│   │   │   │   # GET /api/products/categories/[categorie]
│   │   │   │   # Devuelve productos filtrados por categoría, soporta paginación (page, limit).
│   │   │   ├── products/search/route.ts
│   │   │   │   # GET /api/products/search?q=texto
│   │   │   │   # Busca productos por nombre, descripción o categoría, soporta paginación (page, limit).
│   │   ├── components/    # Componentes reutilizables de la interfaz
│   │   ├── hook/          # Custom hooks para lógica reutilizable
│   │   ├── lib/           # Funciones utilitarias y lógica de negocio
│   │   ├── store/         # Estado global (Zustand)
│   ├── Data.json          # Datos de ejemplo o mock
├── .next/                 # Archivos generados por Next.js (build)
├── package.json           # Dependencias y scripts del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── next.config.ts         # Configuración de Next.js
├── postcss.config.mjs     # Configuración de PostCSS
├── eslint.config.mjs      # Configuración de ESLint
└── README.md              # Documentación del proyecto
```

- **public/**: Contiene recursos estáticos accesibles desde la raíz del sitio.
- **src/app/**: Estructura principal de la aplicación, siguiendo el modelo de rutas de Next.js.
- **components/**: Componentes visuales reutilizables.
- **hook/**: Hooks personalizados para lógica compartida.
- **lib/**: Funciones auxiliares y utilidades.
- **store/**: Manejo de estado global.
- **Data.json**: Datos de ejemplo para pruebas o desarrollo.

---
