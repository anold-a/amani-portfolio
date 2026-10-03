export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang: string; file?: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "aside"; text: string };

export type Post = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  date: string; 
  tags: string[];
  cover?: string; 
  content: Block[];
};

export type PostMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  dateLabel: string;
  minutes: number;
  cover?: string;
};

export function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC", 
  });
}

export function readingTime(post: Post) {
  const words = post.content
    .map((b) => {
      if (b.type === "list") return b.items.join(" ");
      if (b.type === "code" || b.type === "image") return "";
      return b.text;
    })
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export const posts: Post[] = [
  {
    slug: "git-log-flow",
    title: "Reading Your Git Logs: What Your Commits Say About How You Work",
    summary:
      "A look through your commit history and what the small decisions in your Git log reveal about how you build.",
    intro:
      "Your Git history is more than a list of changes. It shows how you think, what you revisit and whether you can explain your own work.",
    date: "2026-10-02",
    tags: ["Git", "Process", "Portfolio"],
    content: [
      {
        type: "p",
        text: "I used to think of a commit message as something I wrote because Git required one. Looking back at my projects, I see something different  the commit history is a record of how I actually work.",
      },
      {
        type: "h2",
        text: "A project has a story",
      },
      {
        type: "p",
        text: "Opening a repository and reading the commits from the beginning. You should often see the project changing direction a first idea, a new component, a redesign, a bug fix or a feature that was clearly revisited later.",
      },
      {
        type: "h2",
        text: "Small messages still matter",
      },
      {
        type: "p",
        text: "Messages like 'updated stuff' or '.' might be enough for me to remember what I did today, but they tell another developer almost nothing. A message should give the future version of me a useful clue.",
      },
      {
        type: "code",
        lang: "bash",
        file: "terminal",
        code: `git log --oneline --reverse
git log --stat -5
git show <commit>`,
      },
      {
        type: "h2",
        text: "My log is part of my portfolio",
      },
      {
        type: "p",
        text: "A portfolio shows the finished result. Git shows the process behind it. That process can reveal whether I build in small steps, whether I revisit decisions and whether I can explain what changed.",
      },
      {
        type: "aside",
        text: "A good commit message gives the next person a reason to keep reading.",
      },
      {
        type: "h2",
        text: "What I am changing",
      },
      {
        type: "list",
        items: [
          "Say what actually changed.",
          "Keep commits focused on one meaningful change when possible.",
          "Read the message once before pressing Enter.",
          "Treat the history as part of the project not disposable text.",
        ],
      },
    ],
  },

  {
    slug: "the-stack-reset",
    title: "The Stack Reset: Restructuring My Projects Around New Technologies",
    summary:
      "What happens when I revisit an old project and decide the original stack no longer matches what I want to learn.",
    intro:
      "Changing a stack can be useful when it has a reason. The goal is not to use newer technology it is to understand why the change makes the project better for me.",
    date: "2026-10-01",
    tags: ["Projects", "Learning", "Tech Stack"],
    content: [
      {
        type: "p",
        text: "Some of my projects started with whatever technology I already knew. Later I learned something new and immediately wanted to rebuild everything with it. That sounds productive, but it can easily become another way of starting over.",
      },
      {
        type: "h2",
        text: "Why I change a stack",
      },
      {
        type: "p",
        text: "Sometimes a project is a good place to practice a new framework, database, or architecture. The important part is knowing what I am trying to learn instead of changing technologies simply because another stack looks better.",
      },
      {
        type: "h2",
        text: "The project should survive the change",
      },
      {
        type: "p",
        text: "When I restructure a project, I want the original problem to remain visible. Otherwise I can spend days moving folders and rewriting setup without actually improving the application.",
      },
      {
        type: "h2",
        text: "What I keep",
      },
      {
        type: "list",
        items: [
          "The original problem the project was trying to solve.",
          "Features that still teach me something.",
          "Working ideas that can be carried into the new stack.",
          "Lessons from the parts that were difficult the first time.",
        ],
      },
      {
        type: "h2",
        text: "What I am learning",
      },
      {
        type: "p",
        text: "A new stack is useful when it gives me a reason to think differently. If I only replace React with another framework and copy the same decisions, I have changed tools without necessarily changing my understanding.",
      },
      {
        type: "aside",
        text: "A new stack should create a new learning problem, not just a new folder structure.",
      },
    ],
  },

  {
    slug: "build-with-your-projects",
    title: "Build With Your Projects, Not Just With Tutorials",
    summary:
      "Why repeatedly opening, changing, breaking, fixing, and improving my own projects has become part of how I learn.",
    intro:
      "Tutorials can show you a path. Your own project forces you to make decisions when the path is no longer written for you.",
    date: "2026-09-30",
    tags: ["Projects", "Learning", "Practice"],
    content: [
      {
        type: "p",
        text: "There is a comfortable feeling that comes from finishing a tutorial. Everything works, the instructor explains the next step, and the code looks complete. Then I open my own project and suddenly I have to decide what comes next.",
      },
      {
        type: "h2",
        text: "My project does not give me the answer",
      },
      {
        type: "p",
        text: "That is exactly why I need to interact with it more often. I have to decide where a component belongs, what data it needs, why an error happened, and whether the feature I imagined actually makes sense.",
      },
      {
        type: "h2",
        text: "Interacting means changing things",
      },
      {
        type: "list",
        items: [
          "Add a small feature.",
          "Remove something that no longer makes sense.",
          "Read an error before asking for the answer.",
          "Open old code and explain it to myself.",
          "Try a different implementation.",
          "Commit the change and come back later.",
        ],
      },
      {
        type: "h2",
        text: "The uncomfortable part is useful",
      },
      {
        type: "p",
        text: "When I cannot immediately solve something in my own project, there is no tutorial chapter to hide behind. That uncertainty makes me slow down and understand what I actually know.",
      },
      {
        type: "aside",
        text: "A project becomes a learning tool when I stop being afraid to touch it.",
      },
    ],
  },

  

  {
    slug: "reality-check",
    title: "Reality Check: Where I Actually Am",
    summary:
      "A personal check-in about separating what I can do from what I only recognize, and building from reality instead of comparison.",
    intro:
      "Knowing where I actually stand is more useful than pretending I am further ahead. A reality check gives me a starting point.",
    date: "2026-09-28",
    tags: ["Reflection", "Learning", "Career"],
    content: [
      {
        type: "p",
        text: "There is a difference between being familiar with a technology and being able to use it without being guided through every decision. I have had to become more honest about that difference.",
      },
      {
        type: "h2",
        text: "Recognition is not mastery",
      },
      {
        type: "p",
        text: "I can recognize React patterns, understand a database concept, or follow a Next.js tutorial. That does not automatically mean I can design and build the same thing from an empty project.",
      },
      {
        type: "h2",
        text: "The useful questions",
      },
      {
        type: "list",
        items: [
          "What can I build without copying?",
          "What can I explain without searching?",
          "What errors can I investigate myself?",
          "Which parts still require step by step guidance?",
          "What have I actually built and maintained?",
        ],
      },
      {
        type: "h2",
        text: "The point is not to feel behind",
      },
      {
        type: "p",
        text: "A reality check is useful because it removes the pressure to perform a version of myself that does not exist yet. Once I know what I can and cannot do, I can choose the next thing to practice.",
      },
      {
        type: "aside",
        text: "Honesty about the starting point is not failure. It is useful information.",
      },
    ],
  },

  {
    slug: "choosing-learning-tools",
    title: "Choosing Your Learning Tools",
    summary:
      "How I think about choosing courses, documentation, projects, videos, AI, and other tools without turning learning into endless tool hunting.",
    intro:
      "Choose a learning tool because it solves the problem you have right now, not because everyone online is using it.",
    date: "2026-09-27",
    tags: ["Learning", "Tools", "Developing"],
    content: [
      {
        type: "p",
        text: "The internet gives me an almost unlimited number of ways to learn the same technology. A course, a documentation page, a video, an AI assistant, a book, a coding challenge, or a project can all be useful. The problem starts when choosing the tool becomes the work.",
      },
      {
        type: "h2",
        text: "Start with the gap",
      },
      {
        type: "p",
        text: "Before choosing a resource, I need to know what I am missing. If I cannot understand a concept, documentation may help. If I understand it but cannot apply it, a project may help more. If I am stuck on one error, I need targeted help rather than another full course.",
      },
      {
        type: "h2",
        text: "One tool does not have to do everything",
      },
      {
        type: "p",
        text: "I do not need one perfect platform. Different tools serve different purposes. The important thing is having a reason for using each one.",
      },
      {
        type: "list",
        items: [
          "Use documentation when I need accurate reference material.",
          "Use projects when I need practice making decisions.",
          "Use challenges when I need focused repetition.",
          "Use AI when I need help thinking through a problem.",
          "Use tutorials when I need a structured introduction.",
        ],
      },
      {
        type: "aside",
        text: "The best learning tool is usually the one that addresses the gap I actually have.",
      },
    ],
  },

  {
    slug: "the-internet-has-too-many-ideas",
    title: "The Internet Has Too Many Ideas",
    summary:
      "There is always another framework, project idea, roadmap, and tutorial. Sometimes the hardest part is deciding what not to follow.",
    intro:
      "More ideas do not automatically create more progress. Sometimes I need to stop consuming possibilities and sit with the one thing I already chose.",
    date: "2026-09-26",
    tags: ["Focus", "Learning", "Reflection"],
    content: [
      {
        type: "p",
        text: "I can open YouTube, GitHub, Reddit, documentation, or social media and find another thing I should apparently be learning within minutes. There is always a new framework, a better roadmap, a new project idea, or someone explaining a completely different path.",
      },
      {
        type: "h2",
        text: "The problem is not a lack of information",
      },
      {
        type: "p",
        text: "There is already more information available than I can realistically use. The difficult part is deciding what deserves my attention and what can wait.",
      },
      {
        type: "h2",
        text: "Sit with yourself",
      },
      {
        type: "p",
        text: "Sometimes I need to close the tabs and ask a simpler question: what am I actually trying to become better at? The answer may be less exciting than the latest technology, but it is more useful if it gives me direction.",
      },
      {
        type: "h2",
        text: "Ideas are not commitments",
      },
      {
        type: "p",
        text: "Seeing a project idea does not mean I need to build it. Seeing a new framework does not mean I need to learn it. I can save an idea and continue working on what I already chose.",
      },
      {
        type: "aside",
        text: "The internet can give me thousands of directions. I still have to choose one.",
      },
    ],
  },

  {
    slug: "you-should-vs-you-must",
    title: "Dilemma behind a growing industry",
    summary:
      "A reminder to stop building for comparison and start building for understanding, consistency and my own direction.",
    intro:
      "I do not need to prove that I know every framework, build every idea, or move as fast as someone else. I need to keep becoming more capable.",
    date: "2026-09-25",
    tags: ["Reflection", "Career", "Learning"],
    content: [
      {
        type: "p",
        text: "There is an easy trap in learning technology: turning every project into evidence. Evidence that I am improving. Evidence that I know a framework. Evidence that I am ready. Evidence that I am not falling behind.",
      },
      {
        type: "h2",
        text: "Comparison changes the reason I build",
      },
      {
        type: "p",
        text: "When I build only to prove something, I start choosing projects and technologies based on how impressive they look. The project becomes a performance instead of a place to learn.",
      },
      {
        type: "h2",
        text: "I can build quietly",
      },
      {
        type: "p",
        text: "A small project that teaches me something is still valuable. Fixing an old project is still progress. Reading documentation carefully is still learning. I do not need every step to be visible to someone else.",
      },
      {
        type: "h2",
        text: "The only useful comparison",
      },
      {
        type: "p",
        text: "The comparison that matters is between what I understand now and what I understood before. That gives me information I can actually use.",
      },
      {
        type: "list",
        items: [
          "Build because I want to understand something.",
          "Keep projects because they show my progress to me.",
          "Learn at a pace I can sustain.",
          "Let other people's paths remain their paths.",
          "Keep going even when there is nothing to prove today.",
        ],
      },
      {
        type: "aside",
        text: "I do not need to look like a developer. I need to become one through the work.",
      },
    ],
  },
];
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = sortedPosts.findIndex((p) => p.slug === slug);
  return {
    newer: i > 0 ? sortedPosts[i - 1] : undefined,
    older: i >= 0 && i < sortedPosts.length - 1 ? sortedPosts[i + 1] : undefined,
  };
}

export function toMeta(p: Post): PostMeta {
  return {
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    tags: p.tags,
    dateLabel: formatDate(p.date),
    minutes: readingTime(p),
    cover: p.cover,
  };
}