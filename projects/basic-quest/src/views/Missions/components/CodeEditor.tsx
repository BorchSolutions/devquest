import Editor from "@monaco-editor/react";
import { motion } from 'framer-motion';

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  error: string | null;
}

export const CodeEditor = ({ code, setCode, error }: CodeEditorProps) => {
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="rounded-lg overflow-hidden h-[400px] relative"
    >
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 right-0 z-10 bg-red-500/90 text-white p-2 text-sm"
        >
          ❌ {error}
        </motion.div>
      )}
      
      <Editor
        height="100%"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          wrappingIndent: "indent",
          formatOnPaste: true,
          formatOnType: true,
        }}
        beforeMount={(monaco) => {
          monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.React,
            jsxFactory: 'React.createElement',
            reactNamespace: 'React',
            allowNonTsExtensions: true,
            allowJs: true,
            target: monaco.languages.typescript.ScriptTarget.Latest,
          });
        }}
      />
    </motion.div>
  );
};