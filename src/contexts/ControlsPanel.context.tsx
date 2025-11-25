import { createContext, useRef } from "react";

export const controlsPanelContext = createContext<null>(null);

export default function ControlsPanelProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <controlsPanelContext.Provider value={null}>
      {children}
    </controlsPanelContext.Provider>
  );
}
