import { createContext, useState } from "react";
import type {
  InstrumentContext,
  NotesContext,
  Instrument,
} from "../types/types";
import { useGetNotesContextValue } from "../hooks/hooks";

const notesContext = createContext<NotesContext | null>(null);

function NotesProvider({ children }: { children: React.ReactNode }) {
  const { notes, setNotes, toggleIsOn } = useGetNotesContextValue();
  return (
    <notesContext.Provider value={{ notes, setNotes, toggleIsOn }}>
      {children}
    </notesContext.Provider>
  );
}

const instrumentContext = createContext<InstrumentContext | null>(null);

function InstrumentProvider({ children }: { children: React.ReactNode }) {
  const [instrument, setInstrument] = useState<Instrument>("PIANO");
  return (
    <instrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </instrumentContext.Provider>
  );
}

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <InstrumentProvider>
      <NotesProvider>{children}</NotesProvider>
    </InstrumentProvider>
  );
}
export { notesContext, AppProviders, instrumentContext };
