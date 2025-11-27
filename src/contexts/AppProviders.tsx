import {
  NotesProvider,
  ColumnCountProvider,
  InstrumentSelectorProvider,
  TransportControlsProvider,
} from "./context/index";
import type { ProviderProps } from "../types/types";

export default function AppProviders({
  children,
}: ProviderProps): React.JSX.Element {
  return (
    <TransportControlsProvider>
      <InstrumentSelectorProvider>
        <ColumnCountProvider>
          <NotesProvider>{children}</NotesProvider>
        </ColumnCountProvider>
      </InstrumentSelectorProvider>
    </TransportControlsProvider>
  );
}
