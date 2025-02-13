import { HeroProfile } from './components/HeroProfile'

// Datos de ejemplo para el perfil
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
}

function App() {
  return (
    <div className="app-container">
      <h1>Mi Perfil de Héroe</h1>
      {/* 
        TODO: Implementa el componente HeroProfile 
        utilizando los datos proporcionados
      */}
    </div>
  )
}

export default App