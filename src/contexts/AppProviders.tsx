import InstrumentProvider from "./Instrument.context";
import ColumnsProvider from "./Columns.context";
import NotesProvider from "./Notes.context";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <InstrumentProvider>
      <ColumnsProvider>
        <NotesProvider>{children}</NotesProvider>
      </ColumnsProvider>
    </InstrumentProvider>
  );
}
