# 📦 Plantillas de Código - Omniverse Compendium

Este archivo contiene plantillas listas para copiar, pegar y editar. Úsalas para expandir tu compendio rápidamente.

---

## 🧟 Agregar una Nueva Criatura/Monstruo

**Archivo:** `src/data/mock.ts`

**Ubicación:** Dentro del array `monsters`, agrega esto:

```typescript
{
  id: "7",  // Cambia el ID (debe ser único)
  name: "Nombre de tu Criatura",
  type: "Tipo (ej: Dragón, Demonio, Elemental)",
  cr: "10",  // Challenge Rating
  ac: 16,    // Armor Class
  hp: "15d10 + 30",  // Hit Points
  alignment: "Neutral Evil",
  playableRace: false,  // true si es jugable, false si es enemigo
  tags: ["Fuego", "Volador", "Boss", "Magia"],  // Tags para filtrado (elige 2-5 tags relevantes)
  description: "Descripción de la criatura. Añade lore y contexto aquí.",
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  actions: [
    { 
      name: "Ataque Principal", 
      desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 4) slashing damage." 
    },
    { 
      name: "Habilidad Especial", 
      desc: "Descripción de la habilidad especial. Puede ser un ataque a distancia, buff, etc." 
    }
  ]
},
```

**Consejo:** Copia este bloque completo, pégalo al final del array `monsters` (antes del `]`), y edita los valores.

---

## 🔮 Agregar un Nuevo Hechizo/Habilidad

**Archivo:** `src/data/mock.ts`

**Ubicación:** Dentro del array `spells`, agrega esto:

```typescript
{
  id: "3",  // ID único
  name: "Nombre del Hechizo",
  level: 3,  // Nivel 0 = Cantrip, 1-9 = niveles normales
  school: "Evocation",  // Evocation, Abjuration, Transmutation, etc.
  castingTime: "1 action",  // "1 action", "1 bonus action", "1 minute"
  range: "60 feet",  // "Self", "Touch", "60 feet", etc.
  components: "V, S, M (material components)",
  duration: "Concentration, up to 1 minute",
  tags: ["Daño", "Fuego", "AoE"],  // Tags para filtrado
  description: "Descripción completa del efecto del hechizo. Sé específico con daño, alcance, y efectos."
},
```

---

## 🗺️ Agregar una Nueva Localización

**Archivo:** `src/data/mock.ts`

**Ubicación:** Dentro del array `locations`, agrega esto:

```typescript
{
  id: "4",  // ID único
  name: "Nombre del Lugar",
  type: "Ciudad/Mazmorra/Bosque/etc.",
  region: "Región Geográfica",
  description: "Descripción rica en detalles. ¿Qué hace especial este lugar? ¿Qué se puede encontrar aquí?",
  population: "100,000",  // "Deshabitado", "Pequeña", "Grande", número exacto
  government: "Democracia/Monarquía/Anarquía/etc.",
  tags: ["Urbano", "Comercio", "Seguro", "Puerto"]  // Tags para filtrado
},
```

---

## 📚 Agregar un Artículo de Lore (Historia/Facción)

**Archivo:** `src/data/mock.ts`

**Ubicación:** Dentro del array `articles`, agrega esto:

```typescript
{
  id: "3",  // ID único
  title: "Título del Artículo",
  category: "History/Factions/Events/Legends",
  summary: "Resumen corto de 1-2 líneas para la vista previa.",
  content: "Contenido completo del artículo. Puedes escribir varios párrafos aquí. Este es el cuerpo principal que se mostrará cuando el usuario abra el artículo.",
  date: "2025-12-31",  // Fecha de creación/última edición
  tags: ["Guerra", "Política", "Época Dorada"]  // Tags para filtrado
},
```

---

## 🎨 Agregar una Nueva Sección Completa

Si quieres agregar una sección completamente nueva (como "Artefactos" o "Vehículos"):

### Paso 1: Define la interfaz y los datos

**Archivo:** `src/data/mock.ts` (al final)

```typescript
// 1. Define la interfaz
export interface Artifact {
  id: string;
  name: string;
  rarity: string;
  type: string;
  description: string;
  powers: string[];
}

// 2. Crea el array de datos
export const artifacts: Artifact[] = [
  {
    id: "1",
    name: "Espada del Amanecer",
    rarity: "Legendaria",
    type: "Arma",
    description: "Una espada forjada con luz estelar.",
    powers: [
      "Brilla con luz brillante en un radio de 30 pies",
      "+3 a ataques y daño",
      "Daño extra 2d8 radiante contra no-muertos"
    ]
  }
];
```

### Paso 2: Crea la página

**Archivo:** `src/pages/Artifacts.tsx` (crear nuevo)

```typescript
import { AppLayout } from "@/components/AppLayout";
import { artifacts, Artifact } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

const Artifacts = () => {
  const [search, setSearch] = useState("");

  const filteredArtifacts = artifacts.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-purple-500" />
              Artefactos
            </h1>
            <p className="text-muted-foreground">Objetos mágicos y tecnología antigua.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar artefactos..." 
              className="pl-9 bg-secondary/50 border-white/10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArtifacts.map((artifact) => (
            <Card 
              key={artifact.id}
              className="hover:border-primary/50 hover:bg-secondary/40 transition-all border-white/10 bg-card/30"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{artifact.name}</CardTitle>
                  <Badge variant="outline" className="bg-secondary/50 border-white/10">
                    {artifact.rarity}
                  </Badge>
                </div>
                <CardDescription>{artifact.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{artifact.description}</p>
                <div className="space-y-1">
                  {artifact.powers.map((power, idx) => (
                    <div key={idx} className="text-xs text-primary/80">• {power}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Artifacts;
```

### Paso 3: Agrega la ruta

**Archivo:** `src/App.tsx`

```typescript
// Importa la página
import Artifacts from "./pages/Artifacts";

// Agrega la ruta dentro de <Routes>
<Route path="/artifacts" element={<Artifacts />} />
```

### Paso 4: Agrega al menú lateral

**Archivo:** `src/components/AppLayout.tsx`

```typescript
// Importa el icono
import { Sparkles } from "lucide-react";

// Agrega al array `items`
{
  title: "Artefactos",
  url: "/artifacts",
  icon: Sparkles,
},
```

---

## 🏷️ Sistema de Tags

Todas las entidades ahora soportan **tags** para búsqueda y filtrado fácil.

### Cómo Funcionan los Tags

Los tags son palabras clave que describen las características principales de cada entidad:
- **Criaturas**: "Fuego", "Volador", "Boss", "No-Muerto", etc.
- **Hechizos**: "Daño", "Curación", "Utilidad", "Control", etc.
- **Localizaciones**: "Urbano", "Peligroso", "Ruinas", "Comercio", etc.
- **Artículos**: "Guerra", "Facción", "Misterio", "Historia Antigua", etc.

### Mejores Prácticas

1. **2-5 tags por entidad** (no muchos, no pocos)
2. **Usa nombres consistentes** (siempre "Tecnología", no a veces "Tech")
3. **Sé descriptivo pero conciso** ("Espacial" en vez de "Relacionado con el Espacio")
4. **Piensa en cómo buscaría un usuario**

### Ejemplos de Tags Buenos

✅ **Buenos:**
- "Sombra", "Teletransporte", "Oscuridad"
- "Defensa", "Luz", "Reacción"
- "Urbano", "Tecnología", "Magia"

❌ **Evita:**
- Tags muy largos: "Criatura que vive en la oscuridad"
- Tags demasiado genéricos: "Cosa", "Entidad"
- Duplicados: "Fuego", "De Fuego", "Llamas" (elige uno)

---

## 🎨 Cambiar Colores del Tema

**Archivo:** `src/index.css`

Busca la sección `.dark` y cambia estos valores:

```css
.dark {
  --background: 222.2 84% 4.9%;  /* Color de fondo principal */
  --primary: 210 40% 98%;         /* Color primario (enlaces, highlights) */
  --secondary: 217.2 32.6% 17.5%; /* Color secundario (cards) */
}
```

**Generador de colores HSL:** https://www.w3schools.com/colors/colors_hsl.asp

---

## 🔧 Cambiar Iconos

Todos los iconos vienen de **lucide-react**. 

**Ver todos los iconos disponibles:** https://lucide.dev/icons/

**Ejemplo de cambio:**

```typescript
// Antes
import { Skull } from "lucide-react";

// Después
import { Dragon } from "lucide-react";  // O cualquier otro icono
```

---

## 💡 Consejos Rápidos

1. **IDs únicos:** Asegúrate de que cada entidad tenga un `id` único (no repitas números).

2. **Formato consistente:** Mantén el mismo estilo de comillas, comas, y sangrías para evitar errores.

3. **Guarda y recarga:** Después de editar `src/data/mock.ts`, guarda el archivo y la página se recargará automáticamente.

4. **Errores:** Si algo sale mal, abre la consola del navegador (F12) para ver el mensaje de error.

---

¿Necesitas más plantillas o ejemplos específicos? ¡Pídemelos! 🚀
