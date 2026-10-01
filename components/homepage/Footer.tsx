import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#home" className="flex items-center gap-2 font-medium hover:text-ink">
          Back to Top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}