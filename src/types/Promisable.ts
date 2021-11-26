/**
 * Returns type `T` optionally joined with `Promise<T>`.
 */
export type Promisable<T> = T | Promise<T>;
