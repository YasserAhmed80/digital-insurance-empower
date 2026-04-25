type ClassValue = string | number | false | null | undefined;

/**
 * Tiny class-name combiner. Avoids pulling in a dependency for trivial joins.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
