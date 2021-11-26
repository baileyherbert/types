/**
 * Returns a type that represents the constructor of class `T`.
 */
export type Type<T> = new (...args: any[]) => T;
