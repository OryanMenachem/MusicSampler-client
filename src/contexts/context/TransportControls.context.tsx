import { createContext, useReducer } from "react";
import type {
  ProviderProps,
  TransportControlsState,
  TransportControlsContext,
} from "../../types/types";

const initialTransportControlsState: TransportControlsState = {
  isPlaying: false,
  isLooping: false,
  restart: false,
  tempoBPM: 120,
  masterVolume: 0.8,
  currentPlayingColumnIndex: -1,
};

function transportControlsReducer(
  state: TransportControlsState,
  action: any
): TransportControlsState {
  switch (action.type) {
    case "TOGGLE_PLAY":
      return { ...state, isPlaying: !state.isPlaying };
    case "TOGGLE_LOOP":
      return {
        ...state,
        isLooping: !state.isLooping,
      };
    case "RESTART":
      return {
        ...state,
        isPlaying: false,
        restart: true,
        currentPlayingColumnIndex: -1,
      };
    case "RESET":
      return {
        ...state,
        isPlaying: false,
        isLooping: false,
        restart: false,
        currentPlayingColumnIndex: -1,
      };
    case "SET_ACTIVE_COLUMN":
      return {
        ...state,
        currentPlayingColumnIndex: action.payload,
      };
    case "SET_MASTER_VOLUME":
      return {
        ...state,
        masterVolume: action.payload,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const transportControlsContext =
  createContext<TransportControlsContext | null>(null);

export default function TransportControlsProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(
    transportControlsReducer,
    initialTransportControlsState
  );
  return (
    <transportControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </transportControlsContext.Provider>
  );
}
