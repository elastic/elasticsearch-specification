package org.elasticsearch.client.experiments.api.query;

import org.elasticsearch.client.experiments.base.FromXContent;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilder;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilderParser;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ObjectParser;
import org.elasticsearch.common.xcontent.XContentBuilder;

import java.io.BufferedReader;
import java.io.IOException;

public class TermsQuery extends Query {

  private final String field;
  private final String term;

  public TermsQuery(Builder builder) {
    this.field = builder.field;
    this.term = builder.term;
  }

  public String field() {
    return this.field;
  }

  public String term() {
    return this.term;
  }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, Params params) throws IOException {
    // We only serialize our content. It's the enclosing class responsibility to output the variant's discriminant.
    // This allows using this class in non-variant contexts.
    builder.startObject();
    if (this.field != null) {
      builder.field("field", this.field);
    }

    if (this.term != null) {
      builder.field("term", this.term);
    }

    builder.endObject();
    return builder;
  }

  public static Builder builder() {
    return new Builder();
  }

  public static class Builder implements ObjectBuilder<TermsQuery> {

    private String field;
    private String term;

    public Builder field(String v) {
      this.field = v;
      return this;
    }

    public Builder term(String v) {
      this.term = v;
      return this;
    }

    @Override
    public TermsQuery build() {
      return new TermsQuery(this);
    }
  }

//  public static Builder builder() {
//    return new Builder();
//  }

  public static final ContextParser<FromXContent.Params, TermsQuery> PARSER;

  static {

    ObjectParser<Builder, FromXContent.Params> op =
      new ObjectParser<>(TermsQuery.class.getName(), Builder::new);

    op.declareString(Builder::field, new ParseField("field"));
    op.declareString(Builder::term, new ParseField("term"));

    PARSER = new ObjectBuilderParser<>(op);
  }
}
