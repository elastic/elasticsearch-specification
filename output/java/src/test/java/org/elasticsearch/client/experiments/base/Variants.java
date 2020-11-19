package org.elasticsearch.client.experiments.base;

import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 * Describes the variants of a base class, providing their name and parsers. It is representation-agnostic.
 */
public class Variants<T, Context> {

  private Function<Builder<T, Context>, Builder<T, Context>> builderFunc;

  private Map<Class<?>, String> variantNames;
  private Map<String, ContextParser<Context, T>> parsers;

  /**
   * Builds a new {@code Variants} from a builder-creation function. This approach allows the object to be built lazily,
   * which is needed for recursive variant data structures (e.g. a query can be a boolean query that itself contains
   * other queries).
   *
   * This is required because cyclic dependencies between static class initialization code can lead to unexpected
   * behaviour (a subclass static init may be called while static init of the parent class is not finished).
   */
  public Variants(Function<Builder<T, Context>, Builder<T, Context>> b) {
    this.builderFunc = b;
  }

  public Variants(Builder<T, Context> builder) {
    this.variantNames = builder.variantNames;
    this.parsers = builder.parsers;
  }

  public String variantName(Class<? extends T> clazz) {
    build();
    return variantNames.get(clazz);
  }

  public ContextParser<Context, T> variantParser(String name) {
    build();
    return parsers.get(name);
  }

  private void build() {
    if (builderFunc != null) {
      Builder<T, Context> builder = builderFunc.apply(new Builder<>());
      this.variantNames = builder.variantNames;
      this.parsers = builder.parsers;
      this.builderFunc = null;
    }
  }

  //-------------------------------------------------------------------------------------------------------------------

  public static <BT, BContext> Builder<BT, BContext> builder() {
    return new Builder<BT, BContext>();
  }

  public static class Builder<BT, BContext> {
    private final Map<Class<?>, String> variantNames = new HashMap<>();
    private final Map<String, ContextParser<BContext, BT>> parsers = new HashMap<>();

    @SuppressWarnings("unchecked")
    public Builder<BT, BContext> add(String name, Class<? extends BT> clazz, ContextParser<BContext, ? extends BT> parser) {
      variantNames.put(clazz, name);
      parsers.put(name, (ContextParser<BContext, BT>) parser);
      return this;
    }

    public Variants<BT, BContext> build() {
      return new Variants<>(this);
    }
  }

  //-------------------------------------------------------------------------------------------------------------------

  /**
   * Variant serializer/deserializer using externally tagged JSON.
   * <p>
   * See <a href="https://serde.rs/enum-representations.html">Enumerations in Serde.rs</a> that clearly explains the
   * various strategies to represent polymorphic values in JSON.
   */
  public static class ExternallyTagged {

    /**
     * Creates a parser for externally tagged variants
     */
    public static <Context, T> ContextParser<Context, T> parser(Variants<T, Context> variants) {
      return (p, c) -> {
        expectNextToken(p, XContentParser.Token.FIELD_NAME);

        String variant = p.currentName();
        ContextParser<Context, T> variantParser = variants.variantParser(variant);

        if (variantParser == null) {
          throw new XContentParseException(p.getTokenLocation(), "Unknown variant '" + variant + "'");
        }

        T result = variantParser.parse(p, c);

        expectNextToken(p, XContentParser.Token.END_OBJECT);
        return result;
      };
    }

    /**
     * Serializes an externally tagged variant object
     */
    private static void expectNextToken(XContentParser parser, XContentParser.Token expected) throws IOException {
      XContentParser.Token token = parser.nextToken();
      if (token != expected) {
        throw new XContentParseException(parser.getTokenLocation(), "Expected " + expected + " but got " + token);
      }
    }

    public static <T extends ToXContent> void toXContent(
      Variants<T, ?> variants, T v, XContentBuilder builder, ToXContent.Params params
    ) throws IOException {

      @SuppressWarnings("unchecked")
      String variant = variants.variantName((Class<? extends T>)v.getClass());

      if (variant == null) {
        throw new IllegalArgumentException("No variant name found for " + v.getClass().getName());
      }

      builder.startObject();
      builder.field(variant);
      v.toXContent(builder, params);
      builder.endObject();
    }
  }
}
