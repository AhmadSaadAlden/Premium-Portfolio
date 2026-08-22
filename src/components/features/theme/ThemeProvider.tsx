'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { setThemeMode } from "@/store/slices/themeSlice"
import { ReactNode, useEffect, useRef } from "react"

export default function ThemeProvider({children} : {children : ReactNode}) {
    const themeMode = useAppSelector((state) => state.theme.mode)
    const dispatch = useAppDispatch()
    const initialized = useRef(false)

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
            if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
                dispatch(setThemeMode(savedTheme))
            }
        }
    }, [dispatch])

    useEffect(() => {
        const root = document.documentElement
        if (themeMode === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [themeMode])

    return <>{children}</>
}