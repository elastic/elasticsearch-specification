package org.elasticsearch.client.experiments.base;

import org.elasticsearch.client.experiments.api.FooRequest;
import org.elasticsearch.client.experiments.api.FooResponse;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilder;

import java.io.IOException;
import java.util.function.Function;

public class Client {

  private Transport transport;

  public FooResponse foo(FooRequest request) throws IOException {
    return transport.performRequest(request, FooRequest.ENDPOINT);
  }

  public FooResponse foo(Function<FooRequest.Builder, ObjectBuilder<FooRequest>> b) throws IOException {
    return foo(b.apply(new FooRequest.Builder()).build());
  }
}
