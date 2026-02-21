import { useState } from 'react'
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react'

const TOTAL_STEPS = 7

const SERVICES = [
  'Brand identity',
  'Web & app design',
  'Graphic design',
  'Illustration',
  'Motion & interaction',
  'Icon design',
  'Web development',
  'Something else',
] as const

const TIMELINES = [
  'ASAP',
  'Within 1–2 weeks',
  'Within 2–4 weeks',
  '1–2 months',
  'Long-term / ongoing',
  'No rush — flexible',
] as const

const BUDGETS = [
  'Under $1k',
  '$1k – $5k',
  '$5k – $10k',
  '$10k – $25k',
  '$25k+',
] as const

type FormData = {
  name: string
  email: string
  services: string[]
  timeline: string
  projectDetails: string
  budget: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  services: [],
  timeline: '',
  projectDetails: '',
  budget: '',
}

export function Contact() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const goNext = () => {
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1)
  }
  const goBack = () => {
    if (step > 0) setStep((s) => s - 1)
  }

  const toggleService = (service: string) => {
    setFormData((d) => ({
      ...d,
      services: d.services.includes(service)
        ? d.services.filter((s) => s !== service)
        : [...d.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto or send to your backend
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Services: ${formData.services.join(', ') || '—'}`,
      `Timeline: ${formData.timeline || '—'}`,
      `Project: ${formData.projectDetails}`,
      `Budget: ${formData.budget || '—'}`,
    ].join('\n')
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const mailtoBody = encodeURIComponent(body)
    window.location.href = `mailto:muhsalmon98@gmail.com?subject=${subject}&body=${mailtoBody}`
  }

  /* Bar uses 6 segments (reaches 100% on last step); dots stay 7 */
  const progressBarSteps = Math.max(1, TOTAL_STEPS - 1)
  const progressPercent = (step / progressBarSteps) * 100

  return (
    <section id="contact" className="section flex items-center py-24">
      <div className="site-wrap w-full">
        <p className="label mb-4">Contact</p>
        <h2 className="text-3xl font-medium text-foreground mb-6" data-font="display">
          Open to collaboration and new projects.
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-xl">
          Say hello and tell me a bit about what you have in mind. A few short questions and we&apos;re good to go.
        </p>

        {/* Card: fixed height, form content top, buttons bottom right */}
        <div className="bg-card text-card-foreground rounded-xl h-[400px] flex flex-col overflow-hidden border border-border">
          {/* Progress inside card */}
          <div
            className="shrink-0 px-5 pt-5 pb-3"
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={0}
            aria-valuemax={TOTAL_STEPS - 1}
            aria-label={`Question ${step + 1} of ${TOTAL_STEPS}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground tabular-nums">
                Question {step + 1} of {TOTAL_STEPS}
              </span>
              <span className="text-[10px] text-muted-foreground/70 tabular-nums">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="relative mb-6">  
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between absolute bottom-0 left-0 right-0">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                  <span
                    key={i}
                    className={`
                      h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300
                      ${i < step ? 'bg-primary ring-2 ring-primary/50 ring-offset-2 ring-offset-card' : ''}
                      ${i === step ? 'bg-primary ring-2 ring-primary/50 ring-offset-2 ring-offset-card' : ''}
                      ${i > step ? 'bg-border' : ''}
                    `}
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 min-h-0 flex justify-between"
            aria-label="Contact form"
          >
            {/* Form content: scrollable, takes space */}
            <div className="flex-1 min-h-0 overflow-y-auto px-5">
              {step === 0 && (
                <div className="animate-in fade-in duration-200">
                  <h2 className="text-xl font-medium text-foreground mb-4" data-font="display">
                    What should I call you?
                  </h2>
                  <input
                    type="text"
                    required
                    maxLength={256}
                    value={formData.name}
                    onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g. Alex, Sarah, or your full name"
                    autoFocus
                  />
                </div>
              )}

              {step === 1 && (
                <div className="animate-in fade-in duration-200">
                  <h2 className="text-xl font-medium text-foreground mb-4" data-font="display">
                    What&apos;s the best email to reach you?
                  </h2>
                  <input
                    type="email"
                    required
                    maxLength={256}
                    value={formData.email}
                    onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@company.com"
                    autoFocus
                  />
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in duration-200">
                  <h2 className="text-xl font-medium text-foreground mb-4" data-font="display">
                    What do you need help with? (pick any that apply)
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((service) => (
                      <label
                        key={service}
                        className="inline-flex cursor-pointer items-center rounded-md border border-border px-3 py-2 text-sm transition-colors hover:border-muted-foreground/50 has-[:checked]:border-foreground has-[:checked]:bg-accent"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => toggleService(service)}
                          className="sr-only peer"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in duration-200">
                  <h2 className="text-xl font-medium text-foreground mb-4" data-font="display">
                    When do you hope to get started?
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINES.map((timeline) => (
                      <label key={timeline} className="inline-flex cursor-pointer items-center rounded-md border border-border px-3 py-2 text-sm transition-colors hover:border-muted-foreground/50 has-[:checked]:border-foreground has-[:checked]:bg-accent">
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline}
                          checked={formData.timeline === timeline}
                          onChange={(e) => setFormData((d) => ({ ...d, timeline: e.target.value }))}
                          className="sr-only peer"
                        />
                        <span>{timeline}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in duration-200">
                  <h2 className="text-xl font-medium text-foreground mb-4" data-font="display">
                    In a few words, what&apos;s the project about?
                  </h2>
                  <input
                    type="text"
                    required
                    maxLength={256}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData((d) => ({ ...d, projectDetails: e.target.value }))}
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g. Rebrand for a SaaS product, landing page for a campaign"
                    autoFocus
                  />
                </div>
              )}

              {step === 5 && (
                <div className="animate-in fade-in duration-200">
                  <h2 className="text-xl font-medium text-foreground mb-4" data-font="display">
                    What&apos;s your budget range for this project?
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((budget) => (
                      <label key={budget} className="inline-flex cursor-pointer items-center rounded-md border border-border px-3 py-2 text-sm transition-colors hover:border-muted-foreground/50 has-[:checked]:border-foreground has-[:checked]:bg-accent">
                        <input
                          type="radio"
                          name="budget"
                          value={budget}
                          checked={formData.budget === budget}
                          onChange={(e) => setFormData((d) => ({ ...d, budget: e.target.value }))}
                          className="sr-only peer"
                        />
                        <span>{budget}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 6 && (
                <div className="animate-in fade-in duration-200">
                  <h2 className="text-xl font-medium text-foreground mb-2" data-font="display">
                    You&apos;re all set — thanks for sharing.
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Double-check your answers below, then hit submit. I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </div>

            {/* Buttons: fixed at bottom right */}
            <div className="shrink-0 flex justify-end gap-3 px-5 py-4 border-t border-border">
              {step > 0 && (
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm hover:bg-accent transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </button>
              )}
              {step < TOTAL_STEPS - 1 && (
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
              {step === TOTAL_STEPS - 1 && (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="h-4 w-4" />
                  Submit via email
                </button>
              )}
            </div>
          </form>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          <a
            href="https://linkedin.com/in/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          {' · '}
          <a
            href="https://github.com/muhsalmon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  )
}
