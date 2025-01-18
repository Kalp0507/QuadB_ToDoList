import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default storage (localStorage)
import { thunk } from 'redux-thunk'; // Ensure thunk is correctly imported
import rootReducer from './reducers'; // Import combined reducers

// Set up Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage, // Using localStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store and apply middleware (e.g., redux-thunk)
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export const persistor = persistStore(store); // Export persistor for PersistGate

// Subscribe to state changes and save only the tasks to localStorage
store.subscribe(() => {
  const tasks = store.getState().tasks;
  try {
    // Save tasks to localStorage whenever they are updated
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Could not save tasks to localStorage', error);
  }
});
