import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'todos';

export const loadTodos = createAsyncThunk('todos/loadTodos', async () => {
  const stored = await AsyncStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
});

const saveTodos = async (todos) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const updated = [...state, action.payload];
      saveTodos(updated);
      return updated;
    },
    deleteTodo: (state, action) => {
      const updated = state.filter(todo => todo.id !== action.payload);
      saveTodos(updated);
      return updated;
    },
    toggleComplete: (state, action) => {
      const updated = state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodos(updated);
      return updated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodos.fulfilled, (_, action) => action.payload);
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
