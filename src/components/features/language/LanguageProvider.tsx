'use client'

import { Language } from "@/data/translations"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { setLanguage } from "@/store/slices/languageSlice"
import { useEffect, useRef } from "react"

export default function LanguageProvider({children} : {children : React.ReactNode}) {
    const initialized = useRef(false)
    const dispatch = useAppDispatch()
    const {language, direction} = useAppSelector((state) => state.language)
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            const savedLang = localStorage.getItem('language') as Language | null
            if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
                dispatch(setLanguage(savedLang))
            }
        }
    }, [dispatch])

    useEffect(() => {
        const root = document.documentElement
        root.setAttribute('lang', language)
        root.setAttribute('dir', direction)
    }, [language, direction])

    return <>{children}</>
}