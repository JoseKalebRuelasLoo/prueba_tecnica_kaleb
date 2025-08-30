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
3. Generar el cliente de prisma:
   ```sh
   npx prisma generate
   ```
4. (Opcional) Si necesitas actualizar el modelo Prisma desde la base de datos de Neon:
   ```sh
   npx prisma db pull
   ```

> **Nota:**  
> La base de datos y los datos ya están creados en Neon.  
> Solo necesitas correr migraciones si cambias el modelo o necesitas poblar una nueva base de datos.

---

### ⚠️ Notas importantes

- La base de datos está alojada en [Neon](https://neon.tech/).
- Si cambias el modelo en `schema.prisma`, recuerda correr:
  ```sh
  npx prisma migrate dev --name <nombre_migracion>
  ```
  y aplicar los cambios en Neon.
- Si necesitas poblar la base de datos desde cero, puedes usar el archivo SQL proporcionado en la documentación.

## Variables de entorno necesarias

```
DATABASE_URL="postgres://<usuario>:<contraseña>@<host>/<database>?sslmode=require"
```

## Scripts SQL de ejemplo

Los archivos SQL para crear y poblar la base de datos se encuentran en la carpeta [`/sql`](./sql).

- [`schema.sql`](./sql/schema.sql): Crea las tablas necesarias.
- [`seed.sql`](./sql/seed.sql): Inserta datos de ejemplo.

Puedes ejecutarlos desde el panel de tu proveedor de base de datos (por ejemplo, Neon) o usando una herramienta como `psql`.

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
│   │   │   ├── products/route.ts
│   │   │   ├── products/[id]/route.ts
│   │   │   ├── products/categories/[categorie]/route.ts
│   │   │   └── products/search/route.ts
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
