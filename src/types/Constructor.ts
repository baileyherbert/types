/**
 * A type that represents a constructor for class `T`. The class cannot be abstract.
 */
export type Constructor<T> = new (...args: any[]) => T;
