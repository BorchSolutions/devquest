export interface HeroStats {
  strength: number;
  intelligence: number;
  agility: number;
}

export interface HeroProfileProps {
  name: string;
  level: number;
  class: string;
  stats: HeroStats;
  abilities: string[];
  isOnline?: boolean;
}