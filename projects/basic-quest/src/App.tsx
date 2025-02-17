import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomeQuest } from './components/WelcomeQuest';
import { Tutorial } from './views/Tutorial';
import { Lesson } from './views/Tutorial/Lesson';
import { Missions } from './views/Missions';
import { CreateComponentMission } from './views/Missions/CreateComponent';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeQuest />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/tutorial/lesson" element={<Lesson />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/missions/create-component" element={<CreateComponentMission />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;