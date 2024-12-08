import { create } from "zustand";

export const sessions = [
    { name: "home", value: "Trang chủ" },
    { name: "context", value: "Bối cảnh lịch sử" },
    { name: "attacks", value: "Các đợt tấn công" },
    { name: "method", value: "Phương châm tác chiến" },
    { name: "summary", value: "Tổng kết" },
    { name: "hero", value: "Lãnh đạo" },
    { name: "question", value: "Hỏi đáp" },
];

const initialIsBeginning = [true, true, true, true, true, true, true];
const initialIsEnd = [true, true, true, true, true, true, true];

// Helper function to get the index of a session name
const getIndexOfSession = (session: string) => {
    return sessions.findIndex((s) => s.name === session);
};

interface SessionState {
    index: number;
    isEnd: boolean[];
    isBeginning: boolean[];
    transiting: boolean;
    sliding: boolean;
    setTransiting: (value: boolean) => void;
    setSliding: (value: boolean) => void;
    setIndex: (value: number) => void;
    getSession: () => string;
    setSession: (value: string) => void;
    setIsEnd: (index: number, value: boolean) => void;
    setIsBeginning: (index: number, value: boolean) => void;
    getIsEnd: (index: number) => boolean;
    getIsBeginning: (index: number) => boolean;
    onNextSession: () => boolean;
    onPrevSession: () => boolean;
}

const useSessionTransitionState = create<SessionState>((set, get) => ({
    index: 0,
    isEnd: initialIsEnd,
    isBeginning: initialIsBeginning,
    transiting: false,
    sliding: false,

    setIndex: (value: number) => {
        set({ index: value });
    },

    setTransiting: (value: boolean) => set({ transiting: value }),
    setSliding: (value: boolean) => set({ sliding: value }),

    setSession: (value: string) => {
        const newIndex = getIndexOfSession(value);
        if (newIndex !== -1) {
            set({ index: newIndex });
        }
    },

    getSession: () => {
        const { index } = get();
        return sessions[index].name;
    },

    setIsEnd: (index: number, value: boolean) => {
        set((state) => {
            const updatedIsEnd = [...state.isEnd];
            updatedIsEnd[index] = value;
            return { isEnd: updatedIsEnd };
        });
    },

    setIsBeginning: (index: number, value: boolean) => {
        set((state) => {
            const updatedIsBeginning = [...state.isBeginning];
            updatedIsBeginning[index] = value;
            return { isBeginning: updatedIsBeginning };
        });
    },

    getIsEnd: (index: number) => {
        const { isEnd } = get();
        return isEnd[index];
    },

    getIsBeginning: (index: number) => {
        const { isBeginning } = get();
        return isBeginning[index];
    },

    onPrevSession: () => {
        const { index } = get();
        if (index > 0) {
            const newIndex = index - 1;
            set({ index: newIndex });
            return true;
        }
        return false;
    },

    onNextSession: () => {
        const { index } = get();
        if (index < sessions.length - 1) {
            const newIndex = index + 1;
            set({ index: newIndex });
            return true;
        }
        return false;
    },
}));

export default useSessionTransitionState;
