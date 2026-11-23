import { highlights } from "@/lib/data";
import InfoCard from "../layout/InfoCard";


const stackCategories = [
  {
    title: "FRONTEND INTERFACE",
    countLabel: "6 packages",
    
    items: [
      { name: "React",},
      { name: "Next.js",},
      { name: "TypeScript",},
      { name: "Tailwind CSS",},
      { name: "Vue.js",},
      { name: "WebGL",},
    ],
  },
  {
    title: "BACKEND & PERSISTENCE",
    countLabel: "6 runtimes",
   
    items: [
      { name: "Node.js"},
      { name: "NestJS"},
      { name: "PostgreSQL"},
      { name: "Redis"},
      { name: "GraphQL"},
      { name: "Docker"},
    ],
  },
  {
    title: "DEVOPS & TOOLCHAIN",
    countLabel: "6 services",
    
    items: [
      { name: "Git", },
      { name: "AWS Cloud", },
      { name: "CI / CD", },
      { name: "Figma", },
      { name: "Jest", },
      { name: "Turborepo",},
    ],
  },
];

export default function TechnicalStack() {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-[#0b1120] p-6 shadow-xl sm:p-7">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
         
          <h2 className="font-display text-xl font-bold tracking-tight text-white">
            Technical Stack
          </h2>
        </div>
        <span className="font-mono text-xs text-slate-500">v2.5.0</span>
      </div>

      <div className="mt-7 space-y-6">
        {stackCategories.map((category) => {
         
          return (
            <div key={category.title}>
            
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-slate-200">
                  
                  <span>{category.title}</span>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  {category.countLabel}
                </span>
              </div>

              
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => {
                 
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-brand/40 hover:text-white"
                    >
                      
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
       <div className=" mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <InfoCard
              key={item.label}
              label={item.label}
              title={item.title}
              subtitle={item.subtitle}
       
            />
          ))}
        </div>
    </div>
  );
}
