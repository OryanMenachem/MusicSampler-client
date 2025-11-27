import { createContext, useState } from "react";
import type { ColumnsContext } from "../types/types";

export const columnCountContext = createContext<ColumnsContext | null>(null);

export default function ColumnCountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialColumns = 32;
  const [columnCount, setColumnCount] = useState(initialColumns);
  return (
    <columnCountContext.Provider value={{ columnCount, setColumnCount }}>
      {children}
    </columnCountContext.Provider>
  );
}
