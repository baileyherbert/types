import { JsonArray } from './JsonArray';
import { JsonMap } from './JsonMap';

/**
 * Represents a JSON value.
 *
 * It is recommended to use this type instead of `any` when working with data that originates from or is intended for
 * JSON serialization.
 */
export type Json = boolean | number | string | null | JsonArray | JsonMap | undefined;
