import React, { useEffect, useState } from 'react';
import { transform } from '@babel/standalone';

interface PreviewProps {
  code: string;
}

type ComponentType = React.ComponentType<any>;

export const Preview: React.FC<PreviewProps> = ({ code }) => {
  const [component, setComponent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const compileComponent = async () => {
      try {
        // Transformar el código JSX a JavaScript
        const transformedCode = transform(code, {
          presets: ['react'],
          filename: 'component.tsx', // Ayuda con el source mapping
        }).code;

        // Crear una función que devuelva el componente
        const createComponent = new Function(
          'React',
          `${transformedCode}
          return MiPrimerComponente;`
        ) as (r: typeof React) => ComponentType;

        // Crear el componente
        const Component = createComponent(React);
        setComponent(() => Component);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al renderizar el componente');
        setComponent(null);
      }
    };

    compileComponent();
  }, [code]);

  // Componente de error
  if (error) {
    return (
      <div className="text-red-400 p-2 rounded bg-red-900/20">
        <p className="font-semibold mb-1">Error de compilación:</p>
        <pre className="text-sm whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  // Componente de carga/espera
  if (!component) {
    return (
      <div className="text-gray-400 p-4 text-center">
        Esperando código válido...
      </div>
    );
  }

  // Renderizar el componente con manejo de errores
  try {
    const Component = component;
    return (
      <div className="preview-container">
        <Component />
      </div>
    );
  } catch (err) {
    return (
      <div className="text-red-400 p-2 rounded bg-red-900/20">
        <p className="font-semibold mb-1">Error de renderizado:</p>
        <pre className="text-sm whitespace-pre-wrap">
          {err instanceof Error ? err.message : 'Error desconocido'}
        </pre>
      </div>
    );
  }
};