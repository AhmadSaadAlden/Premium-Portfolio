import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode  = 'dark' | 'light'

interface ThemeState {
    mode : ThemeMode
}

const initialState : ThemeState = {
    mode : 'dark'
}

export const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        toggleThemeMode : (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', state.mode)
            }
        },

        setThemeMode : (state, action : PayloadAction<ThemeMode>) => {
            state.mode = action.payload
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.payload)
            }
        },

    }
})

export const {setThemeMode, toggleThemeMode} = themeSlice.actions
export default themeSlice.reducer