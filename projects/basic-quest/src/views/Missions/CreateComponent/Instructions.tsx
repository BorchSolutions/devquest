import { motion } from 'framer-motion';

const instructions = [
  {
    title: "Crear un Componente Básico",
    content: `
      En este ejercicio, crearás tu primer componente React.
      
      Objetivos:
      1. Crear un componente llamado MiPrimerComponente
      2. El componente debe retornar un div con el texto "¡Hola, Mundo!"
      
      Tips:
      - Todo componente debe retornar un único elemento raíz
      - Usa JSX para escribir el HTML
      - El nombre del componente debe comenzar con mayúscula
    `,
    example: `
      function Ejemplo() {
        return (
          <div>
            Contenido del componente
          </div>
        );
      }
    `
  },
  {
    title: "Añadir Estilos",
    content: `
      Ahora añadiremos algunos estilos básicos a nuestro componente.
      
      Objetivos:
      1. Añade una clase CSS al div
      2. Centra el texto
      3. Añade un color de fondo
      
      Tips:
      - En JSX usamos className en lugar de class
      - Puedes usar las clases de Tailwind directamente
      - Mantén los estilos simples por ahora
    `,
    example: `
      function EjemploConEstilos() {
        return (
          <div className="bg-blue-500 p-4 text-white">
            Texto estilizado
          </div>
        );
      }
    `
  },
  {
    title: "Completado",
    content: `
      ¡Felicitaciones! Has completado tu primera misión.
      
      Has aprendido:
      - Cómo crear un componente funcional
      - La sintaxis básica de JSX
      - Cómo añadir estilos usando className
      
      Siguiente paso:
      - Desbloquearás la misión "Manejo de Props"
      - Ganarás 100 XP
      - Obtendrás la insignia "Component Creator"
    `,
    example: ""
  }
];

interface InstructionsProps {
  step: number;
}

export const Instructions = ({ step }: InstructionsProps) => {
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800 rounded-xl p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold text-white">
        {instructions[step].title}
      </h2>
      
      <div className="prose prose-invert">
        <pre className="whitespace-pre-wrap font-sans text-gray-300">
          {instructions[step].content}
        </pre>
      </div>

      {instructions[step].example && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white mb-2">
            Ejemplo:
          </h3>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code className="text-gray-300 font-mono">
              {instructions[step].example}
            </code>
          </pre>
        </div>
      )}
    </motion.div>
  );
};