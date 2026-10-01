import { Send, MessageCircle,} from "lucide-react";
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

  

export default function Contact() {
  return (
    <SharedUI id="contact" index="07" note="do not be shy" title={<>Say <span className="italic">hello</span></>}>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            Got an idea?
            <br />
            <span className="text-brand">Let&apos;s build it.</span>
          </h3>
          <p className="mt-6 max-w-md border-l-4 border-accent pl-4 text-lg text-muted">
            I am open to collaborations, freelance work and full-time roles. Send a message and I will reply as soon as I can.
          </p>
        </div>

        <div className="rounded-lg border border-line  p-6 bg-card">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center gap-3 rounded-lg bg-ink px-6 py-4 font-semibold text-bg transition hover:opacity-90"
          >
            Send me a message <Send size={18} />
          </a>
          <p className="my-5 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted">
            <span className="h-px flex-1 bg-line" /> or connect via <span className="h-px flex-1 bg-line" />
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <CopyEmail email={profile.email} />
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className={pill}>
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={pill}>
              <GithubIcon size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </SharedUI>
  );
}