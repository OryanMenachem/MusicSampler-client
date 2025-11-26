import { createContext, useState } from "react";
import type {RestartContext} from "../types/types";

export const restartContext = createContext<RestartContext | null>(null);

export default function RestartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [restart, setRestart] = useState(false);
  return (
    <restartContext.Provider value={{ restart, setRestart }}>
      {children}
    </restartContext.Provider>
  );
}

