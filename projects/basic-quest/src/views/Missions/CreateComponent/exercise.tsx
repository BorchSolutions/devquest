import { motion } from 'framer-motion';
import { CodeEditor } from '../components/CodeEditor';
import { Preview } from './components/Preview';

interface ExerciseProps {
  code: string;
  setCode: (code: string) => void;
  onCheck: () => void;
  step: number;
  error: string | null;
}

export const Exercise = ({ code, setCode, onCheck, error }: ExerciseProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-800 rounded-xl overflow-hidden"
    >
      {/* Editor */}
      <div className="p-4 bg-gray-900">
        <CodeEditor 
          code={code} 
          setCode={setCode}
          error={error}
        />
      </div>

      {/* Preview */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">Vista Previa</h3>
          <button
            onClick={onCheck}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Verificar Solución
          </button>
        </div>
        
        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="bg-gray-800 p-4 rounded">
            <Preview code={code} />
          </div>
          {/* Código debajo de la vista previa */}
          <div className="mt-4 border-t border-gray-700 pt-4">
            <p className="text-gray-400 text-sm mb-2">Código generado:</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {code}
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
};