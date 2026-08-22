'use client'

import { ArrowUp } from "lucide-react"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const toggleVisbility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisbility)
        return () => window.removeEventListener('scroll', toggleVisbility)
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }

    if (!isVisible) return null
    return (
        <Button 
            size={"icon"}
            className={"fixed bottom-6 right-6 z-50 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"}
            aria-label="Scroll to top"
            onClick={scrollToTop}
        >
            <ArrowUp className="w-5 h-5"/>
        </Button>   
    )
}