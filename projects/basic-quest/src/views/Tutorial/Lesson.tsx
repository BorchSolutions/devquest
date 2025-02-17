import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const lessonContent = [
  {
    title: "Introducción a los Componentes",
    content: `Un componente en React es una pieza reutilizable de UI. Piensa en ellos como bloques de LEGO 
    que puedes combinar para construir interfaces más complejas.`,
    codeExample: `// Ejemplo de un componente básico
function Welcome() {
  return <h1>¡Hola, Aventurero!</h1>;
}`
  },
  {
    title: "JSX Básico",
    content: `JSX es una extensión de sintaxis para JavaScript que te permite escribir HTML dentro de tu código 
    JavaScript. Es la magia que hace que React sea tan intuitivo.`,
    codeExample: `// Ejemplo de JSX
function Profile() {
  const name = "Héroe";
  return (
    <div>
      <h1>Perfil de {name}</h1>
      <img src="hero.jpg" />
    </div>
  );
}`
  },
  {
    title: "Props Básicas",
    content: `Las props son la forma de pasar datos a los componentes. Son como los parámetros de una función,
    permitiendo que tus componentes sean más dinámicos y reutilizables.`,
    codeExample: `// Ejemplo de props
function HeroCard({ name, level }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Nivel: {level}</p>
    </div>
  );
}`
  }
];

export const Lesson = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const handleNext = () => {
    if (currentStep < lessonContent.length - 1) {
      setCurrentStep(prev => prev + 1);
      setShowCode(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setShowCode(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg"
      >
        {/* Progress Bar */}
        <div className="w-full bg-gray-700 h-2 rounded-full mb-8">
          <motion.div 
            className="bg-blue-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / lessonContent.length) * 100}%` }}
          />
        </div>

        {/* Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            {lessonContent[currentStep].title}
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            {lessonContent[currentStep].content}
          </p>

          <div className="relative">
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {showCode ? "Ocultar código" : "Ver código de ejemplo"}
            </button>
            
            {showCode && (
              <motion.pre
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-4 bg-gray-900 rounded-lg overflow-x-auto"
              >
                <code className="text-gray-300 font-mono">
                  {lessonContent[currentStep].codeExample}
                </code>
              </motion.pre>
            )}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg transition-colors ${
                currentStep === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              Anterior
            </button>
            <Link 
              to="/tutorial"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Volver al Tutorial
            </Link>
          </div>
          
          {currentStep < lessonContent.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Siguiente
            </button>
          ) : (
            <Link
              to="/missions"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Completar Tutorial
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};