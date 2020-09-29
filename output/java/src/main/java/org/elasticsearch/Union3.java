package org.elasticsearch;

import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;

public class Union3<A, B, C> implements XContentable<Union3<A, B, C>> {

  public static enum Tag{A, B, C};

  private Tag tag;
  private Object value;

  @SuppressWarnings("unchecked")
  public static <A> Union3<A, ?, ?> fromA(A value) {
    return (Union3<A, ?, ?>)build(Tag.A, value);
  }

  @SuppressWarnings("unchecked")
  public static <B> Union3<?, B, ?> fromB(B value) {
    return (Union3<?, B, ?>)build(Tag.B, value);
  }

  @SuppressWarnings("unchecked")
  public static <C> Union3<?, ?, C> fromC(C value) {
    return (Union3<?, ?, C>)build(Tag.C, value);
  }

  private static Union3<?, ?, ?> build(Tag tag, Object v) {
    Union3<?, ?, ?> result = new Union3<>();
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

  @SuppressWarnings("unchecked")
  public C c() {
    checkVariant(Tag.C);
    return (C)value;
  }

  @Override
  public Union3<A, B, C> fromXContent(XContentParser parser) throws IOException, XContentParseException {
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
