import { motion } from 'framer-motion';
import { type HeroProfileProps } from './types';
import { HeroStats } from './components/HeroStats';
import { HeroAbilities } from './components/HeroAbilities';
import { StatusIndicator } from './components/StatusIndicator';

export const HeroProfile = ({
  name,
  level,
  class: heroClass,
  stats,
  abilities,
  isOnline = false
}: HeroProfileProps) => {
  return (
    <motion.div 
      className="hero-profile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header del héroe */}
      <div className="hero-header">
        <div>
          <h2 className="hero-name">{name}</h2>
          <motion.span 
            className="hero-level"
            whileHover={{ scale: 1.1 }}
          >
            Nivel {level}
          </motion.span>
        </div>
        <StatusIndicator isOnline={isOnline} />
      </div>

      {/* Clase del héroe */}
      <p className="hero-class">{heroClass}</p>

      {/* Estadísticas */}
      <HeroStats stats={stats} />

      {/* Habilidades */}
      <HeroAbilities abilities={abilities} />
    </motion.div>
  );
};