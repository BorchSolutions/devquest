import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './welcome-quest.css';

export const WelcomeQuest = () => {
  return (
    <div className="welcome-container">
      <motion.div 
        className="welcome-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="welcome-title">¡Bienvenido a DevQuest!</h1>
        
        <p className="welcome-description">
          Tu aventura en el mundo del desarrollo web está a punto de comenzar. 
          Aquí aprenderás los fundamentos de React y te convertirás en un 
          poderoso desarrollador.
        </p>

        <div className="quest-stats">
          <div className="stat-item">
            <span className="stat-label">Nivel Actual</span>
            <span className="stat-value">1</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Misiones Disponibles</span>
            <span className="stat-value">3</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">XP</span>
            <span className="stat-value">0/100</span>
          </div>
        </div>

        <div className="quest-actions">
          <Link 
            to="/tutorial" 
            className="quest-button primary"
          >
            Comenzar Tutorial
          </Link>
          <Link 
            to="/missions" 
            className="quest-button secondary"
          >
            Ver Misiones
          </Link>
        </div>
      </motion.div>
    </div>
  );
};