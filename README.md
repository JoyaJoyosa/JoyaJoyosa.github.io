# JoyaJoyosa.github.io

# 🌌 Omniverse Compendium

Una aplicación web moderna para catalogar y gestionar universos de ficción. Inspirada en herramientas como 5e Tools, con una interfaz oscura y elegante.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Características

- 🗺️ **Atlas**: Gestión de localizaciones y geografía
- 🧟 **Bestiary**: Catálogo de criaturas y razas jugables
- 🔮 **Grimoire**: Biblioteca de hechizos y habilidades
- 📚 **Archives**: Artículos de historia y facciones
- 🏷️ **Sistema de Tags**: Filtrado avanzado por etiquetas
- 🔍 **Búsqueda Global**: Encuentra cualquier entidad rápidamente
- 📱 **Responsive**: Funciona en desktop y móvil

## 🚀 Instalación Local

### Requisitos Previos

Asegúrate de tener instalado:
- **Node.js** v18 o superior ([Descargar aquí](https://nodejs.org/))
- **npm** o **bun** (viene con Node.js)

### Paso 1: Descargar el Proyecto

Descarga todos los archivos del proyecto a una carpeta en tu PC.

### Paso 2: Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

O si usas bun:

```bash
bun install
```

Esto instalará todas las dependencias necesarias (React, Tailwind, etc.).

### Paso 3: Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

O con bun:

```bash
bun run dev
```

### Paso 4: Abrir en el Navegador

El servidor se iniciará automáticamente. Abre tu navegador en:

```
http://localhost:5173
```

¡Listo! La aplicación debería estar funcionando.

## 📁 Estructura del Proyecto

```
omniverse-compendium/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes de UI (shadcn)
│   │   ├── AppLayout.tsx
│   │   └── TagFilter.tsx
│   ├── data/
│   │   └── mock.ts      # ⭐ EDITA ESTE ARCHIVO para agregar contenido
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Index.tsx
│   │   ├── Bestiary.tsx
│   │   ├── Grimoire.tsx
│   │   ├── Atlas.tsx
│   │   └── Archives.tsx
│   ├── App.tsx
│   └── main.tsx
├── PLANTILLAS.md        # ⭐ GUÍA para agregar contenido fácilmente
├── package.json
└── README.md
```

## ✏️ Editar Contenido

### Opción 1: Usando las Plantillas (Recomendado)

1. Abre el archivo **`PLANTILLAS.md`**
2. Encuentra la plantilla que necesitas (criatura, hechizo, localización, etc.)
3. Copia el código
4. Pégalo en **`src/data/mock.ts`** en la sección correspondiente
5. Edita los valores
6. ¡Guarda y recarga el navegador!

### Opción 2: Edición Directa

Edita directamente el archivo `src/data/mock.ts`:

```typescript
// Ejemplo: Agregar una nueva criatura
export const monsters: Monster[] = [
  // ... criaturas existentes ...
  {
    id: "7",
    name: "Mi Nueva Criatura",
    type: "Dragón",
    cr: "15",
    ac: 20,
    hp: "20d12 + 100",
    alignment: "Neutral",
    playableRace: false,
    tags: ["Fuego", "Volador", "Legendario"],
    description: "Una descripción épica...",
    stats: { str: 24, dex: 10, con: 20, int: 16, wis: 13, cha: 19 },
    Caracteristicas: [
      { name: "Aliento de Fuego", desc: "..." }
    ]
  }
];
```

Los cambios se reflejan **automáticamente** en el navegador (hot reload).

## 🎨 Personalización

### Cambiar Colores

Edita `src/index.css` en la sección `.dark`:

```css
.dark {
  --background: 222.2 84% 4.9%;     /* Fondo principal */
  --primary: 210 40% 98%;            /* Color de acentos */
  --secondary: 217.2 32.6% 17.5%;   /* Color secundario */
}
```

### Cambiar Iconos

Todos los iconos son de [Lucide React](https://lucide.dev/icons/). Para cambiar:

```typescript
import { Dragon } from "lucide-react";  // Cambia el icono
```

## 🏗️ Compilar para Producción

Para crear una versión optimizada:

```bash
npm run build
```

Esto generará una carpeta `dist/` con archivos estáticos que puedes:
- Subir a un servidor web
- Hostear en Netlify/Vercel/GitHub Pages
- Servir con cualquier servidor HTTP

### Previsualizar Build de Producción

```bash
npm run preview
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos
- **Vite** - Build tool ultra-rápido
- **React Router** - Navegación

## 📝 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview

# Linter
npm run lint
```

## 🐛 Solución de Problemas

### El servidor no inicia

```bash
# Elimina node_modules y reinstala
rm -rf node_modules
npm install
npm run dev
```

### Los cambios no se reflejan

- Asegúrate de guardar el archivo
- Recarga el navegador manualmente (Ctrl+R)
- Revisa la consola del navegador (F12) para errores

### Error de TypeScript

- Verifica que todos los campos requeridos estén completos
- Asegúrate de que los IDs sean únicos
- Revisa que las comas estén bien colocadas

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto para tus propios universos de ficción.

## 🙏 Créditos

Construido con ❤️ por [devlo.ai](https://devlo.ai)

---

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

**¿Necesitas ayuda?** Revisa `PLANTILLAS.md` para guías detalladas de edición.
