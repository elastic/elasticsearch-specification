package org.elasticsearch.client.experiments.api.query;

import org.elasticsearch.Union2;
import org.elasticsearch.client.experiments.base.FromXContent;
import org.elasticsearch.client.experiments.base.Variants;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilder;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilderParser;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ObjectParser;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParseException;
import org.elasticsearch.common.xcontent.XContentParser;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.function.Function;

import static org.elasticsearch.common.xcontent.ObjectParser.ValueType.VALUE_OBJECT_ARRAY;

public class BoolQuery extends Query {

  private final Collection<Query> should;
  private final Collection<Query> must;
  private final Union2<Integer, String> minimumShouldMatch;

  public BoolQuery(Builder builder) {
    this.should = builder.should;
    this.must = builder.must;
    this.minimumShouldMatch = builder.minimumShouldMatch;
  }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, Params params) throws IOException {
    builder.startObject();

    if (should != null) {
      builder.field("should");
      builder.startArray();
      for (Query v: should) Variants.ExternallyTagged.toXContent(Query.VARIANTS, v, builder, params);
      builder.endArray();
    }

    if (should != null) {
      builder.field("must");
      builder.startArray();
      for (Query v: must) Variants.ExternallyTagged.toXContent(Query.VARIANTS, v, builder, params);
      builder.endArray();
    }

    if (minimumShouldMatch != null) {
      builder.field("minimum_should_match");
      // Unions have to be expanded inline as serialization depends on the value type.
      this.minimumShouldMatch.toXContent(builder, params,
        (v, b, p) -> builder.value(v), // value(Integer)
        (v, b, p) -> builder.value(v)  // value(String)
      );
    }

    builder.endObject();
    return builder;
  }

  public static Builder builder() {
    return new Builder();
  }

  public static class Builder implements ObjectBuilder<BoolQuery> {

    private Collection<Query> should;
    private Collection<Query> must;
    private Union2<Integer, String> minimumShouldMatch;

    public Builder should(Collection<Query> v) {
      this.should = v;
      return this;
    }

    public Builder add_should(@Nullable Query v) {
      if (v == null) return this;
      if (this.should == null) this.should = new ArrayList<>();
      this.should.add(v);
      return this;
    }

    public Builder add_should(Function<Query.Builder, ObjectBuilder<Query>> v) {
      return add_should(v.apply(new Query.Builder()).build());
    }

    public Builder must(Collection<Query> v) {
      this.must = v;
      return this;
    }

    public Builder add_must(@Nullable Query v) {
      if (v == null) return this;
      if (this.must == null) this.must = new ArrayList<>();
      this.must.add(v);
      return this;
    }

    public Builder add_must(Function<Query.Builder, ObjectBuilder<Query>> v) {
      return add_must(v.apply(new Query.Builder()).build());
    }

    // Expand all union members
    // TODO: check unions with nested structures and fluent builders
    public Builder minimumShouldMatch(int v) {
      return minimumShouldMatch(Union2.ofA(v));
    }

    public Builder minimumShouldMatch(String v) {
      return minimumShouldMatch(Union2.ofB(v));
    }

    public Builder minimumShouldMatch(Union2<Integer, String> v) {
      this.minimumShouldMatch = v;
      return this;
    }

    @Override
    public BoolQuery build() {
      return new BoolQuery(this);
    }
  }

  public static final ContextParser<FromXContent.Params, BoolQuery> PARSER;

  static {

    ObjectParser<Builder, FromXContent.Params> op =
      new ObjectParser<>(BoolQuery.class.getName(), Builder::new);

    op.declareObjectArray(Builder::must, Variants.ExternallyTagged.parser(Query.VARIANTS), new ParseField("must"));
    op.declareObjectArray(Builder::should, Variants.ExternallyTagged.parser(Query.VARIANTS), new ParseField("should"));

    // A type should be able to provide the set of start tokens it expects and a parser (incl for primitive types).
    op.declareField(Builder::minimumShouldMatch, Union2.parser(
      XContentParser.Token.VALUE_NUMBER, (p, c) -> p.intValue(),
      XContentParser.Token.VALUE_STRING, (p, c) -> p.text()
    ), new ParseField("minimum_should_match"), VALUE_OBJECT_ARRAY);

    PARSER = new ObjectBuilderParser<>(op);
  }
}
