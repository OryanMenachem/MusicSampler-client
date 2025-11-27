import {
  NotesProvider,
  ColumnCountProvider,
  InstrumentProvider,
  VolumeProvider,
  TransportControlsProvider,
} from "./context/index";
import type { ProviderProps } from "../types/types";

export default function AppProviders({
  children,
}: ProviderProps): React.JSX.Element {
  return (
    <VolumeProvider>
      <TransportControlsProvider>
        <InstrumentProvider>
          <ColumnCountProvider>
            <NotesProvider>{children}</NotesProvider>
          </ColumnCountProvider>
        </InstrumentProvider>
      </TransportControlsProvider>
    </VolumeProvider>
  );
}
