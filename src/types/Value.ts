import { Key } from './Key';

/**
 * Extracts the value of key `K` from the given object `T`. The key should be derived from `Key<T>`.
 *
 * When `T` is undefined, the optional type `F` will be returned instead. This can be used to accept any input when
 * an interface is not available.
 */
export type Value<T, K extends Key<T>, F = unknown> = T extends undefined ? F : NonNullable<T>[Exclude<K, string>];
