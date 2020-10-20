package org.elasticsearch.client.experiments.api;

import org.elasticsearch.client.experiments.base.FromXContent;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilder;
import org.elasticsearch.client.experiments.xcontent.ObjectBuilderParser;
import org.elasticsearch.common.Nullable;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ObjectParser;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContentBuilder;

import java.io.IOException;

public class Bar implements ToXContent {

  private final String name;

  @Nullable
  public String name() {
    return this.name;
  }

  public Bar(Bar.Builder builder) {
    this.name = builder.name;
  }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, Params params) throws IOException {
    builder.startObject();
    if (this.name != null) builder.field("name", this.name);
    builder.endObject();
    return builder;
  }

  public static Builder builder() {
    return new Builder();
  }

  public static class Builder implements ObjectBuilder<Bar> {
    private String name;

    public Bar.Builder name(@Nullable String name) {
      this.name = name;
      return this;
    }

    public Bar build() {
      return new Bar(this);
    }
  }

  public static final ContextParser<FromXContent.Params, Bar> PARSER;

  static {
    ObjectParser<Builder, FromXContent.Params> op =
      new ObjectParser<>(Bar.class.getName(), Bar.Builder::new);

    op.declareString(Builder::name, new ParseField("name"));

    PARSER = new ObjectBuilderParser<>(op);
  }
}
