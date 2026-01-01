
export interface Monster {
  id: string;
  name: string;
  type: string;
  cr: string;
  ac: number;
  hp: string;
  alignment: string;
  description: string;
  playableRace?: boolean;
  tags: string[];
  stats: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  Caracteristicas: {
    name: string;
    desc: string;
  }[];
}

export const monsters: Monster[] = [
  {
    id: "1",
    name: "Humanos",
    type: "Humanoide",
    cr: "Variable",
    ac: 15,
    hp: "Variable",
    alignment: "Variable",
    playableRace: true,
    tags: ["Humanoide", "Conciencia Constante", "Raza Jugable", "Primera Edicion"],
    description: "Tambien conocidos como Los Hombres de las Praderas. Los humanos son seres simples. No son muy altos, no viven demasiado, no son especialmente poderosos y, sin embargo, han demostrado ser una amenaza. Los humanos tienen un don unico para la violencia y la creatividad. Se cree que solo hay dos cosas que podrian impulsar una sociedad humana: la necesidad y la guerra.",
    stats: { str: 14, dex: 18, con: 14, int: 12, wis: 14, cha: 8 },
    Caracteristicas: [
      { name: "Altura Promedio", desc: "entre 1.50 y 2.10 metros." },
      { name: "Estimado de Vida", desc: "100 Años." },
      { name: "Poderes Arcanos", desc: "Si." }

    ]
  },
  {
    id: "2",
    name: "Elfos",
    type: "Construct",
    cr: "9",
    ac: 18,
    hp: "16d10 + 64",
    alignment: "Unaligned",
    playableRace: true,
    tags: ["Guardián", "Arcano", "Sónico", "Constructo"],
    description: "A massive construct of resonating crystals, guarding ancient libraries of the arcane.",
    stats: { str: 22, dex: 9, con: 18, int: 3, wis: 10, cha: 1 },
    Caracteristicas: [
      { name: "Slam", desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 6) bludgeoning damage." },
      { name: "Resonance Blast", desc: "The golem emits a blast of sonic energy. Each creature within 20 feet must make a DC 16 Constitution saving throw, taking 36 (8d8) thunder damage on a failed save." }
    ]
  },
  {
    id: "3",
    name: "Enanos",
    type: "Undead (Cybernetic)",
    cr: "21",
    ac: 19,
    hp: "20d8 + 100",
    alignment: "Lawful Evil",
    playableRace: true,
    tags: ["No-Muerto", "Tecnología", "Hechicero", "Boss"],
    description: "An ancient wizard who uploaded their consciousness into a phylactery-mainframe, commanding legions of undead drones.",
    stats: { str: 10, dex: 16, con: 20, int: 24, wis: 16, cha: 18 },
    Caracteristicas: [
      { name: "Digital Rot", desc: "Ranged Spell Attack: +12 to hit, range 120 ft., one target. Hit: 28 (8d6) necrotic damage." },
      { name: "System Override", desc: "The lich targets one construct or machine within 60 feet. The target must succeed on a DC 20 Intelligence saving throw or be charmed by the lich for 1 minute." }
    ]
  },
  {
    id: "4",
    name: "Gigantes",
    type: "Humanoid (Playable Race)",
    cr: "1/8",
    ac: 12,
    hp: "4d8",
    alignment: "Chaotic Good",
    playableRace: true,
    tags: ["Luz", "Psiónico", "Espacial", "Carisma"],
    description: "Beings of pure bioluminescence, the Luminari are ancient interstellar travelers who can communicate through light patterns.",
    stats: { str: 10, dex: 14, con: 10, int: 13, wis: 15, cha: 16 },
    Caracteristicas: [
      { name: "Light Burst", desc: "Ranged Spell Attack: +4 to hit, range 60 ft., one target. Hit: 7 (1d10 + 2) radiant damage." }
    ]
  },
  {
    id: "5",
    name: "Gouna Canino",
    type: "Humanoid (Cyborg) (Playable Race)",
    cr: "1/4",
    ac: 14,
    hp: "6d8 + 2",
    alignment: "Lawful Neutral",
    playableRace: true,
    tags: ["Tecnología", "Cibernético", "Fuerza", "Fuego"],
    description: "Artificially enhanced beings with cybernetic implants. Synthesized through ancient bioengineering protocols.",
    stats: { str: 16, dex: 12, con: 14, int: 14, wis: 11, cha: 12 },
    Caracteristicas: [
      { name: "Plasma Cannon", desc: "Ranged Weapon Attack: +4 to hit, range 90 ft., one target. Hit: 10 (2d6 + 2) fire damage." }
    ]
  },
  {
    id: "6",
    name: "Gouna Felino",
    type: "Humanoid (Playable Race)",
    cr: "1/8",
    ac: 13,
    hp: "5d8 + 1",
    alignment: "Any",
    playableRace: true,
    tags: ["Sombra", "Espacio", "Versatil", "Misterioso"],
    description: "Mortals touched by the void, marked by shadow and starlight. They exist between worlds, caught in the fabric of the cosmos.",
    stats: { str: 12, dex: 15, con: 11, int: 12, wis: 16, cha: 14 },
    Caracteristicas: [
      { name: "Shadow Strike", desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 2) necrotic damage." }
    ]
  },
  {
  id: "7",  // Cambia el ID (debe ser único)
  name: "Gouna Leporido",
  type: "Humanoide",
  cr: "10",  // Challenge Rating
  ac: 16,    // Armor Class
  hp: "15d10 + 30",  // Hit Points
  alignment: "Neutral Evil",
  playableRace: true,  // true si es jugable, false si es enemigo
  tags: ["Fuego", "Volador", "Boss", "Magia"],  // Tags para filtrado (elige 2-5 tags relevantes)
  description: "Descripción de la criatura. Añade lore y contexto aquí.",
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  Caracteristicas: [
    { 
      name: "Ataque Principal", 
      desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 4) slashing damage." 
    },
    { 
      name: "Habilidad Especial", 
      desc: "Descripción de la habilidad especial. Puede ser un ataque a distancia, buff, etc."}
  ]
  },
  {
  id: "8",  // Cambia el ID (debe ser único)
  name: "Gouna Miomo",
  type: "Tipo (ej: Dragón, Demonio, Elemental)",
  cr: "10",  // Challenge Rating
  ac: 16,    // Armor Class
  hp: "15d10 + 30",  // Hit Points
  alignment: "Neutral Evil",
  playableRace: true,  // true si es jugable, false si es enemigo
  tags: ["Fuego", "Volador", "Boss", "Magia"],  // Tags para filtrado (elige 2-5 tags relevantes)
  description: "Descripción de la criatura. Añade lore y contexto aquí.",
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  Caracteristicas: [
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
  {
  id: "9",  // Cambia el ID (debe ser único)
  name: "Gouna Ovido",
  type: "Tipo (ej: Dragón, Demonio, Elemental)",
  cr: "10",  // Challenge Rating
  ac: 16,    // Armor Class
  hp: "15d10 + 30",  // Hit Points
  alignment: "Neutral Evil",
  playableRace: true,  // true si es jugable, false si es enemigo
  tags: ["Fuego", "Volador", "Boss", "Magia"],  // Tags para filtrado (elige 2-5 tags relevantes)
  description: "Descripción de la criatura. Añade lore y contexto aquí.",
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  Caracteristicas: [
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
  {
  id: "10",  // Cambia el ID (debe ser único)
  name: "Gouna Vulpino",
  type: "Tipo (ej: Dragón, Demonio, Elemental)",
  cr: "10",  // Challenge Rating
  ac: 16,    // Armor Class
  hp: "15d10 + 30",  // Hit Points
  alignment: "Neutral Evil",
  playableRace: true,  // true si es jugable, false si es enemigo
  tags: ["Fuego", "Volador", "Boss", "Magia"],  // Tags para filtrado (elige 2-5 tags relevantes)
  description: "Descripción de la criatura. Añade lore y contexto aquí.",
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  Caracteristicas: [
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
  {
  id: "11",  // Cambia el ID (debe ser único)
  name: "Gouna Equino",
  type: "Tipo (ej: Dragón, Demonio, Elemental)",
  cr: "10",  // Challenge Rating
  ac: 16,    // Armor Class
  hp: "15d10 + 30",  // Hit Points
  alignment: "Neutral Evil",
  playableRace: true,  // true si es jugable, false si es enemigo
  tags: ["Fuego", "Volador", "Boss", "Magia"],  // Tags para filtrado (elige 2-5 tags relevantes)
  description: "Descripción de la criatura. Añade lore y contexto aquí.",
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  Caracteristicas: [
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
  {
  id: "12",  // Cambia el ID (debe ser único)
  name: "Gouna Cervido",
  type: "Tipo (ej: Dragón, Demonio, Elemental)",
  cr: "10",  // Challenge Rating
  ac: 16,    // Armor Class
  hp: "15d10 + 30",  // Hit Points
  alignment: "Neutral Evil",
  playableRace: true,  // true si es jugable, false si es enemigo
  tags: ["Fuego", "Volador", "Boss", "Magia"],  // Tags para filtrado (elige 2-5 tags relevantes)
  description: "Descripción de la criatura. Añade lore y contexto aquí.",
  stats: { str: 18, dex: 12, con: 16, int: 10, wis: 14, cha: 8 },
  Caracteristicas: [
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
];

export interface Spell {
  id: string;
  name: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
  tags: string[];
}

export const spells: Spell[] = [
  {
    id: "1",
    name: "Arcane Hack",
    level: 2,
    school: "Transmutation",
    castingTime: "1 action",
    range: "Touch",
    components: "V, S, M (a copper wire)",
    duration: "Instantaneous",
    tags: ["Tecnología", "Utilidad", "Infiltración"],
    description: "You touch a non-magical lock or electronic device and overload its mechanism, opening it instantly."
  },
  {
    id: "2",
    name: "Neon Shield",
    level: 1,
    school: "Abjuration",
    castingTime: "1 reaction",
    range: "Self",
    components: "V, S",
    duration: "1 round",
    tags: ["Defensa", "Luz", "Reacción"],
    description: "A barrier of hard light appears to protect you. Until the start of your next turn, you have a +5 bonus to AC."
  }
];

export interface Location {
  id: string;
  name: string;
  type: string;
  region: string;
  description: string;
  population: string;
  government: string;
  tags: string[];
}

export const locations: Location[] = [
  {
    id: "1",
    name: "Neo-Arcadia",
    type: "Metropolis",
    region: "Core Systems",
    description: "A sprawling city-planet where magic and technology coexist. Neon spires pierce the smog clouds, and skyships dock at floating harbors.",
    population: "12 Billion",
    government: "Corporate Council",
    tags: ["Urbano", "Tecnología", "Magia", "Comercio"]
  },
  {
    id: "2",
    name: "The Whispering Wastes",
    type: "Wasteland",
    region: "Outer Rim",
    description: "A desert of purple sand where the wind carries the voices of the dead. Ancient ruins of the Precursors are buried here.",
    population: "Sparse (Nomadic Tribes)",
    government: "None (Anarchy)",
    tags: ["Desierto", "Ruinas", "Peligroso", "Misterioso"]
  },
  {
    id: "3",
    name: "Ironhold",
    type: "Fortress City",
    region: "Northern Mountains",
    description: "Carved into the side of a massive volcano, Ironhold is the center of dwarven industry and smithing.",
    population: "500,000",
    government: "Monarchy",
    tags: ["Fortaleza", "Volcán", "Industria", "Enanos"]
  }
];

export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "The Great Collapse",
    category: "History",
    summary: "An overview of the cataclysmic event that shattered the Old World.",
    content: "The Great Collapse began in the year 2099 of the Old Era, when the mana-reactors overloaded simultaneously across the globe...",
    date: "2025-12-01",
    tags: ["Catástrofe", "Historia Antigua", "Magia", "Tecnología"]
  },
  {
    id: "2",
    title: "The Technomancer's Guild",
    category: "Factions",
    summary: "A secret society of wizards who blend magic with ancient technology.",
    content: "Founded in the ruins of Neo-Tokyo, the Technomancers seek to recover the lost source code of the universe...",
    date: "2025-12-15",
    tags: ["Facción", "Magia", "Tecnología", "Secreto"]
  }
];
