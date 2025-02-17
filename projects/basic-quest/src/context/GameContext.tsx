import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface GameState {
  xp: number;
  level: number;
  completedMissions: string[];
  unlockedMissions: string[];
  badges: string[];
}

type GameAction =
  | { type: 'COMPLETE_MISSION'; payload: { missionId: string; xp: number; badge?: string } }
  | { type: 'UNLOCK_MISSION'; payload: string }
  | { type: 'ADD_XP'; payload: number };

const initialState: GameState = {
  xp: 0,
  level: 1,
  completedMissions: [],
  unlockedMissions: ['create-component'],
  badges: [],
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'COMPLETE_MISSION':
      return {
        ...state,
        completedMissions: [...state.completedMissions, action.payload.missionId],
        xp: state.xp + action.payload.xp,
        badges: action.payload.badge 
          ? [...state.badges, action.payload.badge]
          : state.badges,
      };
    
    case 'UNLOCK_MISSION':
      return {
        ...state,
        unlockedMissions: [...state.unlockedMissions, action.payload],
      };

    case 'ADD_XP':
      return {
        ...state,
        xp: state.xp + action.payload,
      };

    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};