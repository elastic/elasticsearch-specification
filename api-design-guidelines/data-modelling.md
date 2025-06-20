# API guidelines - Data modelling

Request and response bodies are typically encoded in JSON. The full JSON specification is defined in [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259).

## JSON objects are not ordered

JSON objects must be conceptually treated as **unordered**. Maintaining order of deserialized JSON objects is not supported in general, and isn’t possible in some programming languages.

If preservation of order is important, such ordering information should be represented separately. The examples below shows a plain (unordered) object alongside three alternative representations which also provide ordering detail.

```yaml
// Plain object (unordered)
{
  "one": "eins",
  "two": "zwei",
  "three": "drei"
}

// List of single key objects
[
  {"one": "eins"},
  {"two": "zwei"},
  {"three": "drei"}
]

// List of key-value lists
[
  ["one", "eins"],
  ["two", "zwei"],
  ["three", "drei"]
]

// List of key-value objects
[
  {"key": "one", "value": "eins"},
  {"key": "two", "value": "zwei"},
  {"key": "three", "value": "drei"}
]
```

Ordering of keys in JSON objects should be consistent when serialized into a response body to avoid being confusing to human viewers.

## JSON objects and query parameters must not have duplicate keys

JSON objects and query string parameters must not use duplicate keys. The behaviour of most JSON libraries and language modules is undefined in this regard, and therefore unexpected consequences are likely to occur if duplicate keys are passed.

## Avoid null and empty string to mark a value as missing

Nulls are sometimes used to mark a value as "missing" or "not available". Instead of returning `null` as a value in JSON prefer to omit the field in the response. Empty strings (`""`) should similarly not be used to denote a missing string value as they can be confused for an explicit value of the empty string. It is fine to accept `null` in the request if they have special semantics such as unsetting a value. Otherwise fields that would have null or empty string values should also be omitted in the request.

- DON'T:
  ```yaml
  {"key1": 1, "key2": null} 
  ```
- DON'T:
  ```yaml
  {"key1": 1, "key2": ""}
  ```
- DO:
  ```yaml
  {"key1": 1}
  ```

## Consider the portability of numeric values over JSON

Numeric values can be subject to a couple of limitations that exist in some JSON parsers:

- Values with more than 53 bits of precision are not guaranteed to be interpreted losslessly due to the limitations of the IEEE 64-bit floating point number format, which is used by some parsers. This most notably affects large integer values within the int64 and uint64 ranges.

- Special floating point values (NaN, Infinity and negative zero) are not included in the official JSON spec and, as such, are not reliably understood by all JSON parsers.

In general, a solution to both of these problems is to permit numeric values to be encoded as either JSON strings or JSON numbers for certain cases. However, this solution should only be employed in conjunction with the corresponding API specification, wherein the correct data type and numeric range for a particular field can be denoted. It is the responsibility of the API designer to ensure that ambiguity does not occur between numeric values passed as strings and true string values.

### Integer values

If the API specification defines a field as having a type of int8, int16 or int32 (or equivalent numeric range) then corresponding values should always be encoded as JSON numbers, as no lossiness can occur within these ranges.

If the API specification defines a field as having a type of int64 or uint64 (or equivalent numeric range) then corresponding values may be passed as either JSON numbers or JSON strings. Note that the smallest positive integer that is subject to potential lossiness is (2^53 + 1) and the smallest equivalent negative integer is (-2^53 - 1).

```python
>>> 2**53+1, int(float(2**53+1))
(9007199254740993, 9007199254740992)

>>> -2**53-1, int(float(-2**53-1))
(-9007199254740993, -9007199254740992)
```

In all integer cases, JSON numbers and equivalent JSON strings should only ever be written as digits with an optional sign prefix. A decimal point should never be written for integer fields (even if the fractional component is "`.0`") as JSON parsers that distinguish between numeric types will typically interpret such a value as a floating point number rather than as an integer.

### Floating point values

If the API specification defines a field as having a type of float32 or float64 then corresponding values may be passed as either JSON numbers or JSON strings. All such values should be written with a decimal point and fractional component, even if that fractional component is ".0". If a field is likely to need to pass special values, consider always encoding the values as strings, for simpler client-side processing.

To ensure maximum portability, all special values must be passed as JSON strings and must be encoded precisely according to the table below, including casing.

| JSON output   | Description       |
|---------------|-------------------|
| `"-0.0"`      | Negative zero     |
| `"NaN"`       | Not a number      |
| `"Infinity"`  | Positive infinity |
| `"+Infinity"` | Positive infinity |
| `"-Infinity"` | Negative infinity |

### Don't mix static and dynamic keys in JSON objects

Modelling objects that are a mix between static and dynamic keys is more complex to parse and extend as an API as you need to provide a hash/dictionary-like structure for arbitrary key access in addition to a structure that has properties. To avoid this problem **dynamic values like names and IDs shouldn’t be mixed with static keys in objects**.

An example of mixed static and dynamic keys can be seen in the `indices.field_usage_stats` endpoint response:

```yaml
{
  "_shards": {
    "total": 1,
    "successful": 1,
    "failed": 0
  },
  "my-index": {...}
}
```

The key `"my-index"` is user-defined wheras `"_shards"` is static. This API would be easier to model by keeping all dynamic keys in their own object:

```yaml
{
  "_shards": {
    "total": 1,
    "successful": 1,
    "failed": 0
  },
  "indices": {
     "my-index": {...}
  }
}
```

Or better yet, to completely avoid using dynamic keys the user-defined value can be a property value within the object itself:

```yaml
{
  "_shards": {
    "total": 1,
    "successful": 1,
    "failed": 0
  },
  "indices": [
    {"name": "my-index", ...}
  ]
}
```

### Model object variants in a consumable way

Sometimes an API accepts an object but the keys are determined by what "kind/variant" of the object is intended. An example of this is aggregations, queries, and pipeline steps. There are two ways the Elasticsearch API handles this situation. The first method is using **internal tagging** with property like "type" with analyzers:

```yaml
{
  "type": "snowball",
  "stopwords": ["if", "and", "but"]
}
```

The second is using **external tagging** where the inner object is wrapped with an object with a single key containing the kind of the inner object. This example changes the analyzer from above to use an external variant:

```yaml
{
  "snowball": {
    "stopwords": ["if", "and", "but"]
  }
}
```

Internal tagging is a common way to identify variants and should usually be preferred. However, it may have performance implications when used to deserialize large objects in strongly-typed languages. In that case, external tagging should be considered instead, as it removes the requirement to buffer key-value pairs until the internal variant property is found. Using external tagging also improves traversability of the API (ie auto-complete) as properties can be anticipated without waiting for the discriminant property.

## Model enumerations in a portable way

Enumerations should be modelled in a way that is most portable across programming languages. The following guidelines apply:

- Always use string values
- Values should be case-sensitive and casing should be consistent across the enumeration.
- Values should only use basic characters

**Note that booleans and enumerations are distinct types**. Historically, some enum values have evolved from booleans, but where the original boolean form remains, a clumsy mixture of accepted values sometimes results. For example:

```ts
enum DynamicMapping {strict, runtime, true, false}
```

Where the above type describes the value accepted by the "dynamic_mapping" parameter. While this may be useful for backwards compatibility, this arguably actually introduces a new value which has been conflated with the original. Additionally, changing a value from `boolean -> union[bool|enum]` isn’t backwards compatible for clients. An alternative might be:

```ts
bool DynamicMappingEnabled {true, false}
// only use DynamicMapping if the first value is true
enum DynamicMapping {simple, strict, runtime}
```

Or adding a "disabled" value to the enum:

```ts
enum DynamicMapping {simple, strict, runtime, disabled}
```

## Units

Below is the complete set of units that are accepted by Elasticsearch along with their canonicalized suffix or abbreviation. Note that these units are case-sensitive as there can be collisions within a category (e.g. minute versus month)

| Category  | Unit                    | Suffix(es) / Abbreviation |
|-----------|-------------------------|---------------------------|
| Duration  | Nanosecond              | ns, nanos¹                |
| Duration  | Microsecond             | us, micros                |
| Duration  | Millisecond             | ms, millis¹               |
| Duration  | Second                  | s, seconds                |
| Duration  | Minute                  | m, minutes                |
| Duration  | Hour                    | h, hours                  |
| Duration  | Day                     | d, days                   |
| Duration  | Month                   | M, months                 |
| Duration  | Year                    | y, years                  |
| Distance  | Millimeter              | mm, millimeters           |
| Distance  | Centimeter              | cm, centimeters           |
| Distance  | Meter                   | m, meters                 |
| Distance  | Kilometer               | km, kilometers            |
| Distance  | Inch                    | in, inches                |
| Distance  | Foot                    | ft, feet                  |
| Distance  | Mile                    | mi, miles                 |
| Distance  | Nautical Mile           | nmi, nautical_miles       |
| Byte size | Byte                    | b, bytes                  |
| Byte size | Kilobyte ("kibibyte") ² | kb                        |
| Byte size | Metabyte ("mibibyte") ² | mb                        |
| Byte size | Gigabyte ("gibibyte") ² | gb                        |
| Byte size | Terabyte ("tebibyte") ² | tb                        |
| Byte size | Petabyte ("pebibyte") ² | pb                        |

¹ "millis" and "nanos" are used already in the API as a suffix for field names to either represent a datetime value in terms of "units since the epoch" or a duration of time.
For example: `{"start_date_in_millis": 1652296510000}` or `{"duration_in_millis": 10}`

² Note that Elasticsearch uses suffixes like "kb" (Kilobytes) instead of "kib" (Kibibytes) despite scaling bytes values by factors of 1,024 instead of 1,000. Also note that the suffixes for these units in prose use an uppercase "B" to represent bytes (ie kB, not kb) as lowercase "b" means bits instead of bytes.

For the following measures consider using the default unit in order to be consistent with other areas in the API:

| Metric    | Recommended unit | Suffix examples      |
|-----------|------------------|----------------------|
| Duration  | milliseconds     | "duration_in_millis" |
| Byte size | bytes            | "memory_in_bytes"    |

Values which have a unit should be explicit by specifying the name in the property, name in the value, or unit as a separate property in the same object.

- DO: `{"took_in_millis": 3}`
- DO: `{"took": "3ms"}`
- DO: `{"took": {"value": 3, "unit": "ms"}}`
- DON'T:  `{"took": 3}`

## Formats

Many of our APIs support users supplying values in multiple different formats. For example, a duration can be specified either as an integer value (10000) or as a string value ("10s") and mean the same thing assuming the default unit is "milliseconds" for this value. This is especially true for APIs accepting dates and times.

For the sake of user experience we should accept values in different formats. For values that accept multiple formats the format should be explicitly set by users so Elasticsearch can interpret and validate the value based on the given format. For example:

```yaml
{"type": "date", "format": "yyyy-MM-dd HH:mm:ss"}
```

Values that are returned in responses (with the exception of user-specified values) must always be in the same format. Below is the set of formats to use to be consistent with other APIs:

| Metric    | Format   | Example(s)            |
|-----------|----------|-----------------------|
| Date      | ISO 8601 | "2022-05-10"          |
| Datetime  | ISO 8601 | "2022-05-10 16:00:00" |
| Time zone | ISO 8601 | "Z", "-05:00"         |
