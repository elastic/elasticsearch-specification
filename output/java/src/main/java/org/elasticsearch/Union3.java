package org.elasticsearch;

public class Union3<A, B, C> {

  public enum Tag{A, B, C};

  private final Tag tag;
  private final Object value;

  private Union3(Tag tag, Object value) {
    this.tag = tag;
    this.value = value;
  }

  public static <A, B, C> Union3<A, B, C> ofA(A value) {
    return build(Tag.A, value);
  }

  public static <A, B, C> Union3<A, B, C> ofB(B value) {
    return build(Tag.B, value);
  }

  public static <A, B, C> Union3<A, B, C> ofC(C value) {
    return build(Tag.C, value);
  }

  private static <A, B, C> Union3<A, B, C> build(Tag tag, Object v) {
    Union3<A, B, C> result = new Union3<>(tag, v);
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

  public C c() {
    return getVariant(Tag.C);
  }

  @SuppressWarnings("unchecked")
  private <T> T getVariant(Union3.Tag tag) {
    if (this.tag != tag) throw new IllegalStateException("Union holds variant " + tag);
    return (T) value;
  }
}
