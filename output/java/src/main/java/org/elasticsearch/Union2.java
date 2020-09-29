package org.elasticsearch;

import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;

public class Union2<A, B> implements XContentable<Union2<A, B>> {

  public static enum Tag{A, B};

  private Tag tag;
  private Object value;

  @SuppressWarnings("unchecked")
  public static <A> Union2<A, ?> fromA(A value) {
    return (Union2<A, ?>)build(Tag.A, value);
  }

  @SuppressWarnings("unchecked")
  public static <B> Union2<?, B> fromB(B value) {
    return (Union2<?, B>)build(Tag.B, value);
  }

  private static Union2<?, ?> build(Tag tag, Object v) {
    Union2<?, ?> result = new Union2<>();
    result.tag = tag;
    result.value = v;
    return result;
  }

  public Tag tag() {
    return tag;
  }

  @SuppressWarnings("unchecked")
  public A a() {
    checkVariant(Tag.A);
    return (A)value;
  }

  @SuppressWarnings("unchecked")
  public B b() {
    checkVariant(Tag.B);
    return (B)value;
  }

  @Override
  public Union2<A, B> fromXContent(XContentParser parser) throws IOException, XContentParseException {
    // TODO: need parsers for each variant at the type definition site. We'll then try them in order until one succeeds
    return null;
  }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    if (value instanceof XContentable) {
      ((XContentable<?>) value).toXContent(builder, params);
    } else {
      builder.value(value);
    }
    return builder;
  }

  private void checkVariant(Tag tag) {
    if (this.tag != tag) throw new IllegalStateException("Union holds variant " + tag);
  }
}
