/**
 * A type that represents a class of type `T`.
 */
export type Type<T> = Function & { prototype: T };
