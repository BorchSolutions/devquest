import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Instructions } from './Instructions';
import { useGame } from '../../../context/GameContext';
import { Exercise } from './exercise';

export const CreateComponentMission = () => {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState(`// Tu código aquí
function MiPrimerComponente() {
  return (
    <div>
      
    </div>
  );
}`);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { dispatch } = useGame();

  const handleCompleteMission = () => {
    // Actualizar el estado global
    dispatch({
      type: 'COMPLETE_MISSION',
      payload: {
        missionId: 'create-component',
        xp: 100,
        badge: 'Component Creator'
      }
    });

    // Desbloquear la siguiente misión
    dispatch({
      type: 'UNLOCK_MISSION',
      payload: 'props-management'
    });

    // Mostrar una animación o mensaje de éxito
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed inset-0 flex items-center justify-center bg-black/50 z-50';
    successMessage.innerHTML = `
      <div class="bg-gray-800 p-8 rounded-xl shadow-xl text-center">
        <h2 class="text-2xl font-bold text-white mb-4">¡Misión Completada!</h2>
        <p class="text-gray-300 mb-4">Has ganado:</p>
        <ul class="text-gray-300 mb-6">
          <li>🏅 Insignia "Component Creator"</li>
          <li>⭐ 100 XP</li>
        </ul>
        <p class="text-blue-400 mb-6">¡Has desbloqueado "Manejo de Props"!</p>
      </div>
    `;
    document.body.appendChild(successMessage);

    // Redireccionar después de un momento
    setTimeout(() => {
      document.body.removeChild(successMessage);
      navigate('/missions');
    }, 3000);
  };

  const validateStep = (code: string): boolean => {
    // Validaciones básicas
    if (!code.includes('function MiPrimerComponente')) {
      setError('El componente debe llamarse MiPrimerComponente');
      return false;
    }

    if (!code.includes('return')) {
      setError('El componente debe tener un return');
      return false;
    }

    // Validaciones específicas por paso
    switch (step) {
      case 0:
        if (!code.includes('¡Hola, Mundo!')) {
          setError('El componente debe mostrar el texto "¡Hola, Mundo!"');
          return false;
        }
        break;
      case 1:
        if (!code.includes('className=')) {
          setError('Debes usar className para añadir estilos');
          return false;
        }
        if (!code.includes('bg-') || !code.includes('text-')) {
          setError('Añade clases de Tailwind para el fondo y el texto');
          return false;
        }
        break;
      case 2:
        // Validaciones para el paso final si las necesitas
        break;
    }

    setError(null);
    return true;
  };

  const handleCheckSolution = () => {
    if (validateStep(code)) {
      setStep(prev => prev + 1);
      setError(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Crear un Componente</h1>
          <Link 
            to="/missions"
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Volver a Misiones
          </Link>
        </div>

        {/* Progress */}
        <div className="w-full bg-gray-700 h-2 rounded-full mb-8">
          <motion.div 
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / 3) * 100}%` }}
          />
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500 text-white p-4 rounded-lg mb-6"
          >
            ❌ {error}
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-8">
          <Instructions step={step} />
          <Exercise 
            code={code} 
            setCode={setCode}
            onCheck={handleCheckSolution}
            step={step}
            error={error}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              setStep(prev => Math.max(0, prev - 1));
              setError(null);
            }}
            disabled={step === 0}
            className={`px-6 py-3 rounded-lg transition-colors ${
              step === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            Anterior
          </button>

          {step < 2 ? (
            <button
              onClick={handleCheckSolution}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Verificar Solución
            </button>
          ) : (
            <button
              onClick={handleCompleteMission}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Completar Misión
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};