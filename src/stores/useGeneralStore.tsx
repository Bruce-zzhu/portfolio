import { create } from 'zustand';

type State = {
  theme: 'light' | 'dark';
  language: 'en' | 'zh';
};

type Action = {
  toggleTheme: () => void;
  toggleLanguage: () => void;
};

const useGeneralStore = create<State & Action>((set) => ({
  theme: 'light',
  language: 'en',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'zh' : 'en' })),
}));

export default useGeneralStore;
