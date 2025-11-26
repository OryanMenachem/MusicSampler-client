import {
  NotesProvider,
  ColumnsProvider,
  ControlsPlayerProvider,
  InstrumentProvider,
  ActiveColumnProvider,
  RestartProvider,
} from "./index";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RestartProvider>
      <ActiveColumnProvider>
        <InstrumentProvider>
          <ColumnsProvider>
            <ControlsPlayerProvider>
              <NotesProvider>{children}</NotesProvider>
            </ControlsPlayerProvider>
          </ColumnsProvider>
        </InstrumentProvider>
      </ActiveColumnProvider>
    </RestartProvider>
  );
}
