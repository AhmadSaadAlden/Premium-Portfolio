'use client'

import { useState } from "react"
import { useAppSelector } from "@/store/hooks"
import { translations } from "@/data/translations"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function ContactForm() {
  const language = useAppSelector((state) => state.language.language)
  const t = translations[language].contact

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error("Submission Error", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/50 shadow-lg">
      <h3 className="text-2xl font-bold mb-2 text-foreground">
        {t.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        {t.subtitle}
      </p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-10 space-y-3 text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 animate-bounce" />
          <h4 className="text-lg font-bold text-foreground">
            {t.contactForm.successTitle}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t.contactForm.successSubtitle}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* مفتاح Web3Forms الخاص بك */}
          <input type="hidden" name="access_key" value="6eea2b0c-32a6-4cdf-9986-c563657169bc" />

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.contactForm.nameLabel}
            </label>
            <Input
              type="text"
              name="name"
              required
              placeholder={t.contactForm.namePlaceholder}
              className="bg-background/50 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.emailLabel}
            </label>
            <Input
              type="email"
              name="email"
              required
              placeholder={t.contactForm.emailPlaceholder}
              className="bg-background/50 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              {t.contactForm.messageLabel}
            </label>
            <Textarea
              name="message"
              required
              rows={4}
              placeholder={t.contactForm.messagePlaceholder}
              className="bg-background/50 rounded-xl resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl gap-2 font-medium shadow-md hover:shadow-lg transition-all"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>{t.contactForm.sendButton}</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}