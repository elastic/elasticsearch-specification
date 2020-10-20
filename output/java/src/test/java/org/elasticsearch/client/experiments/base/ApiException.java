package org.elasticsearch.client.experiments.base;

import org.elasticsearch.common.xcontent.ContextParser;

import java.io.IOException;

public class ApiException extends IOException {

  // Subclasses of java.lang.Throwable cannot have generic parameters
  // https://docs.oracle.com/javase/specs/jls/se10/html/jls-8.html#jls-8.1.2-310

  public final Object error;

  public ApiException(Object error) {
    this.error = error;
  }
}
