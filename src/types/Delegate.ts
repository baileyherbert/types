/**
 * Represents a function that accepts any arguments and returns type `T`.
 */
export type Delegate<T = unknown> = (...args: any[]) => T;
