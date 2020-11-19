package org.elasticsearch.client.experiments.api;

import org.elasticsearch.client.experiments.api.query.Query;
import org.elasticsearch.client.experiments.base.ElasticsearchError;
import org.elasticsearch.client.experiments.base.Endpoint;
import org.elasticsearch.client.experiments.base.FromXContent;
import org.elasticsearch.client.experiments.base.Variants;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilder;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilderParser;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ObjectParser;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

import static java.util.Objects.requireNonNull;

// Implementing ToXContent is optional, only if there's a request body
public class FooRequest implements ToXContent {

  //===========================================
  // Fields and getters
  //===========================================

  //-------------------------------------------
  // A required String

  private final String name;

  @NotNull
  public final String name() {
    return this.name;
  }

  //-------------------------------------------
  // An optional String

  private final String routing;

  @Nullable
  public final String routing() {
    return this.routing;
  }

  //-------------------------------------------
  // A required primitive type

  private final int value;

  public int value() {
    return this.value;
  }

  //-------------------------------------------
  // An optional primitive type, represented as a nullable boxed value

  private final Integer size;

  /**
   * Description for field {@code size}
   */
  @Nullable
  public final Integer size() {
    return this.size;
  }

  //-------------------------------------------
  // An optional array

  private final List<String> indices;

  /**
   * A string[] property
   */
  @Nullable
  public final List<String> indices() {
    return this.indices;
  }

  //-------------------------------------------
  // An optional sub-object

  private final Bar bar;

  @Nullable
  public Bar bar() {
    return this.bar;
  }

  //-------------------------------------------
  // An optional query

  private final Query query;

  @Nullable
  public Query query() {
    return this.query;
  }

  //-------------------------------------------

  public FooRequest(Builder builder) {
    this.name = builder.name;
    this.routing = builder.routing;
    this.value = builder.value;
    this.size = builder.size;
    this.indices = builder.indices;
    this.bar = builder.bar;
    this.query = builder.query;
  }


  //===========================================
  // Builder
  //===========================================

  public static class Builder implements ObjectBuilder<FooRequest> {
    protected String name;
    protected String routing;
    protected int value;
    protected boolean value$isSet = false;
    protected Integer size;
    protected List<String> indices;
    protected Bar bar;
    protected Query query;

    public final Builder name(@NotNull String v) {
      this.name = requireNonNull(v);
      return this;
    }

    public final Builder routing(String v) {
      this.routing = v;
      return this;
    }

    public final Builder value(int v) {
      this.value = v;
      this.value$isSet = true;
      return this;
    }

    public final Builder size(@Nullable Integer v) {
      this.size = v;
      return this;
    }

    public final Builder indices(@Nullable List<String> v) {
      indices = v;
      return this;
    }

    // Convenience variant with varargs
    public final Builder indices(String... v) {
      indices = Arrays.asList(v);
      return this;
    }

    public Builder bar(@Nullable Bar v) {
      bar = v;
      return this;
    }

    public Builder bar(Function<Bar.Builder, ObjectBuilder<Bar>> b) {
      return bar(b.apply(new Bar.Builder()).build());
    }

    public Builder query(Query v) {
      this.query = v;
      return this;
    }

    public Builder query(Function<Query.Builder, ObjectBuilder<Query>> b) {
      return query(b.apply(new Query.Builder()).build());
    }

    public FooRequest build() {
      requireNonNull(this.name, "'name' was not set");
      requireTrue(this.value$isSet, "'value' was not set");
      return new FooRequest(this);
    }
  }

  public static Builder builder() {
    return new Builder();
  }

  // Constructor with required fields
  public static Builder builder(String name, int size) {
    Builder result = new Builder();
    result.name(name);
    result.size(size);
    return result;
  }

  //===========================================
  // Serialization
  //===========================================

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, Params params) throws IOException {
    builder.startObject();

    // Classic approach is to use the deserialization field's preferred name:
    //
    //   if (buckets.isPresent()) builder.field(INT_FIELD.getPreferredName(), buckets.getAsInt());
    //
    // In a generated code context we can use the string constant, which also avoids declaring ParseField if we
    // only serialize (e.g. requests)

    // required field
    builder.field("name", this.name);

    // optional field
    if (this.routing != null) builder.field("routing", this.routing);

    // required field
    builder.field("value", value);

    // optional field
    if (this.size != null) builder.field("size", this.size.intValue());

    // We could just call this and let the builder will handle it by itself with:
    //
    //   if (this.indices != null) builder.field("indices", this.indices);
    //
    // But the logic is a bit involved (like checking circular dependencies) so we use a more direct implementation:
    if (this.indices != null) {
      builder.field("indices").startArray();
      for (String str : this.indices) builder.value(str);
      builder.endArray();
    }

    if (this.bar != null) {
      builder.field("bar");
      this.bar.toXContent(builder, params);
    }

    if (this.query != null) {
      builder.field("query");
      Variants.ExternallyTagged.toXContent(Query.VARIANTS, this.query, builder, params);
    }

    builder.endObject();
    return builder;
  }

  //===========================================
  // Deserialization
  // (formally not needed for requests)
  //===========================================

  // Only expose the most general interface to hide implementation details that may change over time.
  public static final ContextParser<FromXContent.Params, FooRequest> PARSER;

  static {
    ObjectParser<Builder, FromXContent.Params> op =
      new ObjectParser<>(FooRequest.class.getName(), FooRequest.Builder::new);

    op.declareString(Builder::name, new ParseField("name"));
    op.declareString(Builder::routing, new ParseField("routing"));
    op.declareInt(Builder::value, new ParseField("value"));
    op.declareInt(Builder::size, new ParseField("size"));
    op.declareStringArray(Builder::indices, new ParseField("indices"));
    op.declareObject(Builder::bar, Bar.PARSER, new ParseField("bar"));
    op.declareObject(Builder::query, Variants.ExternallyTagged.parser(Query.VARIANTS), new ParseField("query"));

    PARSER = new ObjectBuilderParser<>(op);
  }

  //===========================================
  // Endpoint
  //===========================================

  public static final Endpoint<FooRequest, FooResponse, ElasticsearchError> ENDPOINT =
    new Endpoint.Simple<>(
      r -> "POST",
      r -> "/foo",
      Endpoint.Simple.emptyMap(),
      Endpoint.Simple.emptyMap(),
      FooResponse.PARSER
    );

  public static void requireTrue(boolean v, String message) {
    if (!v) throw new IllegalStateException(message);
  }
}
