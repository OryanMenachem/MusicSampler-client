import { createContext, useState } from "react";
import type { ColumnsContext } from "../types/types";

export const columnsContext = createContext<ColumnsContext | null>(null);

export default function ColumnsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialColumns = 32;
  const [columns, setColumns] = useState(initialColumns);
  return (
    <columnsContext.Provider
      value={{ columnCount: columns, setColumnCount: setColumns }}
    >
      {children}
    </columnsContext.Provider>
  );
}
