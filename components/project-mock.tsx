const barHeights = [38, 55, 24, 62, 47, 78];

export function ProjectMock({
  variant,
}: {
  variant: "bars" | "board" | "mixed";
}) {
  if (variant === "bars") {
    return (
      <div className="flex h-full items-end gap-2 px-6 pb-8 sm:gap-3" aria-hidden>
        {barHeights.map((height, index) => (
          <div
            key={index}
            className={`w-full rounded-t-[3px] ${
              index === barHeights.length - 1 ? "bg-gold/80" : "bg-teal/80"
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    );
  }

  if (variant === "board") {
    return (
      <div className="grid h-full grid-cols-3 gap-3 p-5" aria-hidden>
        {[0, 1, 2].map((col) => (
          <div
            key={col}
            className="flex flex-col gap-2 border-l border-dashed border-line pl-3"
          >
            <div className="h-2 w-10 rounded-sm bg-faint/50" />
            <div className="h-6 w-full rounded bg-teal/30" />
            <div className="h-6 w-2/3 rounded bg-elevated" />
            <div className="h-6 w-5/6 rounded bg-gold/20" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center gap-4 p-6" aria-hidden>
      <div className="flex items-end gap-2">
        <div className="h-3 w-16 rounded-sm bg-teal/70" />
        <div className="h-3 w-10 rounded-sm bg-faint/50" />
        <div className="h-3 w-20 rounded-sm bg-gold/60" />
      </div>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-teal" />
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="h-2 w-2 rounded-full bg-teal/50" />
        <span className="h-2 w-2 rounded-full bg-faint/60" />
        <span className="h-2 w-2 rounded-full bg-teal/80" />
      </div>
    </div>
  );
}