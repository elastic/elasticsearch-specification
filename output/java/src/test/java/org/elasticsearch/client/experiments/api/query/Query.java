package org.elasticsearch.client.experiments.api.query;

import org.elasticsearch.client.experiments.base.FromXContent;
import org.elasticsearch.client.experiments.base.Variants;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilder;
import org.elasticsearch.common.xcontent.ToXContent;

import java.util.function.Function;

public abstract class Query implements ToXContent {

  public static class Builder implements ObjectBuilder<Query> {

    private ObjectBuilder<? extends Query> builder;

    /**
     * Variant chooser. The function result must be an abstract {@code ObjectBuilder<Query>} rather than a full
     * {@code Query.Builder} so that we cannot chain different variant selectors, e.g. {@code b.bool(...).terms(...)}
     * should not compile. Otherwise {@code terms(...)} would just overwrite what was set with {@code bool(...)}.
     */
    public ObjectBuilder<Query> bool(Function<BoolQuery.Builder, ObjectBuilder<BoolQuery>> b) {
      return builder(b.apply(new BoolQuery.Builder()));
    }

    public ObjectBuilder<Query> terms(Function<TermsQuery.Builder, ObjectBuilder<TermsQuery>> b) {
      return builder(b.apply(new TermsQuery.Builder()));
    }

    @Override
    public Query build() {
      return builder.build();
    }

    private Builder builder(ObjectBuilder<? extends Query> builder) {
      if (this.builder != null) {
        throw new IllegalStateException("Only one variant can be used");
      }
      this.builder = builder;
      return this;
    }
  }

  // No parser for abstract classes, as variant serialization is defined at the usage site.

  public static final Variants<Query, FromXContent.Params> VARIANTS;

  static {
//      VARIANTS = Variants.<Query, FromXContent.Params>builder()
//        .add("terms", TermsQuery.class, TermsQuery.PARSER)
//        .add("bool", BoolQuery.class, BoolQuery.PARSER)
//        .build();

    // Variants for recursive data structures have to be built lazily to avoid cyclic dependencies between static
    // class initialization code.
    VARIANTS = new Variants<>(b -> b
      .add("terms", TermsQuery.class, TermsQuery.PARSER)
      .add("bool", BoolQuery.class, BoolQuery.PARSER)
    );
  }
}
