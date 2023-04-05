import { createContext, useContext, useReducer } from "react";

export const LanguageContext = createContext(null);
export const LanguageDispatchContext = createContext(null);

export const languages = [
  {
    language: "pt",
    label: {
      pt: "Português",
      en: "Portuguese",
      es: "Portugués",
    },
    image:
      "https://img.freepik.com/free-vector/illustration-portugal-flag_53876-18170.jpg",
  },
  {
    language: "es",
    label: {
      pt: "Espanhol",
      en: "Spanish",
      es: "Español",
    },
    image:
      "data:image/png;base64,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",
  },
  {
    language: "en",
    label: {
      pt: "Inglês",
      es: "Inglés",
      en: "English",
    },
    image:
      "data:image/png;base64,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",
  },
];

export function LanguageProvider({ children }) {
  //Initial state set to portuguese
  const [len, dispatch] = useReducer(languageReducer, languages[0]);

  return (
    <LanguageContext.Provider value={len}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageDispatch() {
  return useContext(LanguageDispatchContext);
}

export function languageReducer(lang, action) {
  switch (action.type) {
    case "change": {
      console.log("Reducer", { lang, action });
      if (action.index >= 0) return languages[action.index];
      return null;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
