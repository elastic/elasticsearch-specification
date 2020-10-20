package org.elasticsearch.client.experiments;

import org.elasticsearch.client.experiments.api.Bar;
import org.elasticsearch.client.experiments.api.FooRequest;
import org.elasticsearch.client.experiments.api.FooResponse;
import org.elasticsearch.client.experiments.api.query.Query;
import org.elasticsearch.client.experiments.api.query.TermsQuery;
import org.elasticsearch.client.experiments.base.Client;
import org.junit.Test;

import java.util.Collections;
import java.util.Random;

public class ClientTests {

  @Test
  public void testClient() throws Exception {

    Client client = null; // don't care for now, we're testing compilation

    // Builders everywhere
    FooResponse r1 = client.foo(
      FooRequest.builder()
        .name("z")
        .bar(Bar.builder()
          .name("Raise the bar")
          .build()
        )
      .build()
    );

    // Illustrates creating an object outside of the client call
    Query filter = TermsQuery.builder()
      .field("foo")
      .term("bar")
      .build();

    // Fluid lambda-based builders
    FooResponse r2 = client.foo(f -> f
      .name("z")
      .bar(bar -> bar
        .name("Raise the bar")
      )
      .query(q -> q
        .bool(b -> b
          .add_must(filter)
          .add_must(q1 -> q1
            .terms(t -> t.field("a").term("b"))
          )
          .add_must(q1 -> q1
            .terms(t -> t.field("a").term("b"))
          )
          .minimumShouldMatch(2)
        )
      )
    );
  }
}

