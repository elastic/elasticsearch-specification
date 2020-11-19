package org.elasticsearch.client.experiments;

import org.elasticsearch.client.experiments.api.FooRequest;
import org.elasticsearch.client.experiments.api.query.TermsQuery;
import org.elasticsearch.client.experiments.base.FromXContent;
import org.elasticsearch.common.xcontent.DeprecationHandler;
import org.elasticsearch.common.xcontent.NamedXContentRegistry;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParser;
import org.elasticsearch.common.xcontent.XContentType;
import org.junit.Assert;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;

public class XContentTests extends Assert {

  @Test
  public void testFoo() throws Exception {

    XContent xc = XContentType.JSON.xContent();

    ByteArrayOutputStream baos = new ByteArrayOutputStream();

    FooRequest foo = FooRequest.builder()
      .name("z")
      .value(1)
      .indices("a", "b", "c")
      .bar(b -> b
        .name("Raise the bar")
      )
      .build();

    XContentBuilder xcb = new XContentBuilder(xc, baos);
    foo.toXContent(xcb, ToXContent.EMPTY_PARAMS);

    xcb.close();
    String str = new String(baos.toByteArray());

    assertEquals("{\"name\":\"z\",\"value\":1,\"indices\":[\"a\",\"b\",\"c\"],\"bar\":{\"name\":\"Raise the bar\"}}", str);

    XContentParser parser = xc.createParser(
      NamedXContentRegistry.EMPTY,
      DeprecationHandler.THROW_UNSUPPORTED_OPERATION,
      str.getBytes(StandardCharsets.UTF_8)
    );

    FooRequest foo2 = FooRequest.PARSER.parse(parser, FromXContent.EMPTY_PARAMS);

    assertEquals(foo.name(), foo2.name());
    assertEquals(foo.value(), foo2.value());
    assertNull(foo2.size());
    assertEquals(foo.indices(), foo2.indices());
    assertEquals("Raise the bar", foo.bar().name());
  }

  @Test
  public void testVariants() throws Exception {

    TermsQuery filter = TermsQuery.builder()
      .term("x")
      .field("y")
      .build();

    FooRequest foo = FooRequest.builder()
      .name("z")
      .value(1)
      .query(q -> q
        .bool(b -> b
          .add_must(filter)
          .add_must(m -> m
            .terms(t -> t.field("foo").term("bar"))
          )
          .add_should(s -> s
            .terms(t -> t.field("bar").term("baz"))
          )
          .minimumShouldMatch("60%")
        )
      )
      .build();

    // Serialize, parse and serialize the parse result to check we didn't lose anything

    XContent xc = XContentType.JSON.xContent();
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    XContentBuilder xcb = new XContentBuilder(xc, baos);
    foo.toXContent(xcb, ToXContent.EMPTY_PARAMS);
    xcb.close();

    String str = baos.toString();

    System.out.println(str);

    XContentParser parser = xc.createParser(
      NamedXContentRegistry.EMPTY,
      DeprecationHandler.THROW_UNSUPPORTED_OPERATION,
      str.getBytes(StandardCharsets.UTF_8)
    );

    FooRequest foo2 = FooRequest.PARSER.parse(parser, FromXContent.EMPTY_PARAMS);

    baos = new ByteArrayOutputStream();
    xcb = new XContentBuilder(xc, baos);
    foo2.toXContent(xcb, ToXContent.EMPTY_PARAMS);
    xcb.close();

    String str2 = baos.toString();

    assertEquals(str, str2);

  }
}
