import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface HeroAbilitiesProps {
  abilities: string[];
}

export const HeroAbilities = ({ abilities }: HeroAbilitiesProps) => {
  return (
    <div className="abilities-list">
      <h3 className="text-lg font-semibold mb-2">Habilidades</h3>
      {abilities.map((ability, index) => (
        <motion.div
          key={ability}
          className="ability-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: 10 }}
        >
          <Zap size={16} className="text-yellow-500" />
          <span>{ability}</span>
        </motion.div>
      ))}
    </div>
  );
};