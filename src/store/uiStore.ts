
import { create } from "zustand";

// Definición del tipo de estado + acciones
type UIState = {
  collapsed: boolean;
  changeCollapsed: () => void;      // acción que invierte el valor
  setCollapsed: (value: boolean) => void; // opcional: set explícito
};

// Store
export const useUIStore = create<UIState>((set, get) => ({
  // Estado inicial
  collapsed: true,

  // Acciones
  changeCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),

  setCollapsed: (value: boolean) => set({ collapsed: value }),
}));
