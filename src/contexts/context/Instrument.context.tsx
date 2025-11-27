import { createContext, useReducer } from "react";
import type {
  Instrument,
  InstrumentSelectorContext,
  ProviderProps,
} from "../../types/types";
import { INSTRUMENTS } from "../../utils/utils";

const initialInstrumentSelectorState = {
  instrument: "PIANO" as Instrument,
};

function reducer(state: { instrument: Instrument }, action: any): any {
  switch (action.type) {
    case "CHANGE_INSTRUMENT":
      const currentIndex = INSTRUMENTS.indexOf(state.instrument);
      const nextIndex = (currentIndex + 1) % INSTRUMENTS.length;
      return { ...state, instrument: INSTRUMENTS[nextIndex] };
    default:
      throw new Error("Unknown action type");
  }
}


export const instrumentSelectorContext =
  createContext<InstrumentSelectorContext | null>(null);

export default function InstrumentSelectorProvider({
  children,
}: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialInstrumentSelectorState);
  return (
    <instrumentSelectorContext.Provider value={{ instrument: state.instrument, dispatch}}>
      {children}
    </instrumentSelectorContext.Provider>
  );
}
