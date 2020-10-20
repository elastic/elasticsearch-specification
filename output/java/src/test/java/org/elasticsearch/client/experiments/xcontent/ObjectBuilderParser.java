package org.elasticsearch.client.experiments.xcontent;

import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ObjectParser;
import org.elasticsearch.common.xcontent.XContentParser;

import java.io.IOException;

public class ObjectBuilderParser<Value, Context> implements ContextParser<Context, Value> {
  private final ObjectParser<? extends ObjectBuilder<Value>, Context> parser;

  public ObjectBuilderParser(ObjectParser<? extends ObjectBuilder<Value>, Context> parser) {
    this.parser = parser;
  }

  @Override
  public Value parse(XContentParser p, Context c) throws IOException {
    ObjectBuilder<Value> builder = parser.parse(p, c);
    return builder.build();
  }
}
