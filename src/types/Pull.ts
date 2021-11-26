/**
 * Extracts the value of key `K` from object `T` if the value is defined.
 *
 * - If object `T` is undefined, then `F` is returned.
 * - If `T[K]` is undefined, then `F` is returned.
 *
 * This is similar to `Value<T, K, F>` except it checks that the value of `T[K]` is set and allows you to fall back
 * to another value if not.
 */
export type Pull<T, K extends keyof NonNullable<T>, F = unknown> = T extends undefined ? F :
	(NonNullable<T>[K] extends undefined ? F : NonNullable<T>[K]);
