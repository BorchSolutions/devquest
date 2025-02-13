import { motion } from 'framer-motion';
import type { HeroStats as HeroStatsType } from '../types';

interface HeroStatsProps {
  stats: HeroStatsType;
}

export const HeroStats = ({ stats }: HeroStatsProps) => {
  return (
    <div className="stats-container">
      {Object.entries(stats).map(([stat, value]) => (
        <div key={stat} className="stat-item">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium capitalize">
              {stat}
            </span>
            <span className="text-sm font-medium">
              {value}
            </span>
          </div>
          <div className="stat-bar">
            <motion.div
              className="stat-value"
              initial={{ width: 0 }}
              animate={{ width: `${value}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                backgroundColor: getStatColor(stat)
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Función auxiliar para obtener colores según la estadística
const getStatColor = (stat: string): string => {
  const colors = {
    strength: '#ef4444',    // Rojo
    intelligence: '#3b82f6', // Azul
    agility: '#22c55e'      // Verde
  };
  
  return colors[stat as keyof typeof colors] || '#6366f1';
};