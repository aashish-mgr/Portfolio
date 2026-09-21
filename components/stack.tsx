import { stack } from "@/lib/content";

export function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-y border-line bg-surface/70"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="rounded-md border border-line bg-elevated/40 p-6 sm:p-7">
          <p className="font-mono text-xs text-gold">web dev</p>
          <ul className="mt-6 space-y-5">
            {stack.dev.map((item) => (
              <li key={item.name} className="flex items-baseline gap-3">
                <span
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden
                />
                <span className="font-medium text-ink">{item.name}</span>
                <span className="font-mono text-xs text-faint">
                  — {item.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}