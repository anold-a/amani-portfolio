import { Mail, MessageCircle, Send } from "lucide-react";
import SharedUI from "@/components/layout/SharedUI";
import { profile } from "@/lib/data";

const btn = "flex items-center justify-center gap-3 rounded-xl border border-line bg-card px-6 py-4 font-semibold transition hover:border-brand";

export default function Contact() {
  return (
    <SharedUI id="contact" index ="06" title="Reach out">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <h3 className="font-display text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl">
            LET`S WORK <span className="text-brand">TOGETHER.</span>
          </h3>
          <p className="mt-10 max-w-md border-l-4 border-brand pl-4 text-xl text-muted">
            I am ready to build your next product. Reach out for collaborations, inquiries or just to say hi!
          </p>
        </div>
        <div>
          <a href={`mailto:${profile.email}`} className="flex items-center justify-center gap-3 rounded-xl bg-ink px-6 py-5 text-lg font-medium text-white">
            Send me a message <Send size={20} />
          </a>
          <p className="my-8 text-center text-xs font-bold uppercase tracking-widest text-muted">Or connect via</p>
          <div className="grid grid-cols-2 gap-4">
            <a href={`mailto:${profile.email}`} className={btn}><Mail size={18} /> Email</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className={btn}><MessageCircle size={18} /> WhatsApp</a>
          </div>
        </div>
      </div>
    </SharedUI>
  );
}