"use client";

import { configureStore } from "@reduxjs/toolkit";

// Initial state for language
const languageInitialState = {
  currentLocale: "en",
  messages: {
    home: {
      banner: {
        title: "Find Top",
        subtitle1: "Talent",
        subtitle2: "Worldwide",
        description: "Connect with skilled freelancers for your projects",
        findTalent: "Find Talent",
        forClients: "For Clients",
        applyToJoin: "Apply to Join",
        forFreelancers: "For Freelancers",
      },
    },
  },
};

// Language reducer
const languageReducer = (state = languageInitialState, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, currentLocale: action.payload };
    default:
      return state;
  }
};

// Current user reducer
const currentUserInitialState = {
  isLoggedIn: false,
  user: null,
};

const currentUserReducer = (state = currentUserInitialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, user: action.payload };
    case "LOGOUT":
      return currentUserInitialState;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    language: languageReducer,
    currentUser: currentUserReducer,
  },
});
