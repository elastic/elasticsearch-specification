# Behaviors

Some APIs needs to be handled differently based on the output language, while others share many common parameters.
This document contains the list of this special interfaces and where those should be used.
Behaviors should be used via `implements` in the specification.

You can find all the special classes and aliases in in the [modeling guide](./modeling-guide.md).

## AdditionalProperties & AdditionalProperty

In some places in the specification an object consists of the union of a set of known properties
and a set of runtime injected properties. Meaning that object should theoretically extend `Dictionary` but expose
a set of known keys. The object might also be part of an object graph and have a parent class.
This puts it into a bin that needs a client specific solution.
We therefore document the requirement to behave like a dictionary for unknown properties with this interface.

```ts
/**
 * @behavior_meta AdditionalProperties fieldname=sub_aggregations
 */
class IpRangeBucket implements AdditionalProperties<AggregateName, Aggregate> {}
```

There are also many places where we expect only one runtime-defined property, such as in field-related queries. To capture that uniqueness constraint, we can use the `AdditionalProperty` (singular) behavior.

```ts
/**
 * @behavior_meta AdditionalProperty key=field value=bounding_box
 */
class GeoBoundingBoxQuery extends QueryBase
  implements AdditionalProperty<Field, BoundingBox>
```

## CommonQueryParameters

Implements a set of common query parameters all API's support.
Since these can break the request structure these are listed explicitly as a behavior.
Its up to individual clients to define support although `error_trace` and `pretty` are
recommended as a minimum.

```ts
class RequestBase implements CommonQueryParameters {}
```

## CommonCatQueryParameters

Implements a set of common query parameters all Cat API's support.
Since these can break the request structure these are listed explicitly as a behavior.

```ts
class CatRequestBase extends RequestBase implements CommonCatQueryParameters {}
```

## OverloadOf

Defines a class that is the "overload" version of a definition used when writing a property.
A class that implements `OverloadOf` should have the exact same properties of the overloaded type.
You can change if a property is required or not and its type, as long as it's either an Overloaded type
or is part of the parent union type. There is no need to port the descriptions
and js doc tags, the compiler will do that for you.

```ts
export class Foo {
  bar?: string
}

export class FooRead implements OverloadOf<Foo> {
  bar: string
}
```

```ts
// if the original property type is an union (of type and type[]),
// the overloaded property type should be either the same type or an element of the union
export class Foo {
  bar: string | string[]
}

export class FooRead implements OverloadOf<Foo> {
  bar: string[]
}
```

```ts
// if the overloaded property has a different type,
// this type should be an overload of the original property type
export class Foo {
  bar?: string
}

export class FooRead implements OverloadOf<Foo> {
  bar: string
}

export class Config {
  foo: Foo
}

export class ConfigRead implements<Config> {
  foo: FooRead
}
```
