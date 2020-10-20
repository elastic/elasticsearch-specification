package org.elasticsearch;

import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;

public class Union2<A, B> {

  public enum Tag{A, B};

  private final Tag tag;
  private final Object value;

  private Union2(Tag tag, Object value) {
    this.tag = tag;
    this.value = value;
  }

  public static <A, B> Union2<A, B> ofA(A value) {
    return build(Tag.A, value);
  }

  public static <A, B> Union2<A, B> ofB(B value) {
    return build(Tag.B, value);
  }

  private static <A, B> Union2<A, B> build(Tag tag, Object v) {
    Union2<A, B> result = new Union2<>(tag, v);
    return result;
  }

  public Tag tag() {
    return tag;
  }

  public A a() {
    return getVariant(Tag.A);
  }

  public B b() {
    return getVariant(Tag.B);
  }

  @SuppressWarnings("unchecked")
  private <T> T getVariant(Tag tag) {
    if (this.tag != tag) throw new IllegalStateException("Union holds variant " + tag);
    return (T) value;
  }

  //-----------------------------------------------------------------------------------------------
  // Serialization / deserialization

  public void toXContent(
    XContentBuilder builder, ToXContent.Params params,
    TriConsumerIO<A, XContentBuilder, ToXContent.Params> a,
    TriConsumerIO<B, XContentBuilder, ToXContent.Params> b
  ) throws IOException {
    switch (this.tag) {
      case A:
        a.accept(this.a(), builder, params);
      case B:
        b.accept(this.b(), builder, params);
    }
  }

  public static <A, B, Context> ContextParser<Context, Union2<A, B>> parser(
    XContentParser.Token tokenA, ContextParser<Context, A> parserA,
    XContentParser.Token tokenB, ContextParser<Context, B> parserB
  ) {
    return (p, c) -> {
      XContentParser.Token t = p.currentToken();
      if (t == tokenA) {
        return Union2.ofA(parserA.parse(p, c));
      } else if (t == tokenB) {
        return Union2.ofB(parserB.parse(p, c));
      } else {
        throw new XContentParseException(p.getTokenLocation(), "Unexpected token '" + t + "'");
      }
    };
  }
}
