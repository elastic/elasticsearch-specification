/*
 * This file hosts `behaviors`. We use this interfaces that are marked with a `@behavior` JS Doc annotation
 * to signal complicated mappings to the compiler -> canonical json -> client generators.
 *
 * These are problem sets that need a custom client solution.
 */


/**
 * In some places in the specification an object consists of the union of a set of known properties
 * and a set of runtime injected properties. Meaning that object should theoretically extend Dictionary but expose
 * a set of known keys and possibly. The object might already be part of an object graph and have a parent class.
 * This puts it into a bind that needs a client specific solution.
 * We therefore document the requirement to behave like a dictionary for unknown properties with this interface.
 * @behavior Defines a trait that any unknown property for the class should be typed to TValue
 */
interface AdditionalProperties<TKey, TValue> {}

/**
 * A cat response formatted in JSON will be an array of records.
 * Some languages can't represent this easily and need to wrap the
 * array inside an object.
 * @behavior Defines a trait that the response should be an array of records typed to TCatRecord
 */
interface CatResponseBase<TCatRecord> {}

/**
 * HEAD APIs can have a different behavior based on the language,
 * the response body is always empty to it's up to language generators
 * to define how those should be represented.
 * @behavior Defines a trait that the response is empty
 */
interface EmptyResponseBase {}
