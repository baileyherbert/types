/**
 * Returns `T` if it's defined or `F` otherwise.
 */
export type Fallback<T, F> = T extends undefined ? F : NonNullable<T>;
