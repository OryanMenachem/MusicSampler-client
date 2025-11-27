import { useContext } from "react";
import {
  notesContext,
  instrumentContext,
  columnCountContext,
  transportControlsContext,
} from "../contexts/context/index";
import type { Contexs, ContextName } from "../types/types";

export default function useGetContext(contextName: ContextName): Contexs {
  const contextsMap: Record<ContextName, Contexs | null> = {
    instrumentContext: useContext(instrumentContext),
    columnCountContext: useContext(columnCountContext),
    notesContext: useContext(notesContext),
    transportControlsContext: useContext(transportControlsContext),
  };
  const context = contextsMap[contextName];
  if (!context) {
    throw Error(`${contextName} is null`);
  }
  return context;
}
