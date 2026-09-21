export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-sm text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.01em] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}