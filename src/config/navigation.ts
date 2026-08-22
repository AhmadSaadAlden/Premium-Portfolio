import { TranslationDictionary } from "@/data/translations"
import { Contact, FolderGit2, Info, LucideProps, Sparkles } from "lucide-react"

export interface NavItem {
    id : string
    href : string
    key : keyof TranslationDictionary['nav']
} 

export const NAV_ITEMS = [
    { id : 'about', href : "#about", key : "about", },
    { id : 'projects', href : "#projects", key : "projects", },
    { id : 'skills', href : "#skills", key : "skills", },
    { id : 'contact', href : "#contact", key : "contact", },
]