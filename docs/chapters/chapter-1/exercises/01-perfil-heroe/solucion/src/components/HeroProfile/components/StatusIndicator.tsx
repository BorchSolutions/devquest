import { motion } from 'framer-motion';

interface StatusIndicatorProps {
  isOnline: boolean;
}

export const StatusIndicator = ({ isOnline }: StatusIndicatorProps) => {
  return (
    <div className="status-indicator">
      <motion.div
        className={`h-3 w-3 rounded-full ${
          isOnline ? 'bg-green-500' : 'bg-gray-400'
        }`}
        animate={{
          scale: isOnline ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <span className={`ml-2 text-sm ${
        isOnline ? 'text-green-500' : 'text-gray-400'
      }`}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};