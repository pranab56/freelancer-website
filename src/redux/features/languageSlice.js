import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to load messages for a specific locale
export const loadMessages = createAsyncThunk(
  "language/loadMessages",
  async (locale) => {
    try {
      const messages = await import(`../../messages/${locale}.json`);
      return { locale, messages: messages.default };
    } catch (error) {
      console.error(`Failed to load messages for locale: ${locale}`, error);
      throw error;
    }
  }
);

const languageSlice = createSlice({
  name: "language",
  initialState: {
    currentLocale: "en",
    messages: {},
    allMessages: {},
    loading: false,
    error: null,
  },
  reducers: {
    setLocale: (state, action) => {
      console.log("LanguageSlice - setLocale called with:", action.payload);
      console.log("LanguageSlice - Previous locale:", state.currentLocale);
      state.currentLocale = action.payload;
      console.log("LanguageSlice - New locale:", state.currentLocale);
      // Update document language attribute
      if (typeof document !== "undefined") {
        document.documentElement.lang = action.payload;
      }
      // Store preference in localStorage
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("preferred-locale", action.payload);
      }
    },
    setMessages: (state, action) => {
      const { locale, messages } = action.payload;
      console.log("LanguageSlice - setMessages called with:", {
        locale,
        messages,
      });
      console.log("LanguageSlice - Previous messages:", state.messages);
      state.messages = messages;
      state.allMessages[locale] = messages;
      console.log("LanguageSlice - New messages:", state.messages);
    },
    initializeLanguage: (state, action) => {
      const { locale, messages } = action.payload;
      console.log("LanguageSlice - initializeLanguage called with:", {
        locale,
        messages,
      });
      console.log("LanguageSlice - Previous state:", {
        currentLocale: state.currentLocale,
        messages: state.messages,
      });
      state.currentLocale = locale;
      state.messages = messages;
      state.allMessages[locale] = messages;
      console.log("LanguageSlice - New state:", {
        currentLocale: state.currentLocale,
        messages: state.messages,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMessages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMessages.fulfilled, (state, action) => {
        const { locale, messages } = action.payload;
        state.loading = false;
        state.messages = messages;
        state.allMessages[locale] = messages;
        state.currentLocale = locale;
        // Update document language attribute
        if (typeof document !== "undefined") {
          document.documentElement.lang = locale;
        }
        // Store preference in localStorage
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("preferred-locale", locale);
        }
      })
      .addCase(loadMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setLocale, setMessages, initializeLanguage } =
  languageSlice.actions;
export default languageSlice.reducer;
