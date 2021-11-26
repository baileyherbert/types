/**
 * Represents a function that has no arguments and returns type `T`.
 */
export type Action<T = unknown> = () => T;
