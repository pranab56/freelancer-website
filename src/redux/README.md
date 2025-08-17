# Redux Setup Documentation

This project uses Redux Toolkit with Redux Persist for state management. The setup includes authentication, user management, and is ready for additional features.

## Structure

```
src/redux/
├── store/
│   └── store.js          # Main store configuration
├── features/
│   ├── auth/
│   │   └── authSlice.js  # Authentication state management
│   └── user/
│       └── userSlice.js  # User profile management
├── Provider.jsx          # Redux Provider component
├── hooks.js              # Custom hooks for Redux usage
└── README.md             # This documentation
```

## Featuresd

### 1. Store Configuration (`store.js`)

- Configured with Redux Toolkit
- Includes Redux Persist for state persistence
- Development tools enabled in non-production
- Proper middleware configuration

### 2. Authentication Slice (`authSlice.js`)

- User login/logout functionality
- Async thunks for API calls
- Loading states and error handling
- Token management

### 3. User Slice (`userSlice.js`)

- User profile management
- Fetch and update user data
- Profile update tracking

### 4. Custom Hooks (`hooks.js`)

- `useAuth()` - Access authentication state
- `useUser()` - Access user state
- `useAppDispatch()` - Typed dispatch
- `useAppSelector()` - Typed selector

## Usage

### Basic Usage in Components

```jsx
"use client";

import { useAuth, useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/features/auth/authSlice";

function MyComponent() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading } = useAuth();

  const handleLogin = async (credentials) => {
    await dispatch(loginUser(credentials));
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user.email}!</p>
      ) : (
        <button
          onClick={() =>
            handleLogin({ email: "test@example.com", password: "password" })
          }
        >
          Login
        </button>
      )}
    </div>
  );
}
```

### Adding New Slices

1. Create a new slice file in `features/`:

```jsx
// src/redux/features/project/projectSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = projectSlice.actions;
export default projectSlice.reducer;
```

2. Add the slice to the store:

```jsx
// In store.js
import projectSlice from "../features/project/projectSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  project: projectSlice, // Add this line
});
```

3. Create a custom hook:

```jsx
// In hooks.js
export const useProject = () => {
  return useSelector((state) => state.project);
};
```

### State Persistence

The store is configured with Redux Persist to automatically save and restore state. Currently, only `auth` and `user` slices are persisted. To add more slices to persistence:

```jsx
// In store.js
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user", "project"], // Add new slices here
};
```

## Best Practices

1. **Use Custom Hooks**: Always use the custom hooks from `hooks.js` instead of plain `useDispatch` and `useSelector`.

2. **Async Operations**: Use `createAsyncThunk` for all API calls and async operations.

3. **Error Handling**: Always handle errors in async thunks using `rejectWithValue`.

4. **Loading States**: Include loading states for better UX.

5. **State Structure**: Keep state normalized and avoid deeply nested objects.

6. **Selectors**: Use selectors for complex state computations.

## Example Component

See `src/components/example/ReduxExample.jsx` for a complete example of how to use Redux in components.

## Development Tools

Redux DevTools are automatically enabled in development mode. You can install the Redux DevTools browser extension for debugging.

## API Integration

The slices are set up to work with REST APIs. Update the fetch URLs in the async thunks to match your actual API endpoints.

## Testing

When testing components that use Redux, wrap them in the Provider:

```jsx
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

function TestWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
```
