import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Tutorial = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Tutorial Básico</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">Lección 1: Primeros Pasos</h2>
            <p>Bienvenido a tu primera lección. Aquí aprenderás los conceptos básicos de React.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-blue-400 mb-3">Objetivos</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Entender los componentes de React</li>
              <li>Aprender sobre JSX</li>
              <li>Manejar props básicas</li>
            </ul>
          </section>

          <div className="pt-6">
            <div className="flex justify-between">
              <Link 
                to="/"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Volver al Inicio
              </Link>
              <Link 
                to="/tutorial/lesson"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Comenzar Lección
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};