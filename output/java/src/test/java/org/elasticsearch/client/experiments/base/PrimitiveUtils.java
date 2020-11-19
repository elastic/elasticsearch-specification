package org.elasticsearch.client.experiments.base;

/**
 * Support functions for primitive fields in generated classes
 */
public class PrimitiveUtils {
  public static int checkedValue(int value, boolean isSet) {
    mustBeSet(isSet);
    return value;
  }

  public static long checkedValue(long value, boolean isSet) {
    mustBeSet(isSet);
    return value;
  }

  private static void mustBeSet(boolean isSet) {
    if (!isSet) {
      throw new IllegalStateException("Value is not set");
    }
  }
}
