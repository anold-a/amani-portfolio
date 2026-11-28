"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import CopyEmail from "@/components/homepage/CopyEmail";
import { profile } from "@/lib/data";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const pill =
  "flex items-center justify-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold transition hover:border-ink";

const questions = [
  {
    key: "need",
    question: "What do you need built?",
    options: ["Website", "Web app", "Something else"],
  },
  {
    key: "size",
    question: "How big, roughly?",
    options: ["Small", "Medium", "Large"],
  },
] as const;

const TOTAL_STEPS = questions.length + 1;

type Answers = { need: string; size: string; contact: string };
type Status = "idle" | "sending" | "done" | "error";

const looksValid = (value: string) =>
  /^\S+@\S+\.\S+$/.test(value) || value.replace(/\D/g, "").length >= 7;


async function sendInquiry(answers: Answers): Promise<boolean> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formId) {
    const subject = encodeURIComponent("New project inquiry");
    const body = encodeURIComponent(
      `Project: ${answers.need}\nSize: ${answers.size}\nContact: ${answers.contact}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    return true;
  }

  try {
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(answers),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export default function Contact() {
  const [step, setStep] = useState(0); 
  const [answers, setAnswers] = useState<Answers>({ need: "", size: "", contact: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onContactStep = step === questions.length;

  useEffect(() => {
    if (onContactStep && status === "idle") inputRef.current?.focus();
  }, [onContactStep, status]);

  const choose = (key: "need" | "size", value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const contact = answers.contact.trim();

    if (!looksValid(contact)) {
      setError("Add an email or phone number so I can reply.");
      return;
    }

    setError("");
    setStatus("sending");
    const ok = await sendInquiry({ ...answers, contact });
    setStatus(ok ? "done" : "error");
  };

  const reset = () => {
    setAnswers({ need: "", size: "", contact: "" });
    setStep(0);
    setStatus("idle");
    setError("");
  };

  const dotClass = (index: number) => {
    if (status === "done" || index < step) return "bg-emerald-400";
    if (index === step) return "bg-yellow-300";
    return "bg-slate-700";
  };

  const current = questions[step];

  return (
    <SharedUI
      id="contact"
      index={<p className="text-2xl font-bold text-white">Contact</p>}
      scramble
      title={<span className="text-sm text-slate-400">Get in touch</span>}
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
            Got an idea?
            <br />
            <span className="text-slate-400">Let&apos;s build it.</span>
          </h3>
          <p className="mt-6 max-w-md pl-4 text-lg text-muted">
            I am open to collaborations, freelance work and full-time roles. Answer three quick
            questions and I will reply as soon as I can.
          </p>
        </div>

        
        <div className="rounded-lg border border-slate-800/80 bg-[#0b1120] p-6">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            One question at a time
          </p>

          
          <div
            className="mt-5 flex min-h-44 w-full flex-col items-center justify-center text-center"
            aria-live="polite"
          >
            

            {status === "done" ? (
              <>
                <p className="text-lg font-bold text-white">Done. I&apos;ll reply soon.</p>
                <span className="mt-4 grid size-12 place-items-center rounded-full bg-emerald-500 text-white">
                  <Check size={24} aria-hidden />
                </span>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 text-xs font-semibold text-slate-400 underline-offset-4 hover:text-white hover:underline"
                >
                  Send another
                </button>
              </>
            ) : status === "sending" ? (
              <>
                <div className="flex gap-1.5" aria-hidden>
                  <span className="size-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                  <span className="size-2 rounded-full bg-emerald-400 motion-safe:animate-pulse [animation-delay:150ms]" />
                  <span className="size-2 rounded-full bg-emerald-400 motion-safe:animate-pulse [animation-delay:300ms]" />
                </div>
                <p className="mt-3 text-sm text-slate-400">Sending…</p>
              </>
            ) : status === "error" ? (
              <>
                <p className="text-lg font-bold text-white">That didn&apos;t send.</p>
                <p className="mt-1 text-sm text-slate-400">
                  Try again, or use email or WhatsApp below.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Try again
                </button>
              </>
            ) : onContactStep ? (
              <form onSubmit={submit} className="w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Step {step + 1} of {TOTAL_STEPS}
                </p>
                <label htmlFor="contact-input" className="mt-2 block text-lg font-bold text-white">
                  Where can I reach you?
                </label>
                <input
                  id="contact-input"
                  ref={inputRef}
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  value={answers.contact}
                  onChange={(e) => setAnswers((a) => ({ ...a, contact: e.target.value }))}
                  placeholder="Email or WhatsApp number"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "contact-error" : undefined}
                  className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-slate-400 focus:outline-none"
                />
                {error && (
                  <p id="contact-error" role="alert" className="mt-2 text-xs text-rose-400">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-4 w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Send
                </button>
              </form>
            ) : (
              <div className="w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Step {step + 1} of {TOTAL_STEPS}
                </p>
                <p className="mt-2 text-lg font-bold text-white">{current.question}</p>
                <div
                  className="mt-4 flex flex-wrap justify-center gap-2"
                  role="group"
                  aria-label={current.question}
                >
                  {current.options.map((option) => {
                    const selected = answers[current.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => choose(current.key, option)}
                        aria-pressed={selected}
                        className={`rounded-lg border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                          selected
                            ? "border-white bg-white text-slate-900"
                            : "border-slate-700 bg-slate-900/80 text-white hover:border-slate-400"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          
          <div className="mt-3 h-5">
            {step > 0 && status === "idle" && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 transition hover:text-white"
              >
                <ArrowLeft size={14} aria-hidden /> Back
              </button>
            )}
          </div>

          <p className="my-5 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted">
            <span className="h-px flex-1 bg-line" /> or connect via <span className="h-px flex-1 bg-line" />
          </p>

          <div className="flex w-full items-center justify-center flex-col gap-10 sm:flex-row sm:items-center">
            <CopyEmail email={profile.email} />

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={`${pill} h-10 rounded-xl border-slate-800 bg-slate-900/80 text-white`}
            >
              <MessageCircle size={16} /> WhatsApp
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className={`${pill} h-10 rounded-xl border-slate-800 bg-slate-900/80 text-white`}
            >
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </SharedUI>
  );
}