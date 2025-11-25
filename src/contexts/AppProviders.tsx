import {
  NotesProvider,
  ColumnsProvider,
  ControlsPlayerProvider,
  InstrumentProvider,
  ActiveColumnProvider,
} from "./index";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ActiveColumnProvider>
      <InstrumentProvider>
        <ColumnsProvider>
          <ControlsPlayerProvider>
            <NotesProvider>{children}</NotesProvider>
          </ControlsPlayerProvider>
        </ColumnsProvider>
      </InstrumentProvider>
    </ActiveColumnProvider>
  );
}
