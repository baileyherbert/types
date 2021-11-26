# Types

This package contains some lightweight types and interfaces that I commonly use across most of my projects.

```
npm install @baileyherbert/types
```

---

- [`Action<T>`](#actiont)
- [`Delegate<T>`](#delegatet)
- [`Fallback<T, F>`](#fallbackt-f)
- [`Json`](#json)
- [`JsonArray`](#jsonarray)
- [`JsonMap`](#jsonmap)
- [`Key<T>`](#keyt)
- [`Promisable<T>`](#promisablet)
- [`Pull<T, K, F>`](#pullt-k-f)
- [`Type<T>`](#typet)
- [`Value<T, K, F>`](#valuet-k-f)

---

### `Action<T>`

Represents a function that has no arguments and returns type `T` (defaults to `unknown`).

```ts
let fn: Action<boolean> = function() {
	return true;
}
```

### `Delegate<T>`

Represents a function that accepts any arguments and returns type `T` (defaults to `unknown`). This is most useful in
an environment with dependency injection.

```ts
let fn: Delegate<boolean> = function(...args: any[]) {
	return true;
}
```

### `Fallback<T, F>`

Returns `T` if it's defined or `F` otherwise.

```ts
Fallback<boolean, number>; // boolean
Fallback<undefined, number>; // number
```

### `Json`

Represents data that can be serialized into or deserialized from a JSON string.

```ts
let age: Json = 32;
let name: Json = 'John Doe';
let skills: Json = [
	'Programming',
	'Engineering',
	'Architecture'
];
```

### `JsonArray`

Represents an array that can be serialized into or deserialized from a JSON string.

```ts
let arr: JsonArray = [
	'Text',
	123456,
	{
		value: true
	}
]
```

### `JsonMap`

Represents an object that can be serialized into or deserialized from a JSON string.

```ts
let profile: JsonMap = {
	name: 'John Doe',
	age: 32,
	skills: [
		'Programming',
		'Engineering',
		'Architecture'
	]
}
```

### `Key<T>`

Extracts and returns the key names of object `T`. When `T` is undefined, a generic `string` type will be returned
instead, allowing any key name to be specified.

This can be used to implement type safety and autocompletion with consumer interfaces, while allowing any input when an
interface is not specified.

```ts
type Map = {
	first: boolean;
	second: string;
};

type Keys = Key<Map>; // 'first' | 'second'
```

### `Promisable<T>`

Returns type `T` optionally joined with `Promise<T>`.

```ts
Promisable<void>; // void | Promise<void>
```

### `Pull<T, K, F>`

Extracts the value of key `K` from object `T` _if the value is defined_.

This is identical to `Value<T, K, F>` except it also checks that the value of `T[K]` is set and allows you to fall back
to another value if not.

```ts
type Map = {
	first: boolean;
	second: undefined;
};

type A = Value<Map, 'first', unknown>; // boolean
type B = Value<Map, 'second', unknown>; // unknown
```

### `Type<T>`

Returns a type that represents the constructor of class `T`.

```ts
class Foo {}
const constructor: Type<Foo> = Foo;
```

### `Value<T, K, F>`

Extracts the value of key `K` from the given object `T`. The key must be derived from `Key<T>`.

When `T` is undefined, the optional type `F` will be returned instead. This can be used to accept any input when an
interface is not available.

```ts
type Map = {
	value: boolean;
};

type A = Value<Map, 'value', unknown>; // boolean
type B = Value<undefined, 'value', unknown>; // unknown
```
