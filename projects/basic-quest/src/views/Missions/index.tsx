import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const missions = [
  {
    id: 1,
    title: "Crear un Componente",
    difficulty: "Fácil",
    xp: 100,
    status: "available",
    description: "Aprende a crear tu primer componente React",
    path: "/missions/create-component"
  },
  {
    id: 2,
    title: "Manejo de Props",
    difficulty: "Fácil",
    xp: 150,
    status: "locked",
    description: "Domina el paso de propiedades entre componentes",
    path: "/missions/props-management"
  },
  {
    id: 3,
    title: "Estado Local",
    difficulty: "Medio",
    xp: 200,
    status: "locked",
    description: "Aprende a manejar estado en tus componentes",
    path: "/missions/local-state"
  }
];

export const Missions = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Misiones Disponibles</h1>
          <Link 
            to="/"
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Volver al Inicio
          </Link>
        </div>

        <div className="grid gap-6">
          {missions.map((mission) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: mission.id * 0.1 }}
              className={`bg-gray-800 rounded-xl p-6 ${
                mission.status === 'locked' ? 'opacity-50' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {mission.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{mission.description}</p>
                  <div className="flex gap-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {mission.difficulty}
                    </span>
                    <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                      {mission.xp} XP
                    </span>
                  </div>
                </div>
                {mission.status === 'available' ? (
                  <Link 
                    to={mission.path}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Comenzar
                  </Link>
                ) : (
                  <button 
                    className="px-6 py-3 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Bloqueado
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};