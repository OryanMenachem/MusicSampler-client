import { createContext, useState } from "react";
import type { Instrument, InstrumentContext } from "../types/types";

export const instrumentContext = createContext<InstrumentContext | null>(null);

export default function InstrumentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [instrument, setInstrument] = useState<Instrument>("PIANO");
  return (
    <instrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </instrumentContext.Provider>
  );
}
