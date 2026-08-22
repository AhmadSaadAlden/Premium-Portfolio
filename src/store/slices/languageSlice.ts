import { Language } from "@/data/translations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Direction = 'ltr' | 'rtl'

interface LanguageState {
    language : Language
    direction : Direction
}

const initialState : LanguageState = {
    language : 'en',
    direction : 'ltr',
}

export const languageSlice = createSlice({
    name : 'language',
    initialState,
    reducers : {
        setLanguage : (state, actions : PayloadAction<Language>) => {
            state.language = actions.payload
            state.direction = actions.payload === 'ar' ? 'rtl' : 'ltr'
            if (typeof window !== 'undefined') {
                localStorage.setItem('language', actions.payload)
            }
        },

        toggleLanguage : (state) => {
            const nextLang : Language = state.language === 'en' ? 'ar' : 'en'
            state.language = nextLang
            state.direction = nextLang === 'ar' ? 'rtl' : 'ltr'
            if (typeof window !== 'undefined') {
                localStorage.setItem('language', nextLang)
            }
        }
    }
})

export const {toggleLanguage, setLanguage} = languageSlice.actions
export default languageSlice.reducer