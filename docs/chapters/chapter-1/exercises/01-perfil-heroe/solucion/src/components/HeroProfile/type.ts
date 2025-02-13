// Interfaz para las estadísticas del héroe
export interface HeroStats {
  strength: number;    // Fuerza del héroe (0-100)
  intelligence: number; // Inteligencia del héroe (0-100)
  agility: number;     // Agilidad del héroe (0-100)
}

// Interfaz principal para las props del componente HeroProfile
export interface HeroProfileProps {
  name: string;           // Nombre del héroe
  level: number;         // Nivel actual del héroe
  class: string;         // Clase o tipo de héroe
  stats: HeroStats;      // Estadísticas del héroe
  abilities: string[];   // Lista de habilidades del héroe
  isOnline?: boolean;    // Estado de conexión del héroe (opcional)
}

// Tipo para los colores de las estadísticas
export type StatColor = {
  [K in keyof HeroStats]: string;
};

// Interfaz para los eventos del componente
export interface HeroProfileEvents {
  onLevelUp?: () => void;          // Evento cuando el héroe sube de nivel
  onAbilityClick?: (ability: string) => void; // Evento al hacer click en una habilidad
  onStatusChange?: (isOnline: boolean) => void; // Evento al cambiar el estado online/offline
}