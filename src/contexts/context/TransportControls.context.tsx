import { createContext, useReducer } from "react";
import type { ProviderProps } from "../../types/types";

type IsPlaying = boolean;
type IsLooping = boolean;
type Restart = boolean;
type ActiveColumnIndex = number;

export interface TransportControlsState {
  isPlaying: IsPlaying;
  isLooping: IsLooping;
  restart: Restart;
  activeColumnIndex: ActiveColumnIndex;
}
export interface TransportControlsContext {
  state: TransportControlsState;
  dispatch: React.Dispatch<any>;
}

const initialTransportControlsState: TransportControlsState = {
  isPlaying: false,
  isLooping: false,
  restart: false,
  activeColumnIndex: 0,
};

function reducer(
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
    case "SET_ACTIVE_COLUMN":
      return { ...state, activeColumnIndex: action.payload };
    case "RESTART":
      return {
        ...state,
        isPlaying: false,
        restart: true,
        activeColumnIndex: 0,
      };
    case "RESET":
      return {
        ...state,
        isPlaying: false,
        isLooping: false,
        restart: false,
        activeColumnIndex: 0,
      };
    default:
      throw new Error("Unknown action type");
  }
}

export const transportControlsContext =
  createContext<TransportControlsContext | null>(null);

export default function TransportControlsProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialTransportControlsState);
  return (
    <transportControlsContext.Provider value={{ state, dispatch }}>
      {children}
    </transportControlsContext.Provider>
  );
}
