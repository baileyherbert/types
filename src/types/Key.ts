/**
 * Extracts and returns the key names of object `T`. When `T` is undefined, a generic `string` type will be returned
 * instead, allowing any key name to be specified.
 *
 * This can be used to implement type safety and autocompletion with consumer interfaces, while allowing any input
 * when an interface is not specified.
 */
export type Key<T> = T extends undefined ? string : Extract<keyof NonNullable<T>, string>;
