import { useContext } from "react";
import {
  notesContext,
  instrumentContext,
  columnsContext,
  controlsPlayerContext,
  activeColumnContext,
} from "../contexts/index";
import type { Contexs, ContextName } from "../types/types";

export default function useGetContext(contextName: ContextName): Contexs {
  const contextsMap: Record<ContextName, Contexs | null> = {
    instrumentContext: useContext(instrumentContext),
    columnsContext: useContext(columnsContext),
    notesContext: useContext(notesContext),
    controlsPlayerContext: useContext(controlsPlayerContext),
    activeColumnContext: useContext(activeColumnContext),
  };
  const context = contextsMap[contextName];
  if (!context) {
    throw Error(`${contextName} is null`);
  }
  return context;
}
