/**
 * A centered gradient accent bar — the standard visual separator between sections.
 * Renders over the seam between two sections via a negative margin.
 */
export function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative z-10 flex justify-center -my-px">
      <div className="h-1 w-24 rounded-full bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500" />
    </div>
  );
}
