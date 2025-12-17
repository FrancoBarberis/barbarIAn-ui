
import { create } from "zustand";
import type { Chat, Message, Role } from "../types/messageType";
import { useUIStore } from "./uiStore";

type ChatState = {
  chats: Chat[];
  selectedChatId: string | null;
  messagesList: Message[];
  noMessages: boolean;

  selectChat: (chatId: string) => void;
  createChat: (title: string) => string;
  sendMessage: (text: string, role?: Role) => void;
  getSelectedChat: () => Chat | null;
  deleteChat: (chatId: string) => void;
  editChat: (chatId: string, newTitle: string) => void;
};

const initialChats: Chat[] = [];
const setThinking = useUIStore.getState().setThinking;

export const useChatStore = create<ChatState>()((set, get) => ({
  chats: initialChats,
  selectedChatId: initialChats[0]?.id ?? null,
  messagesList: [],
  noMessages: true, // ✅ al inicio, no hay mensajes visibles

  selectChat: (chatId) =>
    set((state) => {
      const chat = state.chats.find((c) => c.id === chatId);
      const newMessages = chat?.messages ?? [];
      return {
        selectedChatId: chatId,
        messagesList: newMessages,
        noMessages: newMessages.length === 0,
      };
    }),

  createChat: (title) => {
    const id = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
    const newChat: Chat = { id, title, messages: [] };
    set((state) => ({
      chats: [newChat, ...state.chats],
      selectedChatId: id,
      messagesList: [],
      noMessages: true, // nuevo chat -> sin mensajes
    }));
    return id;
  },

  sendMessage: (text, role = "user") => {
    const trimmed = text.trim();
    if (!trimmed) return;

    let chatId = get().selectedChatId;
    if (!chatId) {
      chatId =
        get().createChat(
          trimmed.length > 20 ? trimmed.slice(0, 20) + "..." : trimmed
        );
    }

    const newMsg: Message = {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      chatId,
      role,
      text: trimmed,
      timestamp: Date.now(),
    };

    setThinking(true);

    set((state) => {
      // Actualizar el chat con el mensaje
      const chats = state.chats.map((c) =>
        c.id === chatId ? { ...c, messages: [...c.messages, newMsg] } : c
      );

      // Si el mensaje es para el chat seleccionado, reflejarlo en la lista visible
      const isSelected = state.selectedChatId === chatId;
      const messagesList = isSelected
        ? [...state.messagesList, newMsg]
        : state.messagesList;

      return {
        chats,
        messagesList,
        noMessages: messagesList.length === 0,
      };
    });

    setTimeout(() => {
      setThinking(false);
    }, 2000);
  },

  getSelectedChat: () => {
    const { chats, selectedChatId } = get();
    return chats.find((c) => c.id === selectedChatId) ?? null;
  },

  deleteChat: (chatId) =>
    set((state) => {
      const updatedChats = state.chats.filter((c) => c.id !== chatId);

      const newSelectedId =
        state.selectedChatId === chatId
          ? updatedChats[0]?.id ?? null
          : state.selectedChatId;

      const newMessages =
        newSelectedId
          ? updatedChats.find((c) => c.id === newSelectedId)?.messages ?? []
          : [];

      return {
        chats: updatedChats,
        selectedChatId: newSelectedId,
        messagesList: newMessages,
        noMessages: newMessages.length === 0,
      };
    }),

  editChat: (chatId, newTitle) =>
    set((state) => ({
      chats: state.chats.map((c) =>
        c.id === chatId ? { ...c, title: newTitle } : c
      ),
    })),
}));
``
