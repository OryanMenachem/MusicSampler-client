import { createContext, useState } from "react";
import type { ProviderProps, ColumnCountContext } from "../../types/types";

export const columnCountContext = createContext<ColumnCountContext | null>(
  null
);

export default function ColumnCountProvider({
  children,
}: ProviderProps): React.JSX.Element {
  const initialColumnCount = 32;
  const [columnCount, setColumnCount] = useState(initialColumnCount);
  return (
    <columnCountContext.Provider value={{ columnCount, setColumnCount }}>
      {children}
    </columnCountContext.Provider>
  );
}
