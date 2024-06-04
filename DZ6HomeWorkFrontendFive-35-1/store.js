import { configureStore, createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: { isDark: true },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    }
  }
})

export const { toggleTheme } = themeSlice.actions

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  }
})

export default store
