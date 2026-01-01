# 📦 Instrucciones para Descargar y Ejecutar Localmente

## Método 1: Descarga desde el Panel de Código (Recomendado)

1. **En devlo.ai**, ve a la pestaña **"Code"** (Código) en el panel derecho
2. Haz clic en el botón de **descarga** o **export** 
3. Se descargará un archivo ZIP con todo el proyecto
4. Descomprime el archivo en tu PC

## Método 2: Descarga Manual de Archivos

Si no ves opción de descarga, puedes copiar manualmente los archivos importantes:

### Archivos Esenciales (en orden de prioridad):

1. **`package.json`** - Dependencias del proyecto
2. **`src/data/mock.ts`** - Tu contenido (criaturas, hechizos, etc.)
3. **`src/pages/*.tsx`** - Todas las páginas
4. **`src/components/**`** - Todos los componentes
5. **`index.html`** - Archivo principal HTML
6. **`vite.config.ts`** - Configuración de Vite
7. **`tailwind.config.ts`** - Configuración de Tailwind
8. **`tsconfig.json`** - Configuración de TypeScript
9. **`PLANTILLAS.md`** - Guía de edición

### Estructura de Carpetas a Crear:

```
mi-compendium/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── AppLayout.tsx
│   │   └── TagFilter.tsx
│   ├── data/
│   │   └── mock.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── Bestiary.tsx
│   │   ├── Grimoire.tsx
│   │   ├── Atlas.tsx
│   │   ├── Archives.tsx
│   │   ├── Settings.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── hooks/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── App.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── PLANTILLAS.md
└── README.md
```

## Una Vez Descargado:

### 1. Instalar Node.js (si no lo tienes)

Descarga e instala desde: https://nodejs.org/
- Elige la versión **LTS** (Long Term Support)
- En Windows: ejecuta el instalador
- En Mac: usa el instalador .pkg
- En Linux: `sudo apt install nodejs npm`

Verifica la instalación:
```bash
node --version
npm --version
```

### 2. Abrir Terminal en la Carpeta del Proyecto

**Windows:**
- Navega a la carpeta del proyecto en el Explorador
- Escribe `cmd` en la barra de direcciones
- Presiona Enter

**Mac/Linux:**
- Abre Terminal
- Navega: `cd /ruta/a/tu/proyecto`

### 3. Instalar Dependencias

```bash
npm install
```

Esto descargará todas las librerías necesarias (puede tomar 1-2 minutos).

### 4. Iniciar el Proyecto

```bash
npm run dev
```

### 5. Abrir en el Navegador

Abre tu navegador en: **http://localhost:5173**

## 🎉 ¡Listo!

Tu Omniverse Compendium ahora está corriendo localmente. 

### Próximos Pasos:

1. **Editar contenido**: Abre `src/data/mock.ts` con cualquier editor de texto
2. **Usar plantillas**: Lee `PLANTILLAS.md` para copiar/pegar fácilmente
3. **Personalizar**: Cambia colores, iconos, etc.

### Editores de Código Recomendados:

- **VS Code** (Gratis, recomendado): https://code.visualstudio.com/
- **Sublime Text**: https://www.sublimetext.com/
- **Notepad++**: https://notepad-plus-plus.org/

## 🆘 Ayuda

Si tienes problemas:
1. Asegúrate de tener Node.js v18+
2. Elimina `node_modules` y ejecuta `npm install` de nuevo
3. Revisa la consola del navegador (F12) para ver errores
4. Consulta el `README.md` completo

---

**Nota**: El proyecto NO requiere base de datos ni configuración adicional. Todo está listo para usar.
