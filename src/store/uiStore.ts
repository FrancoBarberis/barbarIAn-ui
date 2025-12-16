
import { create } from "zustand";

// Definición del tipo de estado + acciones
type UIState = {
  collapsed: boolean;
  thinking: boolean;
  changeCollapsed: () => void;      // acción que invierte el valor
  setCollapsed: (value: boolean) => void; // opcional: set explícito
  setThinking: (value: boolean) => void;
};

// Store
export const useUIStore = create<UIState>((set, get) => ({
  // Estado inicial
  collapsed: true,
  thinking: false,

  // Acciones
  changeCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),

  setCollapsed: (value: boolean) => set({ collapsed: value }),
  setThinking: (value: boolean) => set({ thinking: value }),
}));
