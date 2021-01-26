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
