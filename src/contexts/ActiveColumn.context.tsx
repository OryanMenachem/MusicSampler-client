import { createContext, useState } from "react";
import type { ActiveColumnContext, ActiveColumn } from "../types/types";

export const activeColumnContext = createContext<ActiveColumnContext | null>(
  null
);

export default function ActiveColumnProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeColumnIndex, setActiveColumnIndex] = useState<ActiveColumn>(0);
  return (
    <activeColumnContext.Provider
      value={{
        activeColumnIndex,
        setActiveColumnIndex,
      }}
    >
      {children}
    </activeColumnContext.Provider>
  );
}
