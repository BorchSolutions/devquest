import { useState } from 'react';
import { HeroProfile } from './components/HeroProfile';

// Datos de ejemplo del héroe
const heroData = {
  name: "Reactix",
  level: 10,
  class: "Frontend Warrior",
  stats: {
    strength: 80,
    intelligence: 95,
    agility: 85
  },
  abilities: ["Component Mastery", "Hook Casting", "State Management"],
  isOnline: true
};

function App() {
  const [hero, setHero] = useState(heroData);

  // Función para alternar el estado online/offline
  const toggleOnlineStatus = () => {
    setHero(prev => ({
      ...prev,
      isOnline: !prev.isOnline
    }));
  };

  return (
    <div className="app-container">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Mi Perfil de Héroe
        </h1>
        
        <HeroProfile {...hero} />

        <button
          onClick={toggleOnlineStatus}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Cambiar Estado
        </button>
      </div>
    </div>
  );
}

export default App;